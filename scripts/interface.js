import {
    types, DLC, continents, biomes, IUCN, relationWithHumans, dominance, matingSystem, maturationRules
} from "./filters.js";
import {animals} from "./animals.js";

const navbar = document.querySelector('nav');

function openMenu() {
    if (!navbar) return;
    navbar.classList.add('show');
    document.getElementById('overlay')?.classList.add('show');
    document.body.classList.add('menu-open');
}
function closeMenu() {
    if (!navbar) return;
    navbar.classList.remove('show');
    document.getElementById('overlay')?.classList.remove('show');
    document.body.classList.remove('menu-open');
}

window.openMenu = openMenu;
window.closeMenu = closeMenu;

// DLC dropdown menu
function initDlcDropdown() {
    const toggle = document.getElementById('dlc-dropdown-toggle');
    const menu = document.getElementById('dlc-dropdown-menu');
    if (!toggle || !menu) return;

    const parent = toggle.closest('#filters-dlc');
    if (parent && getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
    }

    let isOpen = false;

    const close = () => {
        if (!isOpen) return;
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', onDocClick);
        document.removeEventListener('keydown', onKey);
        isOpen = false;
    };

    const open = () => {
        if (isOpen) return;
        menu.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
        isOpen = true;
    };

    const onDocClick = (e) => {
        if (!menu.contains(e.target) && e.target !== toggle) close();
    };

    const onKey = (e) => {
        if (e.key === 'Escape') close();
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen ? close() : open();
    });
    menu.addEventListener('click', e => e.stopPropagation());
}

// Animal Modal functionality
let animalsData = null;

async function loadAnimalsData() {
    if (animalsData) return animalsData;
    try {
        const module = await import('./animals.js');
        animalsData = module.animals;
        return animalsData;
    } catch (error) {
        console.error('Failed to load animals data:', error);
        return null;
    }
}

// Helper functions for modal
const getBooleanIcon = (value) => value ? './images/icons/icon-yes.svg' : './images/icons/icon-no.svg';

const formatRange = (range, suffix = '') => 
    (!range || range.min === undefined || range.max === undefined) ? 'N/A' : `${range.min}${suffix} - ${range.max}${suffix}`;

const formatOffspringRange = (range) => {
    if (!range || range.min === undefined || range.max === undefined) return 'N/A';
    return range.min === range.max ? `${range.min}` : `${range.min}-${range.max}`;
};

const generateEnrichmentIcons = (enrichmentBonus, animals) => {
    if (!enrichmentBonus?.length) return '<span>None</span>';
    
    return enrichmentBonus.map(animalName => {
        const animal = Object.values(animals).find(a => a.name === animalName);
        return animal ? `<span class="icon-description filter-selected" data-tooltip="${animal.name}">
            <img height="30rem" src="${animal.icon}" alt="${animal.name}">
        </span>` : '';
    }).join('');
};

const hasAllProperties = (animal, props) => props.every(prop => {
    if (prop.includes('Range')) return animal[prop]?.min !== undefined && animal[prop]?.max !== undefined;
    return animal[prop] != null && animal[prop] !== undefined;
});

function createAnimalModal(animal) {
    const modal = document.createElement('div');
    modal.id = 'modal-container';
    modal.dataset.animal = animal.name;
    
    // Calculate display values
    const groupDisplays = {
        mixed: `${animal.groupSizeMin || 0}-${animal.groupMixedMax || 0}`,
        males: (animal.groupSizeMin === animal.maxMalesBachelor) 
            ? `${animal.maxMalesBachelor || 0}` 
            : `${animal.groupSizeMin || 0}-${animal.maxMalesBachelor || 0}`,
        females: (animal.groupSizeMin === animal.maxFemalesBachelor) 
            ? `${animal.maxFemalesBachelor || 0}` 
            : `${animal.groupSizeMin || 0}-${animal.maxFemalesBachelor || 0}`
    };
    
    const genderTexts = {
        males: animal.maxMalesMixed === 1 ? "1 Male Only" : `up to ${animal.maxMalesMixed || 0} Males`,
        females: animal.maxFemalesMixed === 1 ? "1 Female Only" : `up to ${animal.maxFemalesMixed || 0} Females`
    };
    
    // Check if sections should be displayed
    const sections = {
        booleans: hasAllProperties(animal, ['predator', 'guestsEnter', 'guestsInteract', 'canWade', 'canSwim', 'canDive', 'canJump', 'canClimb', 'burrower']),
        terrain: hasAllProperties(animal, ['shortGrass', 'longGrass', 'soilRange', 'rockRange', 'sandRange', 'snowRange']),
        areas: hasAllProperties(animal, ['landMinimum', 'landPerAddAdult', 'landPerAddJuvenile', 'climbingMinimum', 'climbingPerAddAdult', 'climbingPerAddJuvenile', 'waterMinimum', 'waterPerAddAdult', 'waterPerAddJuvenile', 'waterDeep', 'waterDeepPerAddAdult', 'waterDeepPerAddJuvenile']),
        food: hasAllProperties(animal, ['foodGrade1', 'foodGrade1Cost', 'foodGrade1CostJuv', 'foodGrade2', 'foodGrade2Cost', 'foodGrade2CostJuv', 'foodGrade3', 'foodGrade3Cost', 'foodGrade3CostJuv']),
        group: hasAllProperties(animal, ['maxMalesMixed', 'maxFemalesMixed', 'maxMalesBachelor', 'maxFemalesBachelor'])
    };

    modal.innerHTML = `
        <div id="modal-overlay"></div>
            <span id="modal-close" class="modal-close">
                <img height="30rem" src="./images/icons/icon-close.svg" alt="Close Modal">
            </span>
        <div id="modal-animal-card">
            <div class="modal-animal-image" style="grid-area: animal-card-image;">
                <img src="${animal.image}" alt="${animal.name}">
            </div>

            <div class="modal-animal-name" style="grid-area: animal-card-name;">
                <div><h1>${animal.name}</h1></div>
                <div><h2>${animal.latin}</h2></div>
                <div class="modal-animal-taxonomy">   
                    <div>Class: ${animal.class || 'N/A'}</div>
                    <div>Order: ${animal.order || 'N/A'}</div>    
                    <div>Family: ${animal.family || 'N/A'}</div>
                    <div>Genus: ${animal.genus || 'N/A'}</div>
                </div>
            </div>

            <div class="modal-animal-general" style="grid-area: animal-card-general;">
                <div class="modal-animal-general-item">
                    <span class="icon-description filter-selected" data-tooltip="${animal.IUCN.status} Conservation Status">
                        <img width="75%" src="${animal.IUCN.iconLong}" alt="${animal.IUCN.status}">  
                    </span>
                    <span><a href="${animal.wiki}" target="_blank"><img height="30rem" src="./images/icons/icon-wiki.svg" alt="Wikipedia"></a></span>
                    <span><a href="${animal.fandom}" target="_blank"><img height="30rem" src="./images/icons/icon-fandom.png" alt="PZ Fandom"></a></span>
                </div>

                <div class="modal-animal-general-item">
                    <span>Continents:
                        ${(animal.continents || []).map(continent => 
                            `<p class="icon-description filter-selected" data-tooltip="${continent.name}">
                                <img height="25rem" src="${continent.icon}" alt="${continent.name}">
                            </p>`
                        ).join('')}
                    </span>

                    <span>Biomes:
                        ${(animal.biomes || []).map(biome => 
                            `<p class="icon-description filter-selected" data-tooltip="${biome.name}">
                                <img height="25rem" src="${biome.icon}" alt="${biome.name}">
                            </p>`
                        ).join('')}
                    </span>
                </div>

                <div class="modal-animal-general-item">
                    <span>
                        <p class="icon-description filter-selected" data-tooltip="${animal.DLC.name}">
                            <img height="40rem" src="${animal.DLC.icon}" alt="${animal.DLC.name}">
                        </p>
                    </span>
                    <span style="margin-top: 0.3rem;">
                        <p class="icon-description filter-selected" data-tooltip="Species Appeal">
                        <img height="35rem" src="./images/icons/icon-appeal.png" alt="Species Appeal"> 
                        </p>
                        ${animal.speciesAppeal || 'N/A'}
                    </span>
                </div>
            </div>

            <div class="modal-animal-details" style="grid-area: animal-card-details;">
                <h3>Habitat Requirements</h3>

                <div class="modal-animal-details-item">
                    <span class="icon-description filter-selected" data-tooltip="Enclosure">
                        <img height="25rem" src="./images/icons/icon-barrier.jpg" alt="Barrier"> 
                    ${
                        animal.type === types.exhibit 
                          ? (animal.guestsEnter ? `Walkthrough ${animal.type}` : `Box ${animal.type}`)
                          : animal.type
                    }</span>
                    ${animal.barrierGrade != null ? `<span>Barrier Grade:<span>${animal.barrierGrade}</span></span>` : ''}
                    ${animal.barrierHeight != null ? `<span>Barrier Height:<span>${animal.barrierHeight}m</span></span>` : ''}
                    ${animal.canClimb ? '<span>Climb Proof</span>' : ''}
                </div>

                <div class="modal-animal-details-item">
                    <span class="icon-description filter-selected" data-tooltip="Temperature">
                        <img height="25rem" src="./images/icons/icon-temperature.jpg" alt="Temperature">
                        <span>${formatRange(animal.temperatureRange, '°C')}</span>
                    </span>
                    ${animal.humidityRange?.min !== undefined ? `<span class="icon-description filter-selected" data-tooltip="Humidity">
                        <img height="25rem" src="./images/icons/icon-humidity.jpg" alt="Humidity">
                        <span>${formatRange(animal.humidityRange, '%')}</span>
                    </span>` : ''}
                    ${animal.plantCoverage?.min !== undefined ? `<span class="icon-description filter-selected" data-tooltip="Plant Coverage">
                        <img height="25rem" src="./images/icons/icon-plants.jpg" alt="Plant Coverage">
                        <span>${formatRange(animal.plantCoverage, '%')}</span>
                    </span>` : ''}
                </div>

                ${sections.areas ? `
                <div class="modal-animal-details-item">
                    ${['land', 'climbing', 'water', 'waterDeep'].map(type => {
                        const key = type === 'waterDeep' ? 'waterDeep' : `${type}Minimum`;
                        const icon = type === 'waterDeep' ? 'deep-water' : type;
                        const label = type === 'waterDeep' ? 'Deep Water' : type.charAt(0).toUpperCase() + type.slice(1);
                        return `<span class="icon-description filter-selected" data-tooltip="Minimum ${label} Area">
                            <img height="25rem" src="./images/icons/icon-area-${icon}.jpg" alt="Minimum ${label} Area">
                            <span>${animal[key] || 0} m²</span>
                            <p>+${animal[`${type}PerAddAdult`] || 0} m² p/Adult</p>
                            <p>+${animal[`${type}PerAddJuvenile`] || 0} m² p/Juv</p>
                        </span>`;
                    }).join('')}
                </div>
                ` : ''}
                
                ${sections.booleans ? `
                <div class="modal-animal-details-item">
                    ${[
                        ['Predator|predator', 'Guests Enter|guestsEnter', 'Guests Interact|guestsInteract'],
                        ['Can Wade|canWade', 'Can Swim|canSwim', 'Can Dive|canDive'],
                        ['Can Jump|canJump', 'Can Climb|canClimb', 'Burrower|burrower']
                    ].map(group => `<span>
                        ${group.map(label => {
                            const [display, key] = label.split('|');
                            return `<p>${display}: <img height="17rem" src="${getBooleanIcon(animal[key])}" alt="${animal[key]}"></p>`;
                        }).join('')}
                    </span>`).join('')}
                </div>
                ` : ''}

                ${sections.terrain ? `
                <h3>Terrain</h3>
                <div class="modal-animal-details-item">
                    ${[
                        ['shortGrass', 'Grass (Short)', 'grass-short'],
                        ['longGrass', 'Grass (Long)', 'grass-long'],
                        ['soilRange', 'Soil', 'soil'],
                        ['rockRange', 'Rock', 'rock'],
                        ['sandRange', 'Sand', 'sand'],
                        ['snowRange', 'Snow', 'snow']
                    ].reduce((acc, [key, label, icon], i) => {
                        const item = `<p class="icon-description filter-selected" data-tooltip="${label}">
                            <img height="25rem" src="./images/icons/icon-terrain-${icon}.jpg" alt="${label}">
                            ${formatRange(animal[key], '%')}
                        </p>`;
                        const spanIndex = Math.floor(i / 2);
                        if (!acc[spanIndex]) acc[spanIndex] = [];
                        acc[spanIndex].push(item);
                        return acc;
                    }, []).map(items => `<span>${items.join('<br>')}</span>`).join('')}
                </div>
                ` : ''}

                <h3>Social, Breeding & Lifecycle</h3>
                
                <div class="modal-animal-details-item">
                    <span>Attitude: <p>${animal.relationWithHumans || 'N/A'}</p></span>
                    <span class="icon-description filter-selected" data-tooltip="${animal.dominance?.description || ''}">
                        Dominance: <p>${animal.dominance?.type || 'N/A'}</p>
                    </span>
                    <span>Mating System: <p>${animal.matingSystem || 'N/A'}</p></span>
                    <span class="icon-description filter-selected" data-tooltip="${animal.maturationRules?.description || ''}">
                        Maturation: <p>${animal.maturationRules?.type || 'N/A'}</p>
                    </span>
                </div>
                
                <div class="modal-animal-details-item">
                    <span>Mixed Group: <p>${groupDisplays.mixed}</p></span>
                    ${sections.group ? `
                    <span>Mixed Genders: <p>${genderTexts.males}</p><p>${genderTexts.females}</p></span>
                    <span>Males Only: <p>${groupDisplays.males}</p></span>
                    <span>Females Only: <p>${groupDisplays.females}</p></span>
                    ` : ''}
                </div>
                
                <div class="modal-animal-details-item">
                    <span>
                        <p>Gestation: <span>${animal.gestationMonths || 0} months</span></p>
                        <p>Offspring p/Birth: <span>${formatOffspringRange(animal.offspringPerMating)}</span></p>
                        <p>Interbirth: <span>${animal.interbirthMonths === null ? 'Once per Lifetime' : `${animal.interbirthMonths} months`}</span></p>
                    </span>
                    <span>
                        <p>Maturity Age: <span>${animal.maturityAge || 0} years</span></p>
                        <p>Sterility Age: <span>${animal.sterilityAge === null ? 'Death' : `${animal.sterilityAge || 0} years`}</span></p>
                        <p>Life Expectancy: <span>${animal.lifeExpectancy || 0} years</span></p>
                    </span>
                </div>

                ${sections.food ? `
                <h3>Food Costs</h3>
                <div class="modal-animal-details-item">
                    ${[1, 2, 3].map(grade => `
                        <span>
                            Grade ${grade} <img height="20rem" src="./images/icons/icon-food.png" alt="Food">
                            <p>${animal[`foodGrade${grade}`] || 'N/A'}</p>
                            <p>$${animal[`foodGrade${grade}Cost`] || 0} p/Adult</p>
                            <p>$${animal[`foodGrade${grade}CostJuv`] || 0} p/Juv</p>
                        </span>
                    `).join('')}
                </div>
                ` : ''}

                <h3>Interspecies Enrichment:</h3>
                <div class="modal-animal-details-item">
                    <span>
                    ${generateEnrichmentIcons(animal.enrichmentBonus, animalsData) || `Doesn't benefit from sharing space with other species.`}
                    </span>
                </div>

                <h3>Notes:</h3>
                <div class="modal-animal-details-item">
                    <span>${animal.notes || 'No additional notes available.'}</span>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function showAnimalModal(animalName) {
    const existing = document.getElementById('modal-container');
    if (existing) {
        if (existing.dataset.animal === animalName) return;
        existing.remove();
    }
    if (!animalsData) return;
    const animal = Object.values(animalsData).find(a => a.name === animalName);
    if (!animal) return;

    const modal = createAnimalModal(animal);
    document.body.appendChild(modal);

    initAlbumCarousel(modal, animal);

    const closeModal = () => modal.remove();
    modal.querySelector('#modal-close').addEventListener('click', closeModal);
    modal.querySelector('#modal-overlay').addEventListener('click', closeModal);
    
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function setupAnimalModalListeners() {
    document.addEventListener('click', async function(e) {
        if (e.target.closest('.button-delete')) return;
        
        const img = e.target.closest('img');
        if (!img) return;

        await loadAnimalsData();
        if (!animalsData) return;

        // Try different methods to find animal name
        const getAnimalName = () => {
            // From zoopedia card
            const zoopediaCard = img.closest('.zoopedia-animal');
            if (zoopediaCard) return zoopediaCard.querySelector('h3')?.textContent.trim();
            
            // From selected animal
            const selectedCard = img.closest('.selected-animal');
            if (selectedCard) return selectedCard.querySelector('h3')?.textContent.trim();
            
            // From icon tooltip
            const iconContainer = img.closest('.icon-description');
            if (iconContainer?.hasAttribute('data-tooltip')) {
                const tooltip = iconContainer.getAttribute('data-tooltip');
                if (Object.values(animalsData).some(a => a.name === tooltip)) return tooltip;
            }
            
            // From img alt
            if (img.alt && Object.values(animalsData).some(a => a.name === img.alt)) return img.alt;
            
            return null;
        };

        const animalName = getAnimalName();
        if (animalName) {
            e.preventDefault();
            e.stopPropagation();
            showAnimalModal(animalName);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initDlcDropdown();
        setupAnimalModalListeners();
    });
} else {
    initDlcDropdown();
    setupAnimalModalListeners();
}

// Album (image carousel) support
const albumCache = Object.create(null);

const toCandidateFolders = (name) => {
    const trimmed = name.trim();
    const noSpace = trimmed.replace(/\s+/g,'')
    const flatLower = noSpace.toLowerCase();
    const lowerCamel = noSpace.charAt(0).toLowerCase() + noSpace.slice(1);
    const pascal = noSpace.charAt(0).toUpperCase() + noSpace.slice(1);
    const kebab = trimmed.toLowerCase().replace(/\s+/g,'-');
    const snake = trimmed.toLowerCase().replace(/\s+/g,'_');
    const spacedLower = trimmed.toLowerCase();
    return [...new Set([lowerCamel, flatLower, kebab, snake, pascal, noSpace, spacedLower, trimmed])];
};

const testImage = (url) => new Promise(res => {
    const img = new Image();
    img.onload = () => res(true);
    img.onerror = () => res(false);
    img.src = url;
});

async function loadAlbum(animal) {
    if (albumCache[animal.name] !== undefined) return albumCache[animal.name];
    
    const exts = ['png','jpg'];
    const folders = toCandidateFolders(animal.name);
    
    for (const folder of folders) {
        for (const ext of exts) {
            const first = `./images/albums/${folder}/1.${ext}`;
            if (await testImage(first)) {
                const images = [first];
                for (let i = 2; i <= 50; i++) {
                    let found = false;
                    for (const e of exts) {
                        const cand = `./images/albums/${folder}/${i}.${e}`;
                        if (await testImage(cand)) {
                            images.push(cand);
                            found = true;
                            break;
                        }
                    }
                    if (!found) break;
                }
                albumCache[animal.name] = {images, folder, idx: -1};
                console.debug('[Album] Found', animal.name, folder, images);
                return albumCache[animal.name];
            }
        }
    }
    return null;
}

const updateAlbumIndicator = (modal, alb) => {
    if (!alb || alb.images.length < 2) return;
    let ind = modal.querySelector('.album-indicator');
    if (!ind) {
        ind = document.createElement('div');
        ind.className = 'album-indicator';
        modal.querySelector('.modal-animal-image')?.appendChild(ind);
    }
    ind.textContent = `${alb.idx < 0 ? 0 : (alb.idx + 1)}/${alb.images.length}`;
};

function createAlbumNav(modal, alb, imgEl, originalSrc) {
    if (!alb || alb.images.length < 2 || modal.querySelector('.album-nav')) return;
    
    const nav = document.createElement('div');
    nav.className = 'album-nav';
    nav.innerHTML = `
        <button type="button" class="album-prev" aria-label="Previous image">◀</button>
        <button type="button" class="album-next" aria-label="Next image">▶</button>
    `;
    
    const container = modal.querySelector('.modal-animal-image');
    container.style.position = 'relative';
    Object.assign(nav.style, {
        position: 'absolute',
        bottom: '4px',
        right: '4px',
        display: 'flex',
        gap: '0.25rem'
    });
    
    nav.querySelectorAll('button').forEach(b => {
        Object.assign(b.style, {
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.45)',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '4px',
            padding: '0.15rem 0.4rem',
            fontWeight: '600'
        });
    });

    const navigate = (direction) => (e) => {
        e.stopPropagation();
        if (direction === 'prev') {
            if (alb.idx === -1) {
                alb.idx = alb.images.length - 1;
                imgEl.src = alb.images[alb.idx];
            } else if (alb.idx === 0) {
                alb.idx = -1;
                imgEl.src = originalSrc;
            } else {
                alb.idx--;
                imgEl.src = alb.images[alb.idx];
            }
        } else {
            if (alb.idx === -1) {
                alb.idx = 0;
                imgEl.src = alb.images[alb.idx];
            } else if (alb.idx === alb.images.length - 1) {
                alb.idx = -1;
                imgEl.src = originalSrc;
            } else {
                alb.idx++;
                imgEl.src = alb.images[alb.idx];
            }
        }
        updateAlbumIndicator(modal, alb);
    };

    nav.querySelector('.album-prev').addEventListener('click', navigate('prev'));
    nav.querySelector('.album-next').addEventListener('click', navigate('next'));
    container.appendChild(nav);
}

function initAlbumCarousel(modal, animal) {
    const imgEl = modal.querySelector('.modal-animal-image img');
    if (!imgEl) return;
    
    const originalSrc = imgEl.src;
    Object.assign(imgEl, {
        role: 'button',
        tabIndex: 0,
        'aria-label': 'Cycle animal album images'
    });
    imgEl.style.cursor = 'pointer';

    let loading = false;

    const advance = async () => {
        if (loading) return;
        loading = true;
        const alb = await loadAlbum(animal);
        loading = false;
        if (!alb || alb.images.length < 1) return;

        if (alb.images.length === 1) {
            alb.idx = alb.idx === -1 ? 0 : -1;
            imgEl.src = alb.idx === -1 ? originalSrc : alb.images[0];
        } else {
            if (alb.idx === -1) {
                alb.idx = 0;
                imgEl.src = alb.images[alb.idx];
            } else if (alb.idx === alb.images.length - 1) {
                alb.idx = -1;
                imgEl.src = originalSrc;
            } else {
                alb.idx++;
                imgEl.src = alb.images[alb.idx];
            }
        }
        updateAlbumIndicator(modal, alb);
    };

    imgEl.addEventListener('click', advance);
    imgEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            advance();
        }
    });

    loadAlbum(animal).then(alb => {
        if (alb?.images.length > 1) {
            updateAlbumIndicator(modal, alb);
            createAlbumNav(modal, alb, imgEl, originalSrc);
        }
    });
}