import {
    types, DLC, continents, biomes, IUCN, relationWithHumans, dominance, matingSystem, maturationRules
} from "./filters.js";
import {animals} from "./animals.js";

// --- Filter State ---
let selectedTypes = ["Habitat", "Exhibit"];
let selectedDLCs = ["All"];
let selectedContinents = [];
let selectedBiomes = [];
let selectedStatus = [];
let dataMinimum = {};
let dataRange = {};
let selectedBooleans = {};
let selectedSwimming = "All";
let alphaAscending = true;
let appealAscending = true;
let foodAscending = true;
let lifeAscending = true; 
let currentSort = 'alpha';
let selectedClass = "All";
let selectedOrder = "All";
let selectedFamily = "All";
let selectedGenus = "All";

// --- Event Listeners ---
function setupIconFilter(id, selected, key) {
  const icons = document.querySelectorAll(`#${id} .icon-description`);
  const all = Array.from(icons).map(ic => ic.getAttribute('data-tooltip'));
  if (!selected.length) selected.push(...all);
  icons.forEach(icon => icon.onclick = () => {
    const val = icon.getAttribute('data-tooltip');
    if (selected.length === all.length) selected.splice(0, selected.length, val);
    else if (selected.includes(val)) selected.length === 1 ? selected.splice(0, selected.length, ...all) : selected.splice(selected.indexOf(val), 1);
    else selected.push(val);
    if (!selected.length) selected.push(...all);
    icons.forEach(ic => ic.classList.toggle('filter-selected', selected.includes(ic.getAttribute('data-tooltip'))));
    window[key] = selected;
    reRender();
  });
}

function setupTypeFilter() {
  const typeButtons = document.querySelectorAll('#filters-type .type-filter');
  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      selectedTypes = selectedTypes.length === 2 ? [type] : 
                    selectedTypes.includes(type) ? ["Habitat", "Exhibit"] : [type];
      typeButtons.forEach(el => el.classList.toggle('filter-selected', selectedTypes.includes(el.getAttribute('data-type'))));
      reRender();
    });
  });
}

function setupDLCFilter() {
  const dlcCheckboxes = document.querySelectorAll('#filters-dlc input[type="checkbox"]');
  dlcCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.value === "All" && checkbox.checked) {
        dlcCheckboxes.forEach(cb => cb.value !== "All" && (cb.checked = false));
        selectedDLCs = ["All"];
      } else {
        const nonAllBoxes = Array.from(dlcCheckboxes).filter(cb => cb.value !== "All");
        selectedDLCs = nonAllBoxes.filter(cb => cb.checked).map(cb => cb.value);
        const allBox = document.querySelector('#filters-dlc input[value="All"]');
        if (selectedDLCs.length === 0) {
          allBox.checked = true;
          selectedDLCs = ["All"];
        } else {
          allBox.checked = false;
        }
      }
      reRender();
    });
  });
}

// Simplified setup functions using setupIconFilter
const setupContinentFilter = () => setupIconFilter('filters-continents', selectedContinents, 'selectedContinents');
const setupBiomeFilter = () => setupIconFilter('filters-biomes', selectedBiomes, 'selectedBiomes');
const setupStatusFilter = () => setupIconFilter('filters-status', selectedStatus, 'selectedStatus');

function setupDataInputFilters() {
  const container = document.querySelector('#filters-data-input');
  if (!container) return;
  container.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      if (input.closest('#data-minimum')) {
        dataMinimum[input.name] = input.value ? Number(input.value) : null;
      }
      if (input.closest('#data-range')) {
        if (!dataRange[input.name]) dataRange[input.name] = {min: null, max: null};
        dataRange[input.name].min = input.value ? Number(input.value) : null;
      }
      reRender();
    });
  });
}

function setupBooleanFilter() {
  document.querySelectorAll('.filter-boolean').forEach(group => {
    const filterKey = group.getAttribute('data-filter');
    const icons = group.querySelectorAll('.icon-description');
    icons.forEach(ic => ic.classList.add('filter-selected'));
    selectedBooleans[filterKey] = null;
    
    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        const isSelected = icon.classList.contains('filter-selected');
        const bothSelected = icons[0].classList.contains('filter-selected') && icons[1].classList.contains('filter-selected');
        
        if (isSelected && bothSelected) {
          icons.forEach(ic => ic.classList.remove('filter-selected'));
          icon.classList.add('filter-selected');
          selectedBooleans[filterKey] = icon.getAttribute('data-value') === 'true';
        } else if (isSelected) {
          icons.forEach(ic => ic.classList.add('filter-selected'));
          selectedBooleans[filterKey] = null;
        } else {
          icons.forEach(ic => ic.classList.remove('filter-selected'));
          icon.classList.add('filter-selected');
          selectedBooleans[filterKey] = icon.getAttribute('data-value') === 'true';
        }
        reRender();
      });
    });
  });
}

function setupSwimmingFilter() {
  const swimmingSelect = document.querySelector('#filter-data-boolean select[name="Swimming"]');
  swimmingSelect?.addEventListener('change', () => {
    selectedSwimming = swimmingSelect.value;
    reRender();
  });
}

// Consolidated sort setup
function setupSortButtons() {
  const sortButtons = [
    ['.button-alphabet', () => { alphaAscending = !alphaAscending; currentSort = 'alpha'; }],
    ['.button-appeal', () => { appealAscending = !appealAscending; currentSort = 'appeal'; }],
    ['.button-food-cost', () => { foodAscending = !foodAscending; currentSort = 'food'; }],
    ['.button-life-expectancy', () => { lifeAscending = !lifeAscending; currentSort = 'life'; }]
  ];
  
  sortButtons.forEach(([selector, handler]) => {
    const btn = document.querySelector(selector);
    btn?.addEventListener('click', () => { handler(); reRender(); });
  });
}

// --- Taxonomy Helpers ---
function getAllTaxonomyValues() {
  const values = { class: new Set(), order: new Set(), family: new Set(), genus: new Set() };
  Object.values(animals).forEach(a => {
    ['class', 'order', 'family', 'genus'].forEach(prop => {
      if (a[prop]) values[prop].add(a[prop]);
    });
  });
  return Object.fromEntries(Object.entries(values).map(([k, v]) => [k, [...v].sort()]));
}

function populateTaxonomySelectors() {
  const {class:cls, order:ord, family:fam, genus:gen} = getAllTaxonomyValues();
  const setOptions = (sel, arr, current) => {
    if (!sel) return;
    const prev = current;
    sel.innerHTML = '<option value="All">All</option>' + arr.map(v=>`<option value="${v}">${v}</option>`).join('');
    if (prev !== "All" && arr.includes(prev)) sel.value = prev; else sel.value="All";
  };
  setOptions(document.querySelector('#filter-taxonomy select[name="Class"]'), cls, selectedClass);
  setOptions(document.querySelector('#filter-taxonomy select[name="Order"]'), ord, selectedOrder);
  setOptions(document.querySelector('#filter-taxonomy select[name="Family"]'), fam, selectedFamily);
  setOptions(document.querySelector('#filter-taxonomy select[name="Genus"]'), gen, selectedGenus);
}

function setupTaxonomyFilterListeners() {
  const classSel   = document.querySelector('#filter-taxonomy select[name="Class"]');
  const orderSel   = document.querySelector('#filter-taxonomy select[name="Order"]');
  const familySel  = document.querySelector('#filter-taxonomy select[name="Family"]');
  const genusSel   = document.querySelector('#filter-taxonomy select[name="Genus"]');
  [classSel,orderSel,familySel,genusSel].forEach(sel=>{
    if(!sel) return;
    sel.addEventListener('change', ()=>{
      const changed = sel.getAttribute('name');
      // read current raw selections
      selectedClass  = classSel?.value  || "All";
      selectedOrder  = orderSel?.value  || "All";
      selectedFamily = familySel?.value || "All";
      selectedGenus  = genusSel?.value  || "All";

      // Handle "All" selections and upward propagation
      if (changed === 'Class') {
        if (selectedClass === "All") {
          // Reset all lower levels when Class is "All"
          selectedOrder = selectedFamily = selectedGenus = "All";
        }
      } else if (changed === 'Order') {
        if (selectedOrder === "All") {
          // Reset family and genus when Order is "All"
          selectedFamily = selectedGenus = "All";
        } else {
          // Check if order belongs to current class
          const a = Object.values(animals).find(x=>x.order===selectedOrder);
          if (a) selectedClass = a.class || selectedClass;
        }
      } else if (changed === 'Family') {
        if (selectedFamily === "All") {
          // Reset only genus when Family is "All"
          selectedGenus = "All";
        } else {
          // Check if family belongs to current hierarchy
          const a = Object.values(animals).find(x=>x.family===selectedFamily);
          if (a) {
            selectedOrder = a.order || selectedOrder;
            selectedClass = a.class || selectedClass;
          }
        }
      } else if (changed === 'Genus' && selectedGenus !== "All") {
        // Only propagate upward for genus selections
        const a = Object.values(animals).find(x=>x.genus===selectedGenus);
        if (a) {
          selectedFamily = a.family || selectedFamily;
          selectedOrder = a.order || selectedOrder;
          selectedClass = a.class || selectedClass;
        }
      }

      reRender();
    });
  });
}

function updateTaxonomySelectors() {
  // Rebuild each taxonomy select based on higher level selections only (never by its own or lower levels)
  const classSel  = document.querySelector('#filter-taxonomy select[name="Class"]');
  const orderSel  = document.querySelector('#filter-taxonomy select[name="Order"]');
  const familySel = document.querySelector('#filter-taxonomy select[name="Family"]');
  const genusSel  = document.querySelector('#filter-taxonomy select[name="Genus"]');
  const setOptions = (sel, values, current) => {
    if (!sel) return "All";
    const opts = ['All', ...values];
    sel.innerHTML = opts.map(v=>`<option value="${v}">${v}</option>`).join('');
    if (current !== "All" && opts.includes(current)) { sel.value = current; return current; }
    sel.value = "All"; return "All";
  };
  // Class: full list
  const classes = [...new Set(Object.values(animals).map(a=>a.class).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  selectedClass = setOptions(classSel, classes, selectedClass);
  // Order: filtered by class
  const orders = [...new Set(Object.values(animals)
    .filter(a=> selectedClass==="All" || a.class===selectedClass)
    .map(a=>a.order).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  selectedOrder = setOptions(orderSel, orders, selectedOrder);
  // Family: filtered by class + order
  const families = [...new Set(Object.values(animals)
    .filter(a=> (selectedClass==="All" || a.class===selectedClass) &&
                (selectedOrder==="All" || a.order===selectedOrder))
    .map(a=>a.family).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  selectedFamily = setOptions(familySel, families, selectedFamily);
  // Genus: filtered by class + order + family
  const genera = [...new Set(Object.values(animals)
    .filter(a=> (selectedClass==="All" || a.class===selectedClass) &&
                (selectedOrder==="All" || a.order===selectedOrder) &&
                (selectedFamily==="All" || a.family===selectedFamily))
    .map(a=>a.genus).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  selectedGenus = setOptions(genusSel, genera, selectedGenus);
}

// --- Filter Functions ---
const filterByType = animal => selectedTypes.length === 2 || selectedTypes.includes(animal.type);

function filterByDLC(animal) {
  if (selectedDLCs.includes("All")) return true;
  const animalDLCs = Array.isArray(animal.DLC) ? animal.DLC : [animal.DLC];
  return animalDLCs.some(dlc => {
    const dlcName = typeof dlc === 'string' ? dlc : dlc?.name;
    return selectedDLCs.includes(dlcName);
  });
}

// Consolidated continent/biome filter
function createArrayFilter(selectedArray, animalProp) {
  return animal => {
    const allItems = Array.from(document.querySelectorAll(`#filters-${animalProp} .icon-description`)).map(ic => ic.getAttribute('data-tooltip'));
    if (selectedArray.length === 0 || selectedArray.length === allItems.length) return true;
    const animalItems = (animal[animalProp] || []).map(item => typeof item === 'string' ? item : item.name);
    return selectedArray.every(item => animalItems.includes(item));
  };
}

const filterByContinents = createArrayFilter(selectedContinents, 'continents');
const filterByBiomes = createArrayFilter(selectedBiomes, 'biomes');

function filterByStatus(animal) {
  const allStatus = Array.from(document.querySelectorAll('#filters-status .icon-description')).map(ic => ic.getAttribute('data-tooltip'));
  if (selectedStatus.length === 0 || selectedStatus.length === allStatus.length) return true;
  const animalStatus = typeof animal.IUCN === 'string' ? animal.IUCN : animal.IUCN?.status;
  return animalStatus && selectedStatus.includes(animalStatus);
}

// Simplified data filters
const filterByDataMinimum = animal => 
  Object.entries(dataMinimum).every(([key, min]) => 
    min === null || (animal[key] != null && animal[key] !== 0 && animal[key] <= min));

const filterByDataRange = animal =>
  Object.entries(dataRange).every(([key, {min}]) =>
    min === null || (animal[key]?.min <= min && min <= animal[key]?.max));

const filterByBooleans = animal =>
  Object.entries(selectedBooleans).every(([key, value]) => 
    value === null || animal[key] === value);

const filterBySwimming = animal => {
  if (selectedSwimming === "All") return true;
  const swimMap = {
    "Can't Swim": () => !animal.canWade && !animal.canSwim && !animal.canDive,
    "Wades Only": () => animal.canWade && !animal.canSwim && !animal.canDive,
    "Can Swim": () => animal.canSwim,
    "Can Dive": () => animal.canDive
  };
  return swimMap[selectedSwimming]?.() ?? true;
};

const filterByTaxonomy = animal =>
  ['class', 'order', 'family', 'genus'].every(prop => {
    const selected = eval(`selected${prop.charAt(0).toUpperCase() + prop.slice(1)}`);
    return selected === "All" || animal[prop] === selected;
  });

const filterAnimals = animal => [
  filterByType, filterByDLC, filterByContinents, filterByBiomes, filterByStatus,
  filterByDataMinimum, filterByDataRange, filterByBooleans, filterBySwimming, filterByTaxonomy
].every(filter => filter(animal));

// --- Rendering ---
function reRender() {
  updateTaxonomySelectors();
  const zoopediaList = document.getElementById("zoopedia-list");
  const filteredAnimals = Object.values(animals).filter(filterAnimals);

  // Consolidated sorting
  const sortFunctions = {
    appeal: (a, b) => appealAscending ? (a.speciesAppeal ?? 0) - (b.speciesAppeal ?? 0) : (b.speciesAppeal ?? 0) - (a.speciesAppeal ?? 0),
    food: (a, b) => foodAscending ? (a.foodGrade1Cost ?? 0) - (b.foodGrade1Cost ?? 0) : (b.foodGrade1Cost ?? 0) - (a.foodGrade1Cost ?? 0),
    life: (a, b) => lifeAscending ? (a.lifeExpectancy ?? 0) - (b.lifeExpectancy ?? 0) : (b.lifeExpectancy ?? 0) - (a.lifeExpectancy ?? 0),
    alpha: (a, b) => alphaAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  };
  
  filteredAnimals.sort(sortFunctions[currentSort] || sortFunctions.alpha);
  
  zoopediaList.innerHTML = filteredAnimals.map(animal => `
    <div class="zoopedia-animal">
      <div class="zoopedia-image">
        <img src="${animal.image}" alt="${animal.name}">
      </div>
      <div class="zoopedia-name">
        <h3>${animal.name}</h3>
        <span>${animal.latin}</span>
      </div>
    </div>
  `).join("");
}

// Reset all filters to initial load state
function resetAllFilters(){
  // Core state
  selectedTypes = ["Habitat","Exhibit"];
  selectedDLCs = ["All"];
  selectedContinents.length = 0;
  selectedBiomes.length = 0;
  selectedStatus.length = 0;
  dataMinimum = {};
  dataRange = {};
  selectedBooleans = {};
  selectedSwimming = "All";
  alphaAscending = true;
  appealAscending = true;
  foodAscending = true;
  lifeAscending = true;
  currentSort = 'alpha';
  selectedClass = selectedOrder = selectedFamily = selectedGenus = "All";

  // Type buttons
  document.querySelectorAll('#filters-type .type-filter').forEach(el=>el.classList.add('filter-selected'));

  // DLC checkboxes
  const dlcBoxAll = document.querySelector('#filters-dlc input[value="All"]');
  if(dlcBoxAll) dlcBoxAll.checked = true;
  document.querySelectorAll('#filters-dlc input[type="checkbox"]').forEach(cb=>{
    if(cb.value !== 'All') cb.checked = false;
  });

  // Icon filters: add class then repopulate arrays by mutating (preserves handler references)
  ['#filters-continents','#filters-biomes','#filters-status'].forEach(sel=>{
    document.querySelectorAll(`${sel} .icon-description`).forEach(ic=>ic.classList.add('filter-selected'));
  });
  const pushAll = (selector, targetArr)=>{
    targetArr.push(
      ...Array.from(document.querySelectorAll(`${selector} .icon-description`))
        .map(ic=>ic.getAttribute('data-tooltip'))
    );
  };
  pushAll('#filters-continents', selectedContinents);
  pushAll('#filters-biomes',    selectedBiomes);
  pushAll('#filters-status',    selectedStatus);

  // Numeric inputs cleared
  document.querySelectorAll('#filters-data-input input[type="number"]').forEach(inp=>inp.value='');

  // Boolean filters reset
  document.querySelectorAll('.filter-boolean').forEach(group=>{
    group.querySelectorAll('.icon-description').forEach(ic=>ic.classList.add('filter-selected'));
    const key = group.getAttribute('data-filter');
    if(key) selectedBooleans[key] = null;
  });

  // Swimming select
  const swimSel = document.querySelector('#filter-data-boolean select[name="Swimming"]');
  if(swimSel) swimSel.value = "All";

  // Taxonomy selects
  populateTaxonomySelectors();
  ['Class','Order','Family','Genus'].forEach(name=>{
    const sel = document.querySelector(`#filter-taxonomy select[name="${name}"]`);
    if(sel) sel.value = "All";
  });

  reRender();
}

// --- Initialization ---
function initializeFilters() {
  const iconSelectors = ['#filters-continents', '#filters-biomes', '#filters-status'];
  const arrays = [selectedContinents, selectedBiomes, selectedStatus];
  
  iconSelectors.forEach((selector, i) => {
    arrays[i].push(...Array.from(document.querySelectorAll(`${selector} .icon-description`))
      .map(ic => ic.getAttribute('data-tooltip')));
  });
  
  populateTaxonomySelectors();
  setupTaxonomyFilterListeners();
  setupTypeFilter();
  setupDLCFilter();
  setupContinentFilter();
  setupBiomeFilter();
  setupStatusFilter();
  setupDataInputFilters();
  setupBooleanFilter();
  setupSwimmingFilter();
  setupSortButtons();
  
  document.querySelector('.button-reset-filters')?.addEventListener('click', e => {
    e.preventDefault();
    resetAllFilters();
  });
  
  reRender();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeFilters);
} else {
  initializeFilters();
}