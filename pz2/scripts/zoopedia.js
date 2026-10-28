import {
    DLC, form, types, enclosures, enclosureTypes, salinity, cohabitationOptions,
    temperament, matingSystem, matingSeason, reproductionDifficulty, offspringDispersal,
    wildlifeReserves, ecosystems, speciesRoles, conservation, nativeRange, biomes,
    shelters, diseases, conservationTopics
} from "/pz2/scripts/filters.js";
import {animals} from "/pz2/scripts/animals.js";
import {
    createMultiSelectDropdown,
    createMultiToggleFilter,
    createSelectFilter,
    createBooleanToggleFilter,
    createIconChoiceFilter
} from "/pz2/scripts/interface.js";

const zoopediaList = document.getElementById("zoopedia-list");
const dlcFilter = document.getElementById("filters-dlc");
const formFilter = document.getElementById("filters-form");
const typesFilter = document.getElementById("filters-types");
const enclosuresFilter = document.getElementById("filters-enclosures");
const zoopediaFilters = document.getElementById("zoopedia-filters");

if (!zoopediaList) {
    throw new Error('Could not find the "zoopedia-list" element.');
}

if (!dlcFilter) {
    throw new Error('Could not find the "filters-dlc" element.');
}

if (!formFilter || !typesFilter || !enclosuresFilter) {
    throw new Error("Could not find all Zoopedia multi-toggle filter elements.");
}
if (!zoopediaFilters) {
    throw new Error('Could not find the "zoopedia-filters" element.');
}

let selectedDLCKeys = Object.keys(DLC);
let selectedFormKeys = Object.keys(form);
let selectedTypeKeys = Object.keys(types);
let selectedEnclosureKeys = Object.keys(enclosures);
const selectedSimpleFilters = {
    enclosureTypes: "",
    salinity: "",
    cohabitationOptions: "",
    temperament: "",
    shelters: "",
    diseases: "",
    diets: "",
    activityPatterns: "",
    matingSystem: "",
    matingSeason: "",
    reproductionDifficulty: "",
    offspringDispersal: ""
};
const selectedBooleanFilters = {
    guestsEnter: null,
    releasable: null,
    colourmorphs: null
};
const selectedIconFilters = {
    conservation: [],
    nativeRange: [],
    biomes: []
};
const iconFilterModes = {
    nativeRange: "exact",
    biomes: "exact"
};
const selectedMinimums = {
    landArea: null,
    shelterArea: null,
    climbableArea: null,
    flyableArea: null,
    waterArea: null,
    deepWaterArea: null,
    barrierHeight: null,
    barrierStrength: null
};
const selectedRanges = {
    temperatureRange: null,
    plantCoverage: null,
    grassRange: null,
    sandRange: null,
    soilRange: null,
    rockRange: null,
    waterloggedRange: null,
    snowRange: null
};
const selectedTaxonomy = {
    class: "",
    order: "",
    family: "",
    genus: ""
};
const selectedReproduction = {value: ""};
const selectedMovement = {movement: "", swimming: ""};
const reproductionOptions = [
    {key: "pregnancy", label: "Pregnancy", matches: animal => animal.pregnancy === true},
    {key: "egg-laying", label: "Lays Eggs", matches: animal => animal.eggLaying === true},
    {
        key: "leaves-eggs",
        label: "Leaves Eggs",
        matches: animal => animal.eggLaying === true && animal.brooding === false
    },
    {key: "broods-eggs", label: "Broods Eggs", matches: animal => animal.brooding === true},
    {key: "nestbound", label: "Nestbound", matches: animal => animal.nestbound === true},
    {key: "group-division", label: "Group Division", matches: animal => animal.groupDivision === true},
    {key: "just-spawns", label: "Just Spawns", matches: animal => animal.spawning === true}
];
const movementOptions = [
    {key: "moves-on-land", label: "Moves on Land", matches: animal => animal.canMoveOnLand === true},
    {key: "can-jump", label: "Can Jump", matches: animal => animal.canJump === true},
    {key: "can-climb", label: "Can Climb", matches: animal => animal.canClimb === true},
    {key: "can-fly", label: "Can Fly", matches: animal => animal.canFly === true},
    {
        key: "only-swims",
        label: "Only Swims",
        matches: animal => animal.canMoveOnLand === false && animal.canSwim === true
    }
];
const swimmingOptions = [
    {
        key: "cant-swim",
        label: "Can't Swim",
        matches: animal => animal.canWade === false && animal.canSwim === false
    },
    {
        key: "only-wades",
        label: "Only Wades",
        matches: animal => animal.canWade === true && animal.canSwim === false
    },
    {key: "can-swim", label: "Can Swim", matches: animal => animal.canSwim === true},
    {key: "can-dive", label: "Can Dive", matches: animal => animal.canDive === true}
];
let selectedCareerTier = null;
let selectedFranchiseTier = null;
let selectedWildlifeReserveKey = "";
let selectedEcosystemKey = "";
let selectedSpeciesRoleKey = "";
let availableEcosystemOptions = {};
let availableSpeciesRoleOptions = {};
let ecosystemSelect;
let speciesRoleSelect;

const simpleFilters = {
    enclosureTypes: {
        id: "filters-enclosure-types",
        options: enclosureTypes
    },
    salinity: {
        id: "filters-salinity",
        options: salinity
    },
    cohabitationOptions: {
        id: "filters-cohabitation-options",
        options: cohabitationOptions,
        label: "Cohabitation"
    },
    temperament: {
        id: "filters-temperament",
        options: temperament
    },
    shelters: {
        id: "filters-shelters",
        label: "Shelters",
        options: shelters
    },
    diseases: {
        id: "filters-diseases",
        label: "Diseases",
        options: diseases
    },
    diets: {
        id: "filters-diets",
        label: "Animal Diets",
        property: "conservationTopics",
        options: Object.fromEntries(Object.entries(conservationTopics)
            .filter(([, topic]) => topic.type === "Animal Diets"))
    },
    activityPatterns: {
        id: "filters-activity-patterns",
        label: "Activity Patterns",
        property: "conservationTopics",
        options: Object.fromEntries(Object.entries(conservationTopics)
            .filter(([, topic]) => topic.type === "Activity Patterns"))
    },
    matingSystem: {
        id: "filters-mating-system",
        options: matingSystem
    },
    matingSeason: {
        id: "filters-mating-season",
        options: matingSeason
    },
    reproductionDifficulty: {
        id: "filters-reproduction-difficulty",
        options: reproductionDifficulty
    },
    offspringDispersal: {
        id: "filters-offspring-dispersal",
        options: offspringDispersal
    }
};

const sortDefinitions = [
    {
        id: "filters-sortby-alphabetical",
        label: "Sort by Name",
        icon: "/pz2/images/icons/icons_sortby_alphabet.svg",
        value: animal => animal.name ?? ""
    },
    {
        id: "filters-sortby-food-cost",
        label: "Sort by Food Cost",
        icon: "/pz2/images/icons/icons_sortby_foodCost.svg",
        value: animal => numericValue(animal.foodGrade1Cost)
    },
    {
        id: "filters-sortby-animal-appeal",
        label: "Sort by Appeal",
        icon: "/pz2/images/icons/icons_sortby_animalAppeal.svg",
        value: animal => numericValue(animal.maxAnimalAppeal)
    },
    {
        id: "filters-sortby-group-max",
        label: "Sort by Max Group",
        icon: "/pz2/images/icons/icons_sortby_groupMax.svg",
        value: animal => numericValue(animal.groupMixedMax)
    },
    {
        id: "filters-sortby-group-min",
        label: "Sort by Min Group",
        icon: "/pz2/images/icons/icons_sortby_groupMin.svg",
        value: animal => numericValue(animal.groupSizeMin)
    },
    {
        id: "filters-sortby-lifetime-expectancy",
        label: "Sort by Life Expectancy",
        icon: "/pz2/images/icons/icons_sortby_lifetimeExpectancy.svg",
        value: animal => lifetimeExpectancy(animal)
    },
    {
        id: "filters-sortby-fertility-time",
        label: "Sort by Fertile Years",
        icon: "/pz2/images/icons/icons_sortby_fertilityTime.svg",
        value: animal => fertilityTime(animal)
    }
];

const sortButtons = new Map();
let activeSort = null;
let searchInput;

const areaFilters = [
    {id: "filters-area-land", property: "landArea", label: "Land Area", icon: "/pz2/images/icons/icons_area_land.svg"},
    {id: "filters-area-shelter", property: "shelterArea", label: "Shelter Area", icon: "/pz2/images/icons/icons_area_shelter.svg"},
    {id: "filters-area-climbable", property: "climbableArea", label: "Climbable Area", icon: "/pz2/images/icons/icons_area_climbable.svg"},
    {id: "filters-area-flyable", property: "flyableArea", label: "Flyable Area", icon: "/pz2/images/icons/icons_area_flyable.svg"},
    {id: "filters-area-water", property: "waterArea", label: "Water Area", icon: "/pz2/images/icons/icons_area_water.svg"},
    {id: "filters-area-deep-water", property: "deepWaterArea", label: "Deep Water Area", icon: "/pz2/images/icons/icons_area_deepWater.svg"}
];

const terrainRangeFilters = [
    {id: "filters-range-grass", property: "grassRange", label: "Grass", icon: "/pz2/images/icons/icons_terrain_grassRange.png"},
    {id: "filters-range-sand", property: "sandRange", label: "Sand", icon: "/pz2/images/icons/icons_terrain_sandRange.png"},
    {id: "filters-range-soil", property: "soilRange", label: "Soil", icon: "/pz2/images/icons/icons_terrain_soilRange.png"},
    {id: "filters-range-rock", property: "rockRange", label: "Rock", icon: "/pz2/images/icons/icons_terrain_rockRange.png"},
    {id: "filters-range-waterlogged", property: "waterloggedRange", label: "Waterlogged", icon: "/pz2/images/icons/icons_terrain_waterlogged.png"},
    {id: "filters-range-snow", property: "snowRange", label: "Snow", icon: "/pz2/images/icons/icons_terrain_snowRange.png"}
];

const visibleRangeFilters = [
    {id: "filters-range-temperature", property: "temperatureRange", label: "Temperature", icon: "/pz2/images/icons/icons_enclosure_temperature.svg"},
    {id: "filters-plant-coverage", property: "plantCoverage", label: "Plant Coverage", icon: "/pz2/images/icons/icons_enclosure_plants.svg"}
];

const careerTierOptions = getNumericOptions("careerAccreditation");
const franchiseTierOptions = getNumericOptions("franchiseAccreditation");
const barrierStrengthOptions = getNumericOptions("barrierStrength")
    .filter(value => value > 0);

function numericValue(value) {
    if (typeof value === "number") {
        return Number.isFinite(value) ? value : null;
    }
    if (typeof value !== "string" || value.trim() === "") {
        return null;
    }

    const parsedValue = Number(value);
    return Number.isFinite(parsedValue) ? parsedValue : null;
}

function getNumericOptions(property) {
    return [...new Set(Object.values(animals)
        .map(animal => numericValue(animal[property]))
        .filter(value => value !== null))]
        .sort((valueA, valueB) => valueA - valueB);
}

function lifetimeExpectancy(animal) {
    const lifeStages = [
        numericValue(animal.juvenileYears),
        numericValue(animal.adultYears),
        numericValue(animal.elderlyYears)
    ];
    return lifeStages.every(value => value !== null)
        ? lifeStages.reduce((total, value) => total + value, 0)
        : null;
}

function fertilityTime(animal) {
    const maturityAge = numericValue(animal.maturityAge);
    const sterilityAge = animal.sterilityAge === "Death"
        ? lifetimeExpectancy(animal)
        : numericValue(animal.sterilityAge);
    return maturityAge !== null && sterilityAge !== null
        ? sterilityAge - maturityAge
        : null;
}

function resetSort() {
    activeSort = null;
    sortButtons.forEach(button => {
        button.classList.remove("is-first-sort", "is-second-sort");
    });
}

function setupSortButtons() {
    sortDefinitions.forEach(definition => {
        const container = document.getElementById(definition.id);
        if (!container) {
            throw new Error(`Could not find the "${definition.id}" element.`);
        }

        const button = document.createElement("button");
        button.type = "button";
        button.className = "zoopedia-sort-button";
        button.title = definition.label;
        button.setAttribute("aria-label", definition.label);

        const icon = document.createElement("img");
        icon.src = definition.icon;
        icon.alt = "";
        button.append(icon);
        container.replaceChildren(button);
        sortButtons.set(definition.id, button);

        button.addEventListener("click", () => {
            if (activeSort?.id !== definition.id) {
                resetSort();
                activeSort = {id: definition.id, direction: "first"};
            } else if (activeSort.direction === "first") {
                activeSort.direction = "second";
            } else if (activeSort.direction === "second") {
                resetSort();
            } else {
                activeSort.direction = "first";
            }

            if (activeSort) {
                button.classList.toggle("is-first-sort", activeSort.direction === "first");
                button.classList.toggle("is-second-sort", activeSort.direction === "second");
            }
            renderAnimals();
        });

        container.addEventListener("zoopedia:reset", resetSort);
    });
}

function setupSearchAndReset() {
    const searchContainer = document.getElementById("filters-search");
    const resetContainer = document.getElementById("filters-reset");
    if (!searchContainer || !resetContainer) {
        throw new Error("Could not find the Zoopedia search or reset element.");
    }

    searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.className = "zoopedia-search-input";
    searchInput.placeholder = "Species Name";
    searchInput.setAttribute("aria-label", "Search by species name or Latin name");
    searchInput.addEventListener("input", renderAnimals);
    searchContainer.replaceChildren(searchInput);
    searchContainer.addEventListener("zoopedia:reset", () => {
        searchInput.value = "";
        renderAnimals();
    });

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "zoopedia-reset-button";
    resetButton.textContent = "RESET";
    resetButton.addEventListener("click", () => {
        Array.from(zoopediaFilters.querySelectorAll('[id^="filters-"]'))
            .forEach(container => container.dispatchEvent(new Event("zoopedia:reset")));
        renderAnimals();
    });
    resetContainer.replaceChildren(resetButton);
}

function createNumberFilter({id, property, label, icon, min = 0, max, step = 5, mode}) {
    const container = document.getElementById(id);
    if (!container) {
        throw new Error(`Could not find the "${id}" element.`);
    }

    container.classList.add("zoopedia-number-filter");
    const image = document.createElement("img");
    image.src = icon;
    image.alt = "";
    image.title = label;

    const input = document.createElement("input");
    input.type = "number";
    if (min !== null) {
        input.min = String(min);
    }
    if (max !== undefined) {
        input.max = String(max);
    }
    input.step = String(step);
    input.title = label;
    input.setAttribute("aria-label", label);
    input.addEventListener("input", () => {
        const value = input.value === "" ? null : numericValue(input.value);
        if (mode === "range") {
            selectedRanges[property] = value;
        } else {
            selectedMinimums[property] = value;
        }
        renderAnimals();
    });

    container.replaceChildren(image, input);
    container.addEventListener("zoopedia:reset", () => {
        input.value = "";
        if (mode === "range") {
            selectedRanges[property] = null;
        } else {
            selectedMinimums[property] = null;
        }
        renderAnimals();
    });
}

function createNumericSelectFilter({id, label, icon, options, mode}) {
    const container = document.getElementById(id);
    if (!container) {
        throw new Error(`Could not find the "${id}" element.`);
    }

    container.classList.add("zoopedia-numeric-select-filter");
    if (icon) {
        const image = document.createElement("img");
        image.src = icon;
        image.alt = "";
        image.title = label;
        container.append(image);
    }

    const select = document.createElement("select");
    select.title = label;
    select.setAttribute("aria-label", label);
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "ALL";
    select.append(allOption);
    options.forEach(value => {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = String(value);
        select.append(option);
    });
    select.addEventListener("change", () => {
        const value = select.value === "" ? null : numericValue(select.value);
        if (mode === "career") {
            selectedCareerTier = value;
        } else if (mode === "franchise") {
            selectedFranchiseTier = value;
        } else {
            selectedMinimums.barrierStrength = value;
        }
        renderAnimals();
    });

    if (icon) {
        container.append(select);
    } else {
        const textLabel = document.createElement("span");
        textLabel.textContent = label;
        container.replaceChildren(textLabel, select);
    }
    container.addEventListener("zoopedia:reset", () => {
        select.value = "";
        if (mode === "career") {
            selectedCareerTier = null;
        } else if (mode === "franchise") {
            selectedFranchiseTier = null;
        } else {
            selectedMinimums.barrierStrength = null;
        }
        renderAnimals();
    });
}

function createPredicateSelectFilter({container, label, options, onChange}) {
    container.classList.add("simple-select-filter");
    const heading = document.createElement("label");
    heading.className = "simple-select-filter-label";
    heading.textContent = `${label}:`;

    const select = document.createElement("select");
    select.className = "simple-select-filter-control";
    select.setAttribute("aria-label", label);
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "ALL";
    select.append(allOption);

    options.forEach(({key, label: optionLabel}) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = optionLabel;
        select.append(option);
    });
    container.replaceChildren(heading, select);
    select.addEventListener("change", () => onChange(select.value));
    container.addEventListener("zoopedia:reset", () => {
        select.value = "";
        onChange("");
    });
}

function setupReproductionFilter() {
    const container = document.getElementById("filters-reproduction");
    if (!container) {
        throw new Error('Could not find the "filters-reproduction" element.');
    }

    createPredicateSelectFilter({
        container,
        label: "Reproduction",
        options: reproductionOptions,
        onChange: value => {
            selectedReproduction.value = value;
            renderAnimals();
        }
    });
}

function setupMovementFilters() {
    const container = document.getElementById("filters-movement");
    if (!container) {
        throw new Error('Could not find the "filters-movement" element.');
    }

    container.classList.add("zoopedia-compound-filter");
    const movementSelect = document.createElement("div");
    const swimmingSelect = document.createElement("div");
    container.replaceChildren(movementSelect, swimmingSelect);
    createPredicateSelectFilter({
        container: movementSelect,
        label: "Movement",
        options: movementOptions,
        onChange: value => {
            selectedMovement.movement = value;
            renderAnimals();
        }
    });
    createPredicateSelectFilter({
        container: swimmingSelect,
        label: "Swimming",
        options: swimmingOptions,
        onChange: value => {
            selectedMovement.swimming = value;
            renderAnimals();
        }
    });
}

function setupTaxonomyFilters() {
    setupExpandableFilterGroup({
        id: "filters-taxonomy-open-button",
        label: "Taxonomy Filters",
        optionFilters: [{id: "filters-taxonomy"}]
    });

    const container = document.getElementById("filters-taxonomy");
    if (!container) {
        throw new Error('Could not find the "filters-taxonomy" element.');
    }

    const levels = [
        {key: "class", label: "Class"},
        {key: "order", label: "Order"},
        {key: "family", label: "Family"},
        {key: "genus", label: "Genus"}
    ];
    const selects = new Map();
    container.classList.add("zoopedia-taxonomy-filter");

    levels.forEach(({key, label}, index) => {
        const field = document.createElement("div");
        field.className = "simple-select-filter";
        const heading = document.createElement("label");
        heading.className = "simple-select-filter-label";
        heading.textContent = `${label}:`;

        const select = document.createElement("select");
        select.className = "simple-select-filter-control";
        select.setAttribute("aria-label", label);
        select.addEventListener("change", () => {
            selectedTaxonomy[key] = select.value;
            levels.slice(index + 1).forEach(({key: lowerKey}) => {
                selectedTaxonomy[lowerKey] = "";
            });
            updateTaxonomyOptions(index + 1);
            renderAnimals();
        });

        field.append(heading, select);
        container.append(field);
        selects.set(key, select);
    });

    function updateTaxonomyOptions(startIndex = 0) {
        levels.slice(startIndex).forEach(({key}, relativeIndex) => {
            const levelIndex = startIndex + relativeIndex;
            const select = selects.get(key);
            const ancestors = levels.slice(0, levelIndex);
            const values = [...new Set(Object.values(animals)
                .filter(animal => ancestors.every(({key: ancestorKey}) =>
                    !selectedTaxonomy[ancestorKey]
                    || animal[ancestorKey] === selectedTaxonomy[ancestorKey]
                ))
                .map(animal => animal[key])
                .filter(value => typeof value === "string" && value.trim() !== ""))]
                .sort((valueA, valueB) => valueA.localeCompare(valueB));
            const allOption = document.createElement("option");
            allOption.value = "";
            allOption.textContent = "ALL";
            select.replaceChildren(allOption);
            values.forEach(value => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = value;
                select.append(option);
            });
            select.value = selectedTaxonomy[key];
        });
    }

    updateTaxonomyOptions();
    container.addEventListener("zoopedia:reset", () => {
        levels.forEach(({key}) => {
            selectedTaxonomy[key] = "";
        });
        updateTaxonomyOptions();
        renderAnimals();
    });
}

function setupIconFilters() {
    const row = document.querySelector(".zoopedia-filter-row-range-icons");
    if (!row) {
        throw new Error("Could not find the Zoopedia icon-filter row.");
    }

    const filters = [
        {key: "conservation", id: "filters-conservation", label: "Conservation", options: conservation, modeToggle: true, resetOnly: true},
        {key: "nativeRange", id: "filters-native-range", label: "Native Range", options: nativeRange, modeToggle: true},
        {key: "biomes", id: "filters-biomes", label: "Biomes", options: biomes, modeToggle: true}
    ];
    filters.forEach(({key, id, label, options, modeToggle = false, resetOnly = false}) => {
        const container = document.getElementById(id);
        if (!container) {
            throw new Error(`Could not find the "${id}" element.`);
        }
        createIconChoiceFilter({
            container,
            label,
            options,
            modeToggle,
            resetOnly,
            onChange: (selectedKeys, mode) => {
                selectedIconFilters[key] = selectedKeys;
                if (modeToggle) {
                    iconFilterModes[key] = mode;
                }
                renderAnimals();
            }
        });
    });

    const conservationFilter = document.getElementById("filters-conservation");
    const nativeRangeFilter = document.getElementById("filters-native-range");
    const biomesFilter = document.getElementById("filters-biomes");
    if (!conservationFilter || !nativeRangeFilter || !biomesFilter) {
        throw new Error("Could not find all Zoopedia icon filters.");
    }

    function updateConservationLayout() {
        const isSoloRow = conservationFilter.offsetTop > nativeRangeFilter.offsetTop
            && conservationFilter.offsetTop > biomesFilter.offsetTop;
        const heading = conservationFilter.querySelector(".icon-choice-filter-heading");
        const options = conservationFilter.querySelector(".icon-choice-filter-options");
        if (!heading || !options) {
            throw new Error("Could not find the Conservation filter heading or options.");
        }
        const optionGap = Number.parseFloat(getComputedStyle(options).columnGap) || 0;
        const optionsWidth = [...options.children].reduce(
            (totalWidth, option) => totalWidth + option.getBoundingClientRect().width,
            0
        ) + Math.max(0, options.children.length - 1) * optionGap;
        const filterStyle = getComputedStyle(conservationFilter);
        const inlineWidth = heading.getBoundingClientRect().width
            + optionsWidth
            + (Number.parseFloat(getComputedStyle(conservationFilter).gap) || 0)
            + Number.parseFloat(filterStyle.paddingLeft)
            + Number.parseFloat(filterStyle.paddingRight)
            + Number.parseFloat(filterStyle.borderLeftWidth)
            + Number.parseFloat(filterStyle.borderRightWidth);
        const canFitInline = inlineWidth <= row.clientWidth;
        row.classList.toggle("is-conservation-solo", isSoloRow && canFitInline);
    }

    window.addEventListener("resize", updateConservationLayout);
    new ResizeObserver(updateConservationLayout).observe(row);
    requestAnimationFrame(updateConservationLayout);
}

function setupOtherFiltersGroup() {
    setupExpandableFilterGroup({
        id: "filters-others-open-button",
        label: "Misc Filters",
        optionFilters: [
            {id: "filters-movement"},
            simpleFilters.shelters,
            simpleFilters.activityPatterns,
            simpleFilters.diets,
            simpleFilters.diseases
        ]
    });
}

function getAvailableChoiceOptions(property, options, wildlifeKey, ecosystemKey = "") {
    return Object.fromEntries(Object.entries(options).filter(([key]) =>
        Object.values(animals).some(animal =>
            animal.releasable === true
            && (!wildlifeKey || matchesSelectedOptions(
                animal.wildlifeReserves,
                wildlifeReserves,
                [wildlifeKey]
            ))
            && (!ecosystemKey || matchesSelectedOptions(
                animal.ecosystems,
                ecosystems,
                [ecosystemKey]
            ))
            && matchesSelectedOptions(animal[property], options, [key])
        )
    ));
}

function createHierarchySelect(container, label, options, selectedKey, onChange) {
    container.classList.add("simple-select-filter");
    const heading = document.createElement("label");
    heading.className = "simple-select-filter-label";
    heading.textContent = `${label}:`;

    const select = document.createElement("select");
    select.className = "simple-select-filter-control";
    select.setAttribute("aria-label", label);

    function updateOptions(nextOptions, nextSelectedKey = selectedKey) {
        const allOption = document.createElement("option");
        allOption.value = "";
        allOption.textContent = "ALL";
        select.replaceChildren(allOption);
        Object.entries(nextOptions).forEach(([key, option]) => {
            const choice = document.createElement("option");
            choice.value = key;
            choice.textContent = typeof option === "string" ? option : option.name ?? option.type ?? key;
            select.append(choice);
        });
        select.value = Object.prototype.hasOwnProperty.call(nextOptions, nextSelectedKey)
            ? nextSelectedKey
            : "";
        selectedKey = select.value;
    }

    select.addEventListener("change", () => {
        selectedKey = select.value;
        onChange(selectedKey);
    });
    container.replaceChildren(heading, select);
    container.addEventListener("zoopedia:reset", () => {
        updateOptions(options, "");
        onChange("");
    });
    updateOptions(options);

    return {
        select,
        setOptions(nextOptions, nextSelectedKey = selectedKey) {
            options = nextOptions;
            updateOptions(nextOptions, nextSelectedKey);
        }
    };
}

function setupReleasableDependentFilters() {
    const ids = [
        "filters-wildlife-reserves",
        "filters-ecosystems",
        "filters-species-roles"
    ];
    const containers = ids.map(id => {
        const container = document.getElementById(id);
        if (!container) {
            throw new Error(`Could not find the "${id}" element.`);
        }
        container.hidden = true;
        return container;
    });

    const [wildlifeContainer, ecosystemContainer, speciesRoleContainer] = containers;
    const wildlifeSelect = createHierarchySelect(
        wildlifeContainer,
        "Wildlife Reserves",
        wildlifeReserves,
        selectedWildlifeReserveKey,
        selectedKey => {
            selectedWildlifeReserveKey = selectedKey;
            selectedEcosystemKey = "";
            selectedSpeciesRoleKey = "";
            availableEcosystemOptions = getAvailableChoiceOptions(
                "ecosystems",
                ecosystems,
                selectedWildlifeReserveKey
            );
            ecosystemSelect.setOptions(availableEcosystemOptions, "");
            availableSpeciesRoleOptions = getAvailableChoiceOptions(
                "speciesRoles",
                speciesRoles,
                selectedWildlifeReserveKey
            );
            speciesRoleSelect.setOptions(availableSpeciesRoleOptions, "");
            renderAnimals();
        }
    );

    ecosystemSelect = createHierarchySelect(
        ecosystemContainer,
        "Ecosystems",
        getAvailableChoiceOptions("ecosystems", ecosystems, selectedWildlifeReserveKey),
        selectedEcosystemKey,
        selectedKey => {
            selectedEcosystemKey = selectedKey;
            selectedSpeciesRoleKey = "";
            availableSpeciesRoleOptions = getAvailableChoiceOptions(
                "speciesRoles",
                speciesRoles,
                selectedWildlifeReserveKey,
                selectedEcosystemKey
            );
            speciesRoleSelect.setOptions(availableSpeciesRoleOptions, "");
            renderAnimals();
        }
    );
    availableEcosystemOptions = getAvailableChoiceOptions(
        "ecosystems",
        ecosystems,
        selectedWildlifeReserveKey
    );

    speciesRoleSelect = createHierarchySelect(
        speciesRoleContainer,
        "Species Roles",
        getAvailableChoiceOptions(
            "speciesRoles",
            speciesRoles,
            selectedWildlifeReserveKey,
            selectedEcosystemKey
        ),
        selectedSpeciesRoleKey,
        selectedKey => {
            selectedSpeciesRoleKey = selectedKey;
            renderAnimals();
        }
    );
    availableSpeciesRoleOptions = getAvailableChoiceOptions(
        "speciesRoles",
        speciesRoles,
        selectedWildlifeReserveKey,
        selectedEcosystemKey
    );

    const releasableContainer = document.getElementById("filters-releasable");
    if (!releasableContainer) {
        throw new Error('Could not find the "filters-releasable" element.');
    }
    function updateVisibility(isVisible) {
        releasableContainer.closest(".zoopedia-filter-group")?.classList.toggle("is-open", isVisible);
        containers.forEach(container => {
            container.hidden = !isVisible;
            if (!isVisible) {
                if (container === wildlifeContainer) {
                    wildlifeSelect.select.value = "";
                    wildlifeSelect.select.dispatchEvent(new Event("change"));
                }
            }
        });
    }
    releasableContainer.addEventListener("zoopedia:release-selection", event => {
        updateVisibility(event.detail === true);
    });
    updateVisibility(false);
}

function setupExpandableFilterGroup({id, label, optionFilters}) {
    const container = document.getElementById(id);
    if (!container) {
        throw new Error(`Could not find the "${id}" element.`);
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "zoopedia-filter-group-button";
    button.textContent = `${label} ⮞`;
    button.title = "Open";
    button.setAttribute("aria-expanded", "false");

    let isOpen = false;
    function setOpen(open) {
        isOpen = open;
        button.textContent = isOpen ? "⮜" : `${label} ⮞`;
        button.title = isOpen ? "Hide" : "Open";
        button.setAttribute("aria-label", isOpen ? "Hide filters" : `Open ${label}`);
        button.classList.toggle("is-open", isOpen);
        container.closest(".zoopedia-filter-group")?.classList.toggle("is-open", isOpen);
        button.setAttribute("aria-expanded", String(isOpen));
        optionFilters.forEach(({id: optionId}) => {
            const optionContainer = document.getElementById(optionId);
            if (!optionContainer) {
                throw new Error(`Could not find the "${optionId}" element.`);
            }
            optionContainer.hidden = !isOpen;
        });
    }

    button.addEventListener("click", () => setOpen(!isOpen));
    container.replaceChildren(button);
    setOpen(false);
    container.addEventListener("zoopedia:reset", () => setOpen(false));
}

function setupRangeAndAreaFilters() {
    setupExpandableFilterGroup({
        id: "filters-area-open-button",
        label: "Filter by Space Minimum",
        optionFilters: areaFilters
    });
    setupExpandableFilterGroup({
        id: "filters-range-open-button",
        label: "Filter by Terrain Range",
        optionFilters: terrainRangeFilters
    });
    setupExpandableFilterGroup({
        id: "filters-reproduction-open-button",
        label: "Reproduction Filters",
        optionFilters: [
            simpleFilters.matingSystem,
            {id: "filters-mating-season"},
            simpleFilters.reproductionDifficulty,
            {id: "filters-reproduction"},
            simpleFilters.offspringDispersal
        ]
    });

    areaFilters.forEach(filter => createNumberFilter({...filter, step: 5}));
    terrainRangeFilters.forEach(filter => createNumberFilter({
        ...filter,
        min: 0,
        max: 100,
        step: 5,
        mode: "range"
    }));
    visibleRangeFilters.forEach(filter => createNumberFilter({
        ...filter,
        min: filter.property === "plantCoverage" ? 0 : null,
        max: filter.property === "plantCoverage" ? 100 : undefined,
        step: 5,
        mode: "range"
    }));

    createNumberFilter({
        id: "filters-barrier-height",
        property: "barrierHeight",
        label: "Barrier Height",
        icon: "/pz2/images/icons/icons_enclosure_barrierHeight.svg",
        min: 0,
        max: 25,
        step: 0.25
    });
    createNumericSelectFilter({
        id: "filters-barrier-strength",
        label: "Barrier Strength",
        icon: "/pz2/images/icons/icons_enclosure_barrierStrength.svg",
        options: barrierStrengthOptions,
        mode: "barrierStrength"
    });
    createNumericSelectFilter({
        id: "filters-accreditation-career",
        label: "Career Tier",
        options: careerTierOptions,
        mode: "career"
    });
    createNumericSelectFilter({
        id: "filters-accreditation-franchise",
        label: "Franchise Tier",
        options: franchiseTierOptions,
        mode: "franchise"
    });
}

function matchesSelectedOptions(animalValues, options, selectedKeys) {
    const values = Array.isArray(animalValues) ? animalValues : [animalValues];
    return values.some(value => selectedKeys.some(key => {
        const selectedOption = options[key];
        const valueName = typeof value === "string"
            ? value
            : value?.name ?? value?.type ?? value?.status;
        const selectedName = typeof selectedOption === "string"
            ? selectedOption
            : selectedOption?.name ?? selectedOption?.type ?? selectedOption?.status;
        return value === selectedOption
            || (valueName !== undefined && selectedName !== undefined && valueName === selectedName);
    }));
}

function renderAnimals() {
    const searchTerm = searchInput?.value.trim().toLocaleLowerCase() ?? "";
    const filteredAnimals = Object.values(animals).filter(animal => {
        const matchesSearch = !searchTerm
            || animal.name?.toLocaleLowerCase().includes(searchTerm)
            || animal.latin?.toLocaleLowerCase().includes(searchTerm);
        const animalDLCs = Array.isArray(animal.DLC) ? animal.DLC : [animal.DLC];
        const matchesDLC = animalDLCs.some(animalDLC => selectedDLCKeys.some(key => {
            const selectedDLC = DLC[key];
            const animalDLCName = typeof animalDLC === "string"
                ? animalDLC
                : animalDLC?.name;
            return selectedDLC === animalDLC || selectedDLC.name === animalDLCName;
        }));

        const matchesSimpleFilters = Object.entries(simpleFilters).every(
            ([property, {options, property: animalProperty = property}]) => {
                const selectedKey = selectedSimpleFilters[property];
                return !selectedKey
                    || matchesSelectedOptions(animal[animalProperty], options, [selectedKey]);
            }
        );
        const matchesBooleanFilters = Object.entries(selectedBooleanFilters).every(
            ([property, selectedValue]) => {
                if (selectedValue === null) {
                    return true;
                }

                const animalValue = property === "colourmorphs"
                    ? animal.colourmorphs != null && Object.keys(animal.colourmorphs).length > 0
                    : animal[property];
                return animalValue === selectedValue;
            }
        );
        const selectedReproductionOption = selectedReproduction.value
            ? reproductionOptions.find(option => option.key === selectedReproduction.value)
            : null;
        const matchesReproduction = !selectedReproductionOption
            || selectedReproductionOption.matches(animal);
        const selectedMovementOption = selectedMovement.movement
            ? movementOptions.find(option => option.key === selectedMovement.movement)
            : null;
        const selectedSwimmingOption = selectedMovement.swimming
            ? swimmingOptions.find(option => option.key === selectedMovement.swimming)
            : null;
        const matchesMovement = (!selectedMovementOption || selectedMovementOption.matches(animal))
            && (!selectedSwimmingOption || selectedSwimmingOption.matches(animal));
        const matchesTaxonomy = Object.entries(selectedTaxonomy).every(
            ([property, selectedValue]) => !selectedValue || animal[property] === selectedValue
        );
        const matchesConservation = selectedIconFilters.conservation.length === 0
            || matchesSelectedOptions(
                animal.conservation,
                conservation,
                selectedIconFilters.conservation
            );
        const matchesNativeRange = selectedIconFilters.nativeRange.length === 0
            || (iconFilterModes.nativeRange === "exact"
                ? selectedIconFilters.nativeRange.every(key =>
                    matchesSelectedOptions(animal.nativeRange, nativeRange, [key])
                )
                : matchesSelectedOptions(
                    animal.nativeRange,
                    nativeRange,
                    selectedIconFilters.nativeRange
                ));
        const matchesBiomes = selectedIconFilters.biomes.length === 0
            || (iconFilterModes.biomes === "exact"
                ? selectedIconFilters.biomes.every(key =>
                    matchesSelectedOptions(animal.biomes, biomes, [key])
                )
                : matchesSelectedOptions(
                    animal.biomes,
                    biomes,
                    selectedIconFilters.biomes
                ));
        const matchesWildlifeReserve = !selectedWildlifeReserveKey
            || matchesSelectedOptions(animal.wildlifeReserves, wildlifeReserves, [selectedWildlifeReserveKey]);
        const matchesEcosystem = !selectedEcosystemKey
            || matchesSelectedOptions(animal.ecosystems, ecosystems, [selectedEcosystemKey]);
        const matchesSpeciesRole = !selectedSpeciesRoleKey
            || matchesSelectedOptions(animal.speciesRoles, speciesRoles, [selectedSpeciesRoleKey]);
        const matchesAreaMinimums = areaFilters.every(({property}) => {
            const requestedMinimum = selectedMinimums[property];
            if (requestedMinimum === null) {
                return true;
            }
            const animalMinimum = numericValue(animal[property]);
            return animalMinimum !== null && animalMinimum > 0 && animalMinimum <= requestedMinimum;
        });
        const animalBarrierHeight = numericValue(animal.barrierHeight);
        const matchesBarrierHeight = selectedMinimums.barrierHeight === null
            || (animalBarrierHeight !== null
                && animalBarrierHeight > 0
                && animalBarrierHeight <= selectedMinimums.barrierHeight);
        const matchesTerrainRanges = [...terrainRangeFilters, ...visibleRangeFilters].every(
            ({property}) => {
                const requestedValue = selectedRanges[property];
                if (requestedValue === null) {
                    return true;
                }
                const animalRange = animal[property];
                if (!animalRange || typeof animalRange !== "object") {
                    return false;
                }
                const rangeMin = numericValue(animalRange.min);
                const rangeMax = numericValue(animalRange.max);
                return rangeMin !== null
                    && rangeMax !== null
                    && rangeMin <= requestedValue
                    && requestedValue <= rangeMax;
            }
        );
        const animalBarrierStrength = numericValue(animal.barrierStrength);
        const matchesBarrierStrength = selectedMinimums.barrierStrength === null
            || (animalBarrierStrength !== null
                && animalBarrierStrength > 0
                && animalBarrierStrength === selectedMinimums.barrierStrength);
        const matchesCareerTier = selectedCareerTier === null
            || numericValue(animal.careerAccreditation) === selectedCareerTier;
        const matchesFranchiseTier = selectedFranchiseTier === null
            || numericValue(animal.franchiseAccreditation) === selectedFranchiseTier;

        return matchesSearch
            && matchesDLC
            && matchesSelectedOptions(animal.form, form, selectedFormKeys)
            && matchesSelectedOptions(animal.type, types, selectedTypeKeys)
            && matchesSelectedOptions(animal.enclosure, enclosures, selectedEnclosureKeys)
            && matchesSimpleFilters
            && matchesBooleanFilters
            && matchesReproduction
            && matchesMovement
            && matchesTaxonomy
            && matchesConservation
            && matchesNativeRange
            && matchesBiomes
            && matchesWildlifeReserve
            && matchesEcosystem
            && matchesSpeciesRole
            && matchesAreaMinimums
            && matchesBarrierHeight
            && matchesTerrainRanges
            && matchesBarrierStrength
            && matchesCareerTier
            && matchesFranchiseTier;
    });

    if (activeSort) {
        const definition = sortDefinitions.find(item => item.id === activeSort.id);
        const isAlphabetical = activeSort.id === "filters-sortby-alphabetical";
        const isAscending = isAlphabetical
            ? activeSort.direction === "first"
            : activeSort.direction === "second";

        filteredAnimals.sort((animalA, animalB) => {
            const valueA = definition.value(animalA);
            const valueB = definition.value(animalB);
            if (valueA === null || valueB === null) {
                return valueA === valueB ? 0 : valueA === null ? 1 : -1;
            }
            const comparison = isAlphabetical
                ? valueA.localeCompare(valueB)
                : valueA - valueB;
            return isAscending ? comparison : -comparison;
        });
    }

    zoopediaList.innerHTML = filteredAnimals.map(animal => `
    <div class="zoopedia-animal" data-animal-name="${animal.name}">
      <div class="zoopedia-image">
        <img src="${animal.imageURL}" alt="${animal.image}">
      </div>
      <div class="zoopedia-name">
        <h3>${animal.name}</h3>
        <span>${animal.latin}</span>
      </div>
    </div>
    `).join("");
}

function setupResponsiveFilterToggle() {
    const toggle = document.getElementById("zoopedia-filters-toggle");
    const filters = document.getElementById("zoopedia-filters");
    const options = document.getElementById("zoopedia-filter-options");
    if (!toggle || !filters || !options) {
        throw new Error("Could not find the responsive Zoopedia filter controls.");
    }

    const mobileLayout = window.matchMedia("(max-width: 1060px)");
    function setFiltersOpen(isOpen) {
        filters.classList.toggle("is-collapsed", !isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
    }

    toggle.addEventListener("click", () => {
        setFiltersOpen(filters.classList.contains("is-collapsed"));
    });

    function updateFilterVisibility() {
        toggle.hidden = !mobileLayout.matches;
        setFiltersOpen(!mobileLayout.matches);
    }

    mobileLayout.addEventListener("change", updateFilterVisibility);
    updateFilterVisibility();
}

setupSortButtons();
setupSearchAndReset();
setupResponsiveFilterToggle();
setupRangeAndAreaFilters();
setupReproductionFilter();
setupMovementFilters();
setupTaxonomyFilters();
setupOtherFiltersGroup();

createMultiSelectDropdown({
    container: dlcFilter,
    options: DLC,
    label: "Select DLC",
    showIcons: false,
    onChange: selectedKeys => {
        selectedDLCKeys = selectedKeys;
        renderAnimals();
    }
});

createMultiToggleFilter({
    container: formFilter,
    options: form,
    onChange: selectedKeys => {
        selectedFormKeys = selectedKeys;
        renderAnimals();
    }
});

createMultiToggleFilter({
    container: typesFilter,
    options: types,
    onChange: selectedKeys => {
        selectedTypeKeys = selectedKeys;
        renderAnimals();
    }
});

createMultiToggleFilter({
    container: enclosuresFilter,
    options: enclosures,
    onChange: selectedKeys => {
        selectedEnclosureKeys = selectedKeys;
        renderAnimals();
    }
});

Object.entries(simpleFilters).forEach(([property, {id, options, label}]) => {
    const container = document.getElementById(id);
    if (!container) {
        throw new Error(`Could not find the "${id}" element.`);
    }

    createSelectFilter({
        container,
        options,
        label,
        onChange: selectedKey => {
            selectedSimpleFilters[property] = selectedKey;
            renderAnimals();
        }
    });
});

const booleanFilters = [
    {property: "guestsEnter", id: "filters-guests-enter", label: "Guests Enter"},
    {property: "releasable", id: "filters-releasable", label: "Releasable"},
    {property: "colourmorphs", id: "filters-colourmorphs", label: "Colourmorphs"}
];

booleanFilters.forEach(({property, id, label}) => {
    const container = document.getElementById(id);
    if (!container) {
        throw new Error(`Could not find the "${id}" element.`);
    }

    createBooleanToggleFilter({
        container,
        label,
        onChange: selectedValue => {
            selectedBooleanFilters[property] = selectedValue;
            if (property === "releasable") {
                container.dispatchEvent(new CustomEvent("zoopedia:release-selection", {
                    detail: selectedValue
                }));
            }
            renderAnimals();
        }
    });
});

setupReleasableDependentFilters();
setupIconFilters();
