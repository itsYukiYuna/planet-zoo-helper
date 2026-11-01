// Menu Function
const navbar = document.querySelector('nav');
const menuOverlay = document.getElementById("menu-overlay");

function openMenu() {
    if (!navbar) return;
    navbar.classList.add('show');
    document.body.classList.add('menu-open');
    if (menuOverlay) {
        menuOverlay.hidden = false;
    }
}
function closeMenu() {
    if (!navbar) return;
    navbar.classList.remove('show');
    document.body.classList.remove('menu-open');
    if (menuOverlay) {
        menuOverlay.hidden = true;
    }
}

menuOverlay?.addEventListener("click", closeMenu);
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
        closeMenu();
    }
});
window.matchMedia("(max-width: 1060px)").addEventListener("change", event => {
    if (!event.matches && document.body.classList.contains("menu-open")) {
        closeMenu();
    }
});

window.openMenu = openMenu;
window.closeMenu = closeMenu;

// Animal Cards Modal Function

let animalDataPromise;
let activeAnimalModalClose;
let animalModalRequestId = 0;
let activeAnimalTooltipTrigger;
let activeAnimalTooltip;

const animalTooltipSelector = "#modal-container .animal-modal-tooltip[data-tooltip], #modal-container .animal-modal-compact-value[data-tooltip], #modal-container .animal-modal-disease[data-tooltip]";

function hideAnimalTooltip() {
    activeAnimalTooltip?.remove();
    activeAnimalTooltip = null;
    activeAnimalTooltipTrigger = null;
}

function showAnimalTooltip(trigger) {
    const text = trigger.dataset.tooltip;
    if (!text || activeAnimalTooltipTrigger === trigger) return;
    hideAnimalTooltip();

    const tooltip = document.createElement("div");
    tooltip.className = "animal-modal-tooltip-popup";
    tooltip.textContent = text;
    document.body.append(tooltip);

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const centeredLeft = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
    const left = Math.max(8, Math.min(centeredLeft, window.innerWidth - tooltipRect.width - 8));
    const gap = 8;
    const showAbove = trigger.closest(".animal-modal-details");
    const aboveTop = triggerRect.top - tooltipRect.height - gap;
    const belowTop = triggerRect.bottom + gap;
    const top = showAbove && aboveTop >= 8
        ? aboveTop
        : Math.min(belowTop, window.innerHeight - tooltipRect.height - 8);

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(8, top)}px`;
    activeAnimalTooltipTrigger = trigger;
    activeAnimalTooltip = tooltip;
}

const findAnimalTooltipTrigger = target => target instanceof Element
    ? target.closest(animalTooltipSelector)
    : null;

document.addEventListener("pointerover", event => {
    const trigger = findAnimalTooltipTrigger(event.target);
    if (trigger) showAnimalTooltip(trigger);
});

document.addEventListener("pointerout", event => {
    const trigger = findAnimalTooltipTrigger(event.target);
    if (!trigger || (event.relatedTarget instanceof Node && trigger.contains(event.relatedTarget))) return;
    if (activeAnimalTooltipTrigger !== trigger) return;
    if (document.activeElement !== trigger && !trigger.contains(document.activeElement)) {
        hideAnimalTooltip();
    }
});

document.addEventListener("focusin", event => {
    const trigger = findAnimalTooltipTrigger(event.target);
    if (trigger) showAnimalTooltip(trigger);
});

document.addEventListener("focusout", event => {
    const trigger = findAnimalTooltipTrigger(event.target);
    if (!trigger || (event.relatedTarget instanceof Node && trigger.contains(event.relatedTarget))) return;
    if (activeAnimalTooltipTrigger !== trigger) return;
    hideAnimalTooltip();
});

const escapeModalHTML = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
})[character]);

const modalValueName = value => {
    if (typeof value === "string" || typeof value === "number") {
        return String(value);
    }
    return value?.name ?? value?.type ?? value?.status ?? "";
};

const modalHasValue = value => value !== null && value !== undefined && value !== "";

const modalIcon = (source, label, className = "") => {
    if (!source) return "";
    const iconSource = source.includes("icons_conservation_full_")
        && !/\.(png|svg|webp|avif)$/i.test(source)
        ? `${source}.png`
        : source;
    return `<img class="animal-modal-icon ${className}" src="${escapeModalHTML(iconSource)}" alt="${escapeModalHTML(label)}">`;
};

const modalIconLink = (source, label, href) => {
    if (!source || !href) return "";
    return `<a class="animal-modal-round-link animal-modal-tooltip" href="${escapeModalHTML(href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeModalHTML(label)}" data-tooltip="${escapeModalHTML(label)}">${modalIcon(source, label)}</a>`;
};

const modalTooltip = (label, content, className = "") => content
    ? `<span class="animal-modal-tooltip ${className}" data-tooltip="${escapeModalHTML(label)}">${content}</span>`
    : "";

const modalList = value => Array.isArray(value)
    ? value.filter(modalHasValue)
    : modalHasValue(value) ? [value] : [];

const modalDisplay = value => escapeModalHTML(modalValueName(value) || "N/A");

const modalRange = (range, suffix = "") => {
    const min = range?.min;
    const max = range?.max;
    if (!modalHasValue(min) || !modalHasValue(max)) return "";
    return `${escapeModalHTML(min)}${suffix} - ${escapeModalHTML(max)}${suffix}`;
};

const modalIconCollection = values => modalList(values).map(value => {
    const name = modalValueName(value);
    return modalTooltip(name, modalIcon(value?.icon, name));
}).join("");

const modalTextCollection = values => modalList(values)
    .map(modalValueName)
    .filter(Boolean)
    .map(escapeModalHTML)
    .join(", ");

function buildAnimalModal(animal, allAnimals) {
    const habitatAreaProperties = [
        ["landArea", "landPerAddAdult", "Land", "land"],
        ["shelterArea", "shelterPerAddAdult", "Shelter", "shelter"],
        ["climbableArea", "climbablePerAddAdult", "Climbable", "climbable"],
        ["flyableArea", "flyablePerAddAdult", "Flyable", "flyable"],
        ["waterArea", "waterPerAddAdult", "Water", "water"],
        ["deepWaterArea", "deepWaterPerAddAdult", "Deep Water", "deepWater"]
    ];
    const terrainProperties = [
        ["grassRange", "Grass", "grassRange"],
        ["grassShort", "Short Grass", "grassShort"],
        ["grassLong", "Long Grass", "grassLong"],
        ["sandRange", "Sand", "sandRange"],
        ["sandFine", "Fine Sand", "sandFine"],
        ["sandCoarse", "Coarse Sand", "sandCoarse"],
        ["soilRange", "Soil", "soilRange"],
        ["rockRange", "Rock", "rockRange"],
        ["waterloggedRange", "Waterlogged", "waterlogged"],
        ["snowRange", "Snow", "snowRange"]
    ];

    const imageURL = animal.imageURL || animal.image;
    const typeLabel = modalValueName(animal.type);
    const dlc = animal.DLC;
    const simpleDetail = (label, value, icon = "") => {
        if (!modalHasValue(value)) return "";
        return `<span class="animal-modal-detail-pair">${icon}<span>${escapeModalHTML(label)}: ${modalDisplay(value)}</span></span>`;
    };
    const iconDetail = (label, value, icon, suffix = "") => {
        if (!modalHasValue(value)) return "";
        const content = `${modalIcon(icon, label)}<span class="animal-modal-detail-label">${escapeModalHTML(label)}:</span><span>${escapeModalHTML(value)}${suffix}</span>`;
        return `<span class="animal-modal-compact-value" data-tooltip="${escapeModalHTML(label)}">${content}</span>`;
    };
    const formatAdultGroup = (min, max) => {
        if (!modalHasValue(max) || Number(max) === 0) return "";
        return `${modalHasValue(min) ? min : 0} - ${max}`;
    };
    const areaHTML = habitatAreaProperties.map(([areaKey, adultKey, label, icon]) => {
        const area = animal[areaKey];
        if (!modalHasValue(area) || Number(area) === 0) return "";
        const image = `/pz2/images/icons/icons_area_${icon}.svg`;
        const additional = animal[adultKey];
        return `<span class="animal-modal-area animal-modal-tooltip" data-tooltip="${escapeModalHTML(`${label} Area`)}">${modalIcon(image, label)}<span>${escapeModalHTML(area)} m²</span>${modalHasValue(additional) ? `<small>+${escapeModalHTML(additional)} m² p/Adult</small>` : ""}</span>`;
    }).join("");
    const terrainHTML = terrainProperties.map(([key, label, icon]) => {
        const value = animal[key];
        const isRange = value && typeof value === "object";
        const formatted = isRange ? modalRange(value, "%") : modalHasValue(value) ? `${escapeModalHTML(value)}%` : "";
        if (!formatted
            || (isRange && Number(value.min) === 0 && Number(value.max) === 0)
            || (!isRange && Number(value) === 0)) return "";
        return modalTooltip(label, `${modalIcon(`/pz2/images/icons/icons_terrain_${icon}.png`, label)}<span>${formatted}</span>`, "animal-modal-terrain-item");
    }).join("");
    const conditionLines = [
        ["Temperature", modalRange(animal.temperatureRange, "°C"), "/pz2/images/icons/icons_enclosure_temperature.svg"],
        ["Plant Coverage", modalRange(animal.plantCoverage, "%"), "/pz2/images/icons/icons_enclosure_plants.svg"],
        ["Humidity", modalRange(animal.humidityRange, "%"), "/pz2/images/icons/icons_enclosure_humidity.svg"],
        ["Salinity", modalValueName(animal.salinity), "/pz2/images/icons/icons_enclosure_salinity.svg"]
    ].filter(([, value]) => modalHasValue(value));
    const conditionHTML = conditionLines.map(([label, value, icon]) => {
        const description = label === "Salinity" ? animal.salinity?.description : "";
        const tooltip = description ? `${value}: ${description}` : label;
        const hideLabel = label === "Salinity" || label === "Temperature" || label === "Plant Coverage" || label === "Humidity";
        return `<span class="animal-modal-compact-value ${hideLabel ? "animal-modal-hide-label" : ""}" data-tooltip="${escapeModalHTML(tooltip)}">${modalIcon(icon, label)}<span class="animal-modal-detail-label">${escapeModalHTML(label)}:</span><span>${escapeModalHTML(value)}</span></span>`;
    }).join("");

    const enclosureTypes = modalList(animal.enclosureTypes).map(modalValueName).filter(Boolean);
    const litterSizeHTML = animal.offspringPerMating
        && modalHasValue(animal.offspringPerMating.min)
        && modalHasValue(animal.offspringPerMating.max)
        ? simpleDetail("Litter Size", Number(animal.offspringPerMating.min) === Number(animal.offspringPerMating.max)
            ? animal.offspringPerMating.min
            : `${animal.offspringPerMating.min} - ${animal.offspringPerMating.max}`)
        : "";
    const lifespanStages = [
        ["Juvenile", animal.juvenileYears, "juvenile"],
        ["Adult", animal.adultYears, "adult"],
        ["Elder", animal.elderlyYears, "elder"]
    ].filter(([, value]) => modalHasValue(value)).map(([label, value, stage]) =>
        `<span class="animal-modal-lifespan-stage is-${stage}"><strong>${label}</strong><span>${escapeModalHTML(value)} years</span></span>`
    ).join("");
    const maturityAgeHTML = simpleDetail("Maturity Age", modalHasValue(animal.maturityAge) ? `${animal.maturityAge} years` : null);
    const sterilityAgeHTML = simpleDetail("Sterility Age", modalHasValue(animal.sterilityAge)
        ? animal.sterilityAge === "Death" ? "Death" : `${animal.sterilityAge} years`
        : null);
    const reproductionTypes = [
        ["groupDivision", "When the group is big enough, it can split to form a new young group."],
        ["spawning", "Juveniles spawn from the parent some time after mating"],
        ["pregnancy", "The mother gets pregnant after mating and gives birth to live offspring."],
        ["eggLaying", "The mother lays eggs after mating."]
    ].filter(([key]) => animal[key] === true).map(([, text]) => text);
    const relationshipHTML = relationships => {
        const names = modalList(relationships).map(modalValueName).filter(Boolean);
        if (!names.length) return `<p class="animal-modal-empty">No compatible species</p>`;
        return `<div class="animal-modal-related">${names.map(name => {
            const related = allAnimals.find(candidate => candidate.name === name);
            return related
                ? `<button type="button" class="animal-modal-related-animal" data-modal-animal="${escapeModalHTML(related.name)}">${modalIcon(related.headshotURL || related.headshot, related.headshot || related.name)}<span>${escapeModalHTML(related.name)}</span></button>`
                : `<span class="animal-modal-detail-pair">${escapeModalHTML(name)}</span>`;
        }).join("")}</div>`;
    };
    const foodGradeHTML = [1, 2].map(grade => {
        const name = animal[`foodGrade${grade}`];
        const adult = animal[`foodGrade${grade}Cost`];
        const juvenile = animal[`foodGrade${grade}CostJuv`];
        if (![name, adult, juvenile].some(modalHasValue)) return "";
        const cost = value => modalHasValue(value) ? `$${Number(value).toFixed(2)}` : "";
        return `<div class="animal-modal-food-grade"><strong>Grade ${grade}</strong>${modalHasValue(name) ? `<span>${escapeModalHTML(name)}</span>` : ""}${modalHasValue(adult) ? `<span>${cost(adult)} p/Adult</span>` : ""}${modalHasValue(juvenile) ? `<span>${cost(juvenile)} p/Juvenile</span>` : ""}</div>`;
    }).join("");
    const diseasesHTML = modalList(animal.diseases).map(disease => {
        const name = modalValueName(disease);
        const tooltip = modalHasValue(disease?.level) || disease?.danger
            ? `${disease.level ?? ""}${disease.level && disease.danger ? " - " : ""}${disease.danger ?? ""}`
            : name;
        return `<span class="animal-modal-care-value animal-modal-disease" data-tooltip="${escapeModalHTML(tooltip)}">${escapeModalHTML(name)}</span>`;
    }).join("");
    const conservationTopicsHTML = modalList(animal.conservationTopics)
        .map(topic => `<span class="animal-modal-care-value">${escapeModalHTML(modalValueName(topic))}</span>`)
        .join("");
    const thrivingRequirements = animal.thrivingRequirements && typeof animal.thrivingRequirements === "object"
        ? Object.values(animal.thrivingRequirements).filter(Boolean)
        : [];
    const thrivingHTML = thrivingRequirements.map(requirement =>
            `<li><strong>${escapeModalHTML(requirement.requirement ?? "Requirement")}:</strong> ${escapeModalHTML(requirement.value ?? "")} ${escapeModalHTML(requirement.valueType ?? "")}</li>`
        ).join("");
    const standardCoatHTML = animal.standardCoat
        ? Object.values(animal.standardCoat).filter(Boolean).map(coat =>
            `<li>${escapeModalHTML(coat.description || coat.name || "")}</li>`
        ).join("")
        : "";
    const colourmorphs = animal.colourmorphs && typeof animal.colourmorphs === "object"
        ? Object.values(animal.colourmorphs).filter(Boolean)
        : [];
    const colourmorphHTML = colourmorphs.length
        ? colourmorphs.map(morph => `<span class="animal-modal-colourmorph animal-modal-tooltip" data-tooltip="${escapeModalHTML(morph.description || morph.name || "")}">${modalIcon(morph.icon, morph.name || "Colourmorph")}<strong>${escapeModalHTML(morph.name || "Colourmorph")}</strong></span>`).join("")
        : `<p class="animal-modal-empty">No Colourmorphs Available</p>`;
    const mapHTML = animal.map
        ? `<img class="animal-modal-map" src="${escapeModalHTML(animal.map)}" alt="${escapeModalHTML(`${animal.name} map`)}">`
        : `<p class="animal-modal-empty">No map available</p>`;
    const standardCoatImage = animal.headshotURL || animal.headshot;
    const generalHTML = [
        animal.form && `<span class="animal-modal-icon-label">${modalIcon(animal.form.icon, modalValueName(animal.form))}<span>Form: ${modalDisplay(animal.form)}</span></span>`,
        animal.type && `<span class="animal-modal-icon-label">${modalIcon(animal.type.icon, typeLabel)}<span>Type: ${modalDisplay(animal.type)}</span></span>`,
        `<span class="animal-modal-line-break"></span>`,
        modalHasValue(animal.careerAccreditation) && `<span class="animal-modal-icon-label">${modalIcon("/pz2/images/icons/icons_tierUnlock.svg", "Career Tier")}<span>Career Tier: ${escapeModalHTML(animal.careerAccreditation)}</span></span>`,
        modalHasValue(animal.franchiseAccreditation) && `<span class="animal-modal-icon-label">${modalIcon("/pz2/images/icons/icons_tierUnlock.svg", "Franchise Tier")}<span>Franchise Tier: ${escapeModalHTML(animal.franchiseAccreditation)}</span></span>`,
        `<span class="animal-modal-line-break"></span>`,
        modalHasValue(animal.maxAnimalAppeal) && `<span class="animal-modal-icon-label">${modalIcon("/pz2/images/icons/icons_animalAppeal.svg", "Max Appeal")}<span>Max Appeal: ${escapeModalHTML(animal.maxAnimalAppeal)}</span></span>`,
        animal.temperament && `<span class="animal-modal-icon-label">${modalIcon("/pz2/images/icons/icons_temperament.svg", "Temperament")}<span>Temperament: ${modalDisplay(animal.temperament)}</span></span>`
    ].filter(Boolean).join("");

    return `<div id="modal-container" class="animal-modal-container" data-animal="${escapeModalHTML(animal.name)}">
        <div id="modal-overlay" class="animal-modal-overlay" aria-label="Close animal details"></div>
        <button id="modal-close" class="modal-close animal-modal-close" type="button" aria-label="Close animal details">
            <img src="/pz2/images/icons/icons_UI_toggleFalse.svg" alt="">
        </button>
        <div id="modal-animal-card" class="animal-modal-card">
            <div class="modal-animal-image" style="grid-area: animal-card-image;">
                <img src="${escapeModalHTML(imageURL || "")}" alt="${escapeModalHTML(animal.name)}">
            </div>
            <div class="modal-animal-name" style="grid-area: animal-card-name;">
                <div><h1>${escapeModalHTML(animal.name)}</h1></div>
                <div><h3>${escapeModalHTML(animal.latin || "")}</h3></div>
                <div class="modal-animal-taxonomy">
                    <div>Class: ${modalDisplay(animal.class)}</div>
                    <div>Order: ${modalDisplay(animal.order)}</div>
                    <div>Family: ${modalDisplay(animal.family)}</div>
                    <div>Genus: ${modalDisplay(animal.genus)}</div>
                </div>
                ${animal.conservation ? `<div class="animal-modal-conservation">${modalIcon(animal.conservation.iconFull || animal.conservation.icon, modalValueName(animal.conservation))}</div>` : ""}
            </div>
            <div class="modal-animal-general" style="grid-area: animal-card-general;">
                <div class="animal-modal-general-layout">
                    <div class="animal-modal-geography">
                        ${[
                            ["Native Range", animal.nativeRange],
                            ["Biomes", animal.biomes]
                        ].map(([label, values]) => `<div class="animal-modal-geography-group"><strong>${label}</strong><div class="animal-modal-icon-collection">${modalIconCollection(values)}</div></div>`).join("")}
                    </div>
                    <div class="animal-modal-general-top">
                        ${dlc?.icon ? `<span class="animal-modal-tooltip" data-tooltip="${escapeModalHTML(modalValueName(dlc))}">${modalIcon(dlc.icon, modalValueName(dlc))}</span>` : ""}
                        <span class="animal-modal-general-links">
                            ${modalIconLink("/pz2/images/favicon.svg", "Official Zoopedia", animal.zoopedia)}
                            ${modalIconLink("/pz2/images/icons/icons_wikipedia.svg", "Real Animal Wiki", animal.wiki)}
                        </span>
                    </div>
                </div>
            </div>
            <div class="modal-animal-details animal-modal-details" style="grid-area: animal-card-details;">
                <h3>General</h3>
                <div class="modal-animal-details-item animal-modal-general-details">${generalHTML}</div>
                <h3>Enclosure</h3>
                <div class="modal-animal-details-item animal-modal-enclosure">
                    ${enclosureTypes.length ? `<div class="animal-modal-enclosure-line"><div class="animal-modal-detail-pair">${modalIcon("/pz2/images/icons/icons_enclosure_barrier.svg", "Enclosure Type")}<span>${escapeModalHTML(enclosureTypes.join(", "))}</span></div></div>` : ""}
                    <div class="animal-modal-enclosure-line">
                        ${simpleDetail("Cohabitation Options", animal.cohabitationOptions)}
                        ${typeof animal.guestsEnter === "boolean" ? `<div class="animal-modal-detail-pair animal-modal-boolean">
                            <span>${animal.guestsEnter === true ? "Guests Can Walk Through" : "Guests Can't Walk Through"}</span>
                            <span class="animal-modal-boolean-icon ${animal.guestsEnter === true ? "is-true" : "is-false"}">${modalIcon(`/pz2/images/icons/icons_UI_toggle${animal.guestsEnter === true ? "True" : "False"}.svg`, "Guests Walk Through")}</span>
                        </div>` : ""}
                    </div>
                    ${(() => {
                        const barrierStrength = modalHasValue(animal.barrierStrength)
                            ? iconDetail("Barrier Strength", `Grade ${animal.barrierStrength}`, "/pz2/images/icons/icons_enclosure_barrierStrength.svg")
                            : "";
                        const barrierHeight = modalHasValue(animal.barrierHeight)
                            ? iconDetail("Barrier Height", animal.barrierHeight, "/pz2/images/icons/icons_enclosure_barrierHeight.svg", "m")
                            : "";
                        return barrierStrength || barrierHeight
                            ? `<div class="animal-modal-enclosure-line animal-modal-enclosure-barriers">${barrierStrength}${barrierHeight}</div>`
                            : "";
                    })()}
                    ${conditionHTML ? `<div class="animal-modal-enclosure-line animal-modal-enclosure-conditions">${conditionHTML}</div>` : ""}
                </div>
                ${areaHTML ? `<h3>Space Requirements</h3><div class="modal-animal-details-item animal-modal-area-list">${areaHTML}</div>` : ""}
                ${terrainHTML ? `<h3>Terrain</h3><div class="modal-animal-details-item animal-modal-terrain-list">${terrainHTML}</div>` : ""}
                <h3>Group Ranges</h3>
                <div class="modal-animal-details-item animal-modal-group-ranges">
                    <div class="animal-modal-group-column">
                        <strong>${modalIcon("/pz2/images/icons/icons_animals_mixed.svg", "Mixed Group")} Mixed Group</strong>
                        <span>${formatAdultGroup(animal.groupSizeMin, animal.groupMixedMax) || "N/A"}</span>
                    </div>
                    ${(Number(animal.maxMalesMixed) > 0 || Number(animal.maxFemalesMixed) > 0) ? `<div class="animal-modal-group-column"><span>${Number(animal.maxMalesMixed) === 1 ? "Single Male" : `Males: ${escapeModalHTML(animal.maxMalesMixed ?? "N/A")}`}</span><span>${Number(animal.maxFemalesMixed) === 1 ? "Single Female" : `Females: ${escapeModalHTML(animal.maxFemalesMixed ?? "N/A")}`}</span></div>` : ""}
                    ${Number(animal.maxMalesBachelor) > 0 ? `<div class="animal-modal-group-column"><strong>${modalIcon("/pz2/images/icons/icons_releaseGroups_maleGroup.svg", "Male Group")} Male Group</strong><span>${formatAdultGroup(animal.groupSizeMin, animal.maxMalesBachelor)}</span></div>` : ""}
                    ${Number(animal.maxFemalesBachelor) > 0 ? `<div class="animal-modal-group-column"><strong>${modalIcon("/pz2/images/icons/icons_releaseGroups_femaleGroup.svg", "Female Group")} Female Group</strong><span>${formatAdultGroup(animal.groupSizeMin, animal.maxFemalesBachelor)}</span></div>` : ""}
                    <span class="animal-modal-line-break"></span>
                    <div class="animal-modal-group-meta">${simpleDetail("Dominance", animal.dominance)}${simpleDetail("Alpha Animals", animal.alphaDominance?.type || animal.alphaDominance)}</div>
                </div>
                <h3>Breeding &amp; Lifecycle</h3>
                <div class="modal-animal-details-item animal-modal-breeding">
                    <div class="animal-modal-breeding-line">
                        ${simpleDetail("Mating System", animal.matingSystem)}
                        ${simpleDetail("Mating Season", modalTextCollection(animal.matingSeason))}
                    </div>
                    ${simpleDetail("Reproduction Difficulty", animal.reproductionDifficulty)
                        ? `<div class="animal-modal-breeding-line">${simpleDetail("Reproduction Difficulty", animal.reproductionDifficulty)}</div>`
                        : ""}
                    ${(litterSizeHTML || animal.preBirthMonths != null || animal.interbirthMonths != null)
                        ? `<div class="animal-modal-breeding-line">${litterSizeHTML}${simpleDetail("Prebirth", modalHasValue(animal.preBirthMonths) ? `${animal.preBirthMonths} months` : null)}${simpleDetail("Interbirth", modalHasValue(animal.interbirthMonths) ? `${animal.interbirthMonths} months` : null)}</div>`
                        : ""}
                    ${lifespanStages ? `<div class="animal-modal-breeding-line animal-modal-lifespan">${lifespanStages}</div>` : ""}
                    ${(maturityAgeHTML || sterilityAgeHTML) ? `<div class="animal-modal-breeding-line">${maturityAgeHTML}${sterilityAgeHTML}</div>` : ""}
                    ${reproductionTypes.map(text => `<span class="animal-modal-detail-pair">${escapeModalHTML(text)}</span>`).join("")}
                    ${animal.eggLaying === true ? `<span class="animal-modal-detail-pair">${escapeModalHTML(animal.nestbound ? "A parent will incubate the eggs and they will care for nestbound hatchlings." : animal.brooding ? "A parent will incubate the eggs till they hatch." : "Parents do not incubate the eggs.")}</span>` : ""}
                </div>
                <h3>Wildlife Reserves</h3>
                <div class="modal-animal-details-item animal-modal-reserves">
                    ${animal.releasable === false ? `<p class="animal-modal-empty">No Wildlife Reserves Available</p>` : `
                        ${modalList(animal.wildlifeReserves).length ? `<div class="animal-modal-reserve-line">${modalList(animal.wildlifeReserves).map(reserve => `<span class="animal-modal-reserve">${modalIcon(reserve.icon, reserve.name)}<strong>${escapeModalHTML(reserve.name)}</strong><small>${escapeModalHTML([reserve.continent, reserve.biome].filter(Boolean).join(", "))}</small></span>`).join("")}</div>` : ""}
                        ${modalList(animal.ecosystems).length ? `<div class="animal-modal-reserve-line">${modalList(animal.ecosystems).map(ecosystem => `<span class="animal-modal-reserve reserve-ecosystem">${modalIcon(ecosystem.icon, ecosystem.name)}<strong>${escapeModalHTML(ecosystem.name)}</strong><small>Biome: ${escapeModalHTML(ecosystem.biome || "N/A")}</small></span>`).join("")}</div>` : ""}
                        ${modalList(animal.speciesRoles).length ? `<div class="animal-modal-wide-line"><strong>Species Roles:</strong> ${modalTextCollection(animal.speciesRoles)}</div>` : ""}
                        ${modalList(animal.rolesRequired).length ? `<div class="animal-modal-wide-line"><strong>Roles Required:</strong> ${modalTextCollection(animal.rolesRequired)}</div>` : ""}
                        ${modalList(animal.releaseGroups).length ? `<div class="animal-modal-release-groups"><strong>Release Groups:</strong>${modalList(animal.releaseGroups).map(group => `<span>${modalIcon(group.icon, group.type)}${escapeModalHTML(group.type)}</span>`).join("")}</div>` : ""}
                        ${animal.releasable !== false && !modalList(animal.wildlifeReserves).length ? `<p class="animal-modal-empty">No Wildlife Reserves Available</p>` : ""}
                    `}
                </div>
                <h3>Research &amp; Enrichments</h3>
                <div class="modal-animal-details-item animal-modal-care">
                    <div class="animal-modal-wide-line"><strong>Movement:</strong> ${[
                        animal.canMoveOnLand && "Moves on Land",
                        animal.canJump && "Jumps",
                        animal.canClimb && "Climbs",
                        animal.canFly && "Flies",
                        animal.canWade && !animal.canSwim && "Wades in Water",
                        animal.canSwim && "Swims",
                        animal.canDive && "Dives",
                        !animal.canWade && !animal.canSwim && !animal.canDive && "Can't Swim"
                    ].filter(Boolean).map(escapeModalHTML).join(", ") || "N/A"}</div>
                    ${modalList(animal.feeders).length ? `<div class="animal-modal-care-subsection animal-modal-enrichment-icons"><strong>Food &amp; Water</strong><div class="animal-modal-icon-collection">${modalIconCollection(animal.feeders)}</div></div>` : ""}
                    ${foodGradeHTML ? `<div class="animal-modal-care-subsection"><strong>Food Costs</strong><div class="animal-modal-food-costs">${foodGradeHTML}</div></div>` : ""}
                    ${modalList(animal.foodEnrichment).length ? `<div class="animal-modal-care-subsection animal-modal-enrichment-icons"><strong>Food-based Enrichment</strong><div class="animal-modal-icon-collection">${modalIconCollection(animal.foodEnrichment)}</div></div>` : ""}
                    ${modalList(animal.toyEnrichment).length ? `<div class="animal-modal-care-subsection animal-modal-enrichment-icons"><strong>Toy Enrichment</strong><div class="animal-modal-icon-collection">${modalIconCollection(animal.toyEnrichment)}</div></div>` : ""}
                    ${modalList(animal.shelters).length ? `<div class="animal-modal-care-subsection animal-modal-enrichment-icons"><strong>Bedding, Shelters & Nests</strong><div class="animal-modal-icon-collection">${modalIconCollection(animal.shelters)}</div></div>` : ""}
                    ${diseasesHTML ? `<div class="animal-modal-care-subsection"><strong>Diseases</strong><div class="animal-modal-care-values">${diseasesHTML}</div></div>` : ""}
                    ${conservationTopicsHTML ? `<div class="animal-modal-care-subsection"><strong>Conservation Topics</strong><div class="animal-modal-care-values">${conservationTopicsHTML}</div></div>` : ""}
                </div>
                <h3>Thriving Relationships</h3>
                <div class="modal-animal-details-item">${relationshipHTML(animal.thrivingRelationships, "thriving")}</div>
                <h3>Neutral Relationships</h3>
                <div class="modal-animal-details-item">${relationshipHTML(animal.neutralRelationships, "neutral")}</div>
                ${thrivingHTML ? `<h3>Thriving Requirements</h3><div class="modal-animal-details-item"><ul class="animal-modal-bullet-list">${thrivingHTML}</ul></div>` : ""}
                <h3>Standard Coat(s)</h3>
                <div class="modal-animal-details-item animal-modal-standard-coat">
                    ${standardCoatImage ? modalIcon(standardCoatImage, animal.headshot || animal.name, "animal-modal-standard-headshot") : ""}
                    ${standardCoatHTML ? `<ul class="animal-modal-bullet-list">${standardCoatHTML}</ul>` : `<span class="animal-modal-empty">No standard coat information available</span>`}
                </div>
                <h3>Colourmorphs</h3>
                <div class="modal-animal-details-item animal-modal-colourmorphs">${colourmorphHTML}</div>
                <h3>Map</h3>
                <div class="modal-animal-details-item animal-modal-map-container">${mapHTML}</div>
                <h3>Notes</h3>
                <div class="modal-animal-details-item">${animal.notes ? escapeModalHTML(animal.notes) : "No additional notes available."}</div>
            </div>
        </div>
    </div>`;
}

async function openAnimalModal(animalName) {
    const existingModal = document.getElementById("modal-container");
    if (existingModal?.dataset.animal === animalName) return;
    activeAnimalModalClose?.();
    const requestId = ++animalModalRequestId;

    try {
        animalDataPromise ??= import("/pz2/scripts/animals.js").then(module => Object.values(module.animals));
        const allAnimals = await animalDataPromise;
        if (requestId !== animalModalRequestId) return;
        const animal = allAnimals.find(candidate => candidate.name === animalName);
        if (!animal) {
            throw new Error(`Could not find animal data for "${animalName}".`);
        }

        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = buildAnimalModal(animal, allAnimals);
        const modal = modalContainer.firstElementChild;
        if (!(modal instanceof HTMLElement)) {
            throw new Error(`Could not create the animal modal for "${animalName}".`);
        }
        document.body.append(modal);
        document.body.classList.add("animal-modal-open");

        const closeModal = () => {
            if (activeAnimalTooltipTrigger && modal.contains(activeAnimalTooltipTrigger)) {
                hideAnimalTooltip();
            }
            modal.remove();
            document.body.classList.remove("animal-modal-open");
            document.removeEventListener("keydown", handleEscape);
            if (activeAnimalModalClose === closeModal) {
                activeAnimalModalClose = null;
                animalModalRequestId += 1;
            }
        };
        const handleEscape = event => {
            if (event.key === "Escape") closeModal();
        };
        modal.querySelector("#modal-close")?.addEventListener("click", closeModal);
        modal.querySelector("#modal-overlay")?.addEventListener("click", closeModal);
        modal.addEventListener("click", event => {
            if (!(event.target instanceof Element)) return;
            const relatedAnimal = event.target.closest("[data-modal-animal]");
            if (!relatedAnimal) return;
            event.preventDefault();
            event.stopPropagation();
            void openAnimalModal(relatedAnimal.dataset.modalAnimal);
        });
        activeAnimalModalClose = closeModal;
        document.addEventListener("keydown", handleEscape);
    } catch (error) {
        console.error("Failed to open the PZ2 animal modal:", error);
    }
}

document.addEventListener("click", event => {
    if (!(event.target instanceof Element) || event.target.closest("#modal-container")) return;
    const card = event.target.closest(".zoopedia-animal");
    const image = event.target.closest("img");
    const animalName = card?.dataset.animalName;
    if (!image || !animalName) return;
    event.preventDefault();
    void openAnimalModal(animalName);
});

export function createMultiSelectDropdown({
    container,
    options,
    label,
    onChange,
    showIcons = true,
    getOptionLabel = option => option.name ?? option.type ?? String(option)
}) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("A container element is required to create a multi-select dropdown.");
    }
    if (!container.id) {
        throw new Error("A multi-select dropdown container must have an id.");
    }
    if (typeof onChange !== "function") {
        throw new Error("A change handler is required to create a multi-select dropdown.");
    }

    let optionEntries = Object.entries(options);
    if (optionEntries.length === 0) {
        throw new Error("A multi-select dropdown requires at least one option.");
    }

    container.classList.add("multi-select-dropdown");

    const heading = document.createElement("span");
    heading.className = "multi-select-dropdown-heading";
    heading.textContent = `${label}:`;

    const header = document.createElement("div");
    header.className = "multi-select-dropdown-header";

    const allLabel = document.createElement("label");
    allLabel.className = "multi-select-dropdown-all";

    const allCheckbox = document.createElement("input");
    allCheckbox.type = "checkbox";
    allCheckbox.value = "ALL";
    allCheckbox.checked = true;
    allCheckbox.setAttribute("aria-label", `Select all ${label} options`);

    const allText = document.createElement("span");
    allText.textContent = "ALL";
    allLabel.append(allCheckbox, allText);

    const dropdownId = `${container.id}-options`;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "multi-select-dropdown-toggle";
    toggle.setAttribute("aria-label", `Toggle ${label} options`);
    toggle.setAttribute("aria-haspopup", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", dropdownId);

    const toggleIcon = document.createElement("img");
    toggleIcon.src = "/pz2/images/icons/icons_UI_dropdownMenu.svg";
    toggleIcon.alt = "";
    toggle.append(toggleIcon);

    const optionsList = document.createElement("ul");
    optionsList.id = dropdownId;
    optionsList.className = "multi-select-dropdown-options";
    optionsList.hidden = true;

    header.append(heading, allLabel, toggle);
    container.replaceChildren(header, optionsList);

    let selectedKeys = optionEntries.map(([key]) => key);
    let optionCheckboxes = [];

    function renderOptions() {
        optionCheckboxes = optionEntries.map(([key, option]) => {
            const item = document.createElement("li");
            const optionLabel = document.createElement("label");
            optionLabel.className = "multi-select-dropdown-option";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = `${container.id}[]`;
            checkbox.value = key;
            checkbox.checked = true;

            const iconSource = showIcons && option && typeof option === "object"
                ? option.icon
                : null;
            if (iconSource) {
                const icon = document.createElement("img");
                icon.src = iconSource;
                icon.alt = "";
                icon.className = "multi-select-dropdown-option-icon";
                if (container.id === "filters-ecosystems") {
                    icon.classList.add("is-circular");
                }
                icon.addEventListener("error", () => {
                    if (icon.dataset.fallbackApplied) {
                        return;
                    }
                    icon.dataset.fallbackApplied = "true";
                    icon.src = "/images/icon-planet-zoo.svg";
                });
                optionLabel.append(icon);
            }

            const optionText = document.createElement("span");
            optionText.textContent = getOptionLabel(option, key);
            optionLabel.prepend(checkbox);
            optionLabel.append(optionText);
            item.append(optionLabel);
            optionsList.append(item);

            return {key, checkbox};
        });

        syncCheckboxes();
        optionCheckboxes.forEach(({key, checkbox}) => {
            checkbox.addEventListener("change", () => {
                if (selectedKeys.length === optionEntries.length && !checkbox.checked) {
                    selectedKeys = [key];
                } else {
                    selectedKeys = optionCheckboxes
                        .filter(option => option.checkbox.checked)
                        .map(option => option.key);
                }

                if (selectedKeys.length === 0) {
                    selectedKeys = optionEntries.map(([optionKey]) => optionKey);
                }

                syncCheckboxes();
                notifyChange();
            });
        });
    }

    function syncCheckboxes() {
        optionCheckboxes.forEach(({key, checkbox}) => {
            checkbox.checked = selectedKeys.includes(key);
        });
        allCheckbox.checked = selectedKeys.length === optionEntries.length;
    }

    function notifyChange() {
        onChange([...selectedKeys]);
    }

    function closeOptions() {
        if (optionsList.hidden) {
            return;
        }
        optionsList.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        container.append(optionsList);
        optionsList.style.removeProperty("position");
        optionsList.style.removeProperty("left");
        optionsList.style.removeProperty("top");
        optionsList.style.removeProperty("min-width");
        optionsList.style.removeProperty("transform");
    }

    function positionOptions() {
        if (optionsList.hidden) {
            return;
        }
        const bounds = container.getBoundingClientRect();
        const halfPopupWidth = optionsList.getBoundingClientRect().width / 2;
        const viewportPadding = 8;
        const minCenter = halfPopupWidth + viewportPadding;
        const maxCenter = window.innerWidth - halfPopupWidth - viewportPadding;
        const centeredLeft = bounds.left + bounds.width / 2;
        optionsList.style.left = `${Math.max(minCenter, Math.min(centeredLeft, maxCenter))}px`;
        optionsList.style.top = `${bounds.bottom}px`;
    }

    container.addEventListener("zoopedia:reset", () => {
        closeOptions();
        selectedKeys = optionEntries.map(([key]) => key);
        syncCheckboxes();
        notifyChange();
    });

    allCheckbox.addEventListener("change", () => {
        selectedKeys = optionEntries.map(([key]) => key);
        syncCheckboxes();
        notifyChange();
    });

    toggle.addEventListener("click", () => {
        if (!optionsList.hidden) {
            closeOptions();
            return;
        }
        document.body.append(optionsList);
        optionsList.style.position = "fixed";
        optionsList.style.transform = "translateX(-50%)";
        optionsList.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
        positionOptions();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !optionsList.hidden) {
            closeOptions();
            toggle.focus();
        }
    });

    document.addEventListener("click", event => {
        if (!container.contains(event.target)
            && !optionsList.contains(event.target)
            && !optionsList.hidden) {
            closeOptions();
        }
    });
    document.addEventListener("scroll", positionOptions, true);
    window.addEventListener("resize", positionOptions);

    function setOptions(nextOptions) {
        const nextEntries = Object.entries(nextOptions);
        const hadAllSelected = selectedKeys.length === optionEntries.length;
        const availableKeys = new Set(nextEntries.map(([key]) => key));
        optionEntries = nextEntries;
        selectedKeys = hadAllSelected
            ? nextEntries.map(([key]) => key)
            : selectedKeys.filter(key => availableKeys.has(key));
        if (selectedKeys.length === 0) {
            selectedKeys = nextEntries.map(([key]) => key);
        }
        optionsList.replaceChildren();
        renderOptions();
        notifyChange();
    }

    renderOptions();
    notifyChange();
    return {setOptions};
}

export function createMultiToggleFilter({container, options, onChange}) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("A container element is required to create a multi-toggle filter.");
    }
    if (typeof onChange !== "function") {
        throw new Error("A change handler is required to create a multi-toggle filter.");
    }

    const optionEntries = Object.entries(options);
    if (optionEntries.length === 0) {
        throw new Error("A multi-toggle filter requires at least one option.");
    }

    container.classList.add("multi-toggle-filter");
    const toggleAll = document.createElement("button");
    toggleAll.type = "button";
    toggleAll.className = "multi-toggle-filter-all is-selected";
    toggleAll.setAttribute("aria-label", "Show all options");
    toggleAll.setAttribute("aria-pressed", "true");

    const allIcon = document.createElement("img");
    allIcon.src = "/pz2/images/icons/icons_UI_toggleAll.svg";
    allIcon.alt = "";
    toggleAll.append(allIcon);

    const choiceButtons = optionEntries.map(([key, option]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "multi-toggle-filter-choice";
        button.setAttribute("aria-pressed", "false");

        const icon = document.createElement("img");
        icon.src = option.icon;
        icon.alt = "";

        const name = document.createElement("span");
        name.textContent = option.name ?? option.type ?? String(option);
        button.append(icon, name);

        return {key, button};
    });

    container.replaceChildren(toggleAll, ...choiceButtons.map(({button}) => button));

    let selectedKeys = optionEntries.map(([key]) => key);

    function updateSelection(nextKeys) {
        selectedKeys = nextKeys;
        const isAllSelected = selectedKeys.length === optionEntries.length;
        toggleAll.classList.toggle("is-selected", isAllSelected);
        toggleAll.setAttribute("aria-pressed", String(isAllSelected));

        choiceButtons.forEach(({key, button}) => {
            const isSelected = !isAllSelected && selectedKeys.includes(key);
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });

        onChange([...selectedKeys]);
    }

    container.addEventListener("zoopedia:reset", () => {
        updateSelection(optionEntries.map(([key]) => key));
    });

    toggleAll.addEventListener("click", () => {
        updateSelection(optionEntries.map(([key]) => key));
    });

    choiceButtons.forEach(({key, button}) => {
        button.addEventListener("click", () => {
            if (selectedKeys.length === optionEntries.length) {
                updateSelection([key]);
                return;
            }

            const nextKeys = selectedKeys.includes(key)
                ? selectedKeys.filter(selectedKey => selectedKey !== key)
                : [...selectedKeys, key];

            updateSelection(
                nextKeys.length === 0 || nextKeys.length === optionEntries.length
                    ? optionEntries.map(([optionKey]) => optionKey)
                    : nextKeys
            );
        });
    });

    onChange([...selectedKeys]);
}

export function createIconChoiceFilter({
    container,
    label,
    options,
    onChange,
    modeToggle = false,
    resetOnly = false
}) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("A container element is required to create an icon choice filter.");
    }
    if (typeof onChange !== "function") {
        throw new Error("A change handler is required to create an icon choice filter.");
    }

    const entries = Object.entries(options);
    if (entries.length === 0) {
        throw new Error("An icon choice filter requires at least one option.");
    }

    container.classList.add("icon-choice-filter");
    const heading = document.createElement("span");
    heading.className = "icon-choice-filter-heading";
    heading.textContent = label;

    const choices = document.createElement("div");
    choices.className = "icon-choice-filter-options";
    const buttons = entries.map(([key, option]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "icon-choice-filter-option";
        button.title = option.status ?? option.name ?? String(option);
        button.setAttribute("aria-label", button.title);
        button.setAttribute("aria-pressed", "false");

        const image = document.createElement("img");
        image.src = option.icon;
        image.alt = "";
        image.addEventListener("error", () => {
            if (image.dataset.fallbackApplied) {
                return;
            }
            image.dataset.fallbackApplied = "true";
            image.src = "/images/icon-planet-zoo.svg";
        });
        button.append(image);
        choices.append(button);
        return {key, button};
    });

    let selectedKeys = [];
    let matchMode = "exact";
    let matchModeButton = null;

    function updateSelection(nextKeys) {
        selectedKeys = nextKeys;
        buttons.forEach(({key, button}) => {
            const selected = selectedKeys.includes(key);
            button.classList.toggle("is-selected", selected);
            button.classList.toggle("is-dimmed", selectedKeys.length > 0 && !selected);
            button.setAttribute("aria-pressed", String(selected));
        });
        if (matchModeButton) {
            const isResetButton = selectedKeys.length > 0;
            matchModeButton.classList.toggle("is-reset", isResetButton);
            matchModeButton.classList.toggle("is-any-match", matchMode === "any" && !isResetButton);
            matchModeButton.title = resetOnly || isResetButton
                ? "Reset selections"
                : matchMode === "exact" ? "Show Any Matches" : "Show Exact Matches";
            matchModeButton.setAttribute("aria-label", matchModeButton.title);
            matchModeButton.setAttribute(
                "aria-pressed",
                String(!resetOnly && !isResetButton && matchMode === "any")
            );
        }
        onChange([...selectedKeys], matchMode);
    }

    buttons.forEach(({key, button}) => {
        button.addEventListener("click", () => {
            const nextKeys = selectedKeys.includes(key)
                ? selectedKeys.filter(selectedKey => selectedKey !== key)
                : [...selectedKeys, key];
            updateSelection(nextKeys.length === entries.length ? [] : nextKeys);
        });
    });

    if (modeToggle) {
        matchModeButton = document.createElement("button");
        matchModeButton.type = "button";
        matchModeButton.className = "icon-choice-filter-mode";
        matchModeButton.setAttribute("aria-pressed", "false");
        const modeIcon = document.createElement("img");
        modeIcon.src = "/pz2/images/icons/icons_UI_toggleAll.svg";
        modeIcon.alt = "";
        matchModeButton.append(modeIcon);
        matchModeButton.addEventListener("click", () => {
            if (resetOnly) {
                if (selectedKeys.length > 0) {
                    updateSelection([]);
                }
                return;
            }
            if (selectedKeys.length > 0) {
                matchMode = "exact";
                updateSelection([]);
                return;
            }
            matchMode = matchMode === "exact" ? "any" : "exact";
            updateSelection(selectedKeys);
        });
        choices.append(matchModeButton);
    }

    container.replaceChildren(heading, choices);
    container.addEventListener("zoopedia:reset", () => {
        matchMode = "exact";
        updateSelection([]);
    });
    updateSelection([]);
}

export function createSelectFilter({container, options, onChange, label}) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("A container element is required to create a select filter.");
    }
    if (typeof onChange !== "function") {
        throw new Error("A change handler is required to create a select filter.");
    }

    const optionEntries = Object.entries(options);
    if (optionEntries.length === 0) {
        throw new Error("A select filter requires at least one option.");
    }

    const labelText = label ?? container.id
        .replace(/^filters-/, "")
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const labelElement = document.createElement("label");
    labelElement.className = "simple-select-filter-label";
    labelElement.textContent = `${labelText}:`;

    const select = document.createElement("select");
    select.className = "simple-select-filter-control";
    select.setAttribute("aria-label", labelText);

    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "ALL";
    select.append(allOption);

    optionEntries.forEach(([key, option]) => {
        const selectOption = document.createElement("option");
        selectOption.value = key;
        selectOption.textContent = option && typeof option === "object"
            ? option.name ?? option.type ?? key
            : String(option);
        select.append(selectOption);
    });

    container.classList.add("simple-select-filter");
    container.replaceChildren(labelElement, select);
    select.addEventListener("change", () => onChange(select.value));
    container.addEventListener("zoopedia:reset", () => {
        select.value = "";
        onChange(select.value);
    });
    onChange(select.value);
}

export function createBooleanToggleFilter({container, label, onChange}) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("A container element is required to create a boolean toggle filter.");
    }
    if (typeof onChange !== "function") {
        throw new Error("A change handler is required to create a boolean toggle filter.");
    }

    container.classList.add("boolean-toggle-filter");

    const heading = document.createElement("span");
    heading.className = "boolean-toggle-filter-heading";
    heading.textContent = label;

    const choices = [
        {value: null, name: "All", icon: "icons_UI_toggleAll.svg", className: "all"},
        {value: true, name: "True", icon: "icons_UI_toggleTrue.svg", className: "true"},
        {value: false, name: "False", icon: "icons_UI_toggleFalse.svg", className: "false"}
    ];
    const buttons = choices.map(({value, name, icon, className}) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `boolean-toggle-filter-choice boolean-toggle-filter-${className}`;
        button.setAttribute("aria-label", `${label}: ${name}`);
        button.setAttribute("aria-pressed", String(value === null));

        const image = document.createElement("img");
        image.src = `/pz2/images/icons/${icon}`;
        image.alt = "";
        image.addEventListener("error", () => {
            if (image.dataset.fallbackApplied) {
                return;
            }
            image.dataset.fallbackApplied = "true";
            image.src = "/images/icon-planet-zoo.svg";
        });
        button.append(image);

        button.addEventListener("click", () => {
            selectedValue = selectedValue === value ? null : value;
            buttons.forEach(({value: buttonValue, button: choiceButton}) => {
                const isSelected = buttonValue === selectedValue;
                choiceButton.classList.toggle("is-selected", isSelected);
                choiceButton.setAttribute("aria-pressed", String(isSelected));
            });
            onChange(selectedValue);
        });

        return {value, button};
    });

    let selectedValue = null;
    buttons.forEach(({button}) => button.classList.toggle("is-selected", button === buttons[0].button));
    container.replaceChildren(heading, ...buttons.map(({button}) => button));
    container.addEventListener("zoopedia:reset", () => {
        selectedValue = null;
        buttons.forEach(({value, button}) => {
            const isSelected = value === null;
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });
        onChange(selectedValue);
    });
    onChange(selectedValue);
}