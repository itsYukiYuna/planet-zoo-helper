import { animals } from "./animals.js";
import {
    types, DLC, continents, biomes, IUCN, relationWithHumans, dominance, matingSystem, maturationRules
} from "./filters.js";

// ===== Utilities =====
const q = s=>document.querySelector(s), qa = s=>Array.from(document.querySelectorAll(s));
const TERRAIN_TYPES = ['shortGrass','longGrass','soilRange','rockRange','sandRange','snowRange'];
const sanitizeId = n=>n.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();
const animalByName = Object.fromEntries(Object.values(animals).map(a=>[a.name,a]));
const getAnimal = n=>animalByName[n];

// Flash message
function showMessage(msg, err=false){
  const old=q('#selection-message'); old&&old.remove();
  const d=document.createElement('div'); d.id='selection-message'; d.textContent=msg;
  Object.assign(d.style,{color:err?'red':'green',marginTop:'.5rem',fontSize:'.9rem'});
  q('.button-add-animal')?.parentNode.insertBefore(d,q('.button-add-animal').nextSibling);
  setTimeout(()=>d.parentNode&&d.remove(),2000);
}

// ===== DLC Helpers =====
function getSelectedDLCs(){
  const c=q('#filters-dlc'); if(!c) return ['All'];
  const sel=[...c.querySelectorAll('input[name="DLC"]')].filter(b=>b.checked && b.value!=='All').map(b=>b.value);
  return sel.length?sel:['All'];
}
function setupDlcSelectSync(){
  const c=q('#filters-dlc'); if(!c) return;
  const all=c.querySelector('input[value="All"]');
  const others=[...c.querySelectorAll('input[name="DLC"]')].filter(b=>b!==all);
  if(!others.some(b=>b.checked)) all.checked=true;
  const repop=()=>populateAnimalSelect();
  all.addEventListener('change',()=>{ if(!all.checked) all.checked=true; others.forEach(o=>o.checked=false); repop(); });
  others.forEach(o=>o.addEventListener('change',()=>{ all.checked = !others.some(x=>x.checked); repop(); }));
}

// ===== Data Collection =====
function getSelectedAnimalsData(container = document){
  return [...container.querySelectorAll('.selected-animal')].map(el=>{
    const name=el.querySelector('h3')?.textContent;
    const a=getAnimal(name); if(!a) return null;
    const sid=sanitizeId(a.name);
    const val = prefix => parseInt(el.querySelector(`#${prefix}-${sid}`)?.value)||0;
    return {animal:a, males:val('male-count'), females:val('female-count'), juveniles:val('juvenile-count'), totalAdults:val('male-count')+val('female-count')};
  }).filter(Boolean);
}
const getSelectedAnimalNames = (container = document)=>getSelectedAnimalsData(container).map(d=>d.animal.name);

// ===== Range Calculations =====
const getPropertyRange = (prop, container = document) => {
  const ranges = getSelectedAnimalNames(container)
    .map(n => getAnimal(n)?.[prop])
    .filter(r => r && typeof r.min === 'number' && typeof r.max === 'number');
  if(!ranges.length) return {min:null,max:null};
  return {min: Math.max(...ranges.map(r=>r.min)), max: Math.min(...ranges.map(r=>r.max))};
};

// Consolidated area calculation
const calculateAreaRequirement = (minProp, perAdultProp, perJuvProp, container = document) => {
  const maxNeeded = getSelectedAnimalsData(container).reduce((m,d)=>{
    const base = d.animal[minProp] || 0;
    const needed = base + (d.totalAdults - 1)*(d.animal[perAdultProp]||0) + d.juveniles*(d.animal[perJuvProp]||0);
    return Math.max(m, d.totalAdults > 0 ? needed : 0);
  }, 0);
  return Math.ceil(maxNeeded);
};

// Area functions
const calculateLandArea = c=>calculateAreaRequirement('landMinimum','landPerAddAdult','landPerAddJuvenile', c);
const calculateClimbingArea = c=>calculateAreaRequirement('climbingMinimum','climbingPerAddAdult','climbingPerAddJuvenile', c);
const calculateWaterArea = c=>calculateAreaRequirement('waterMinimum','waterPerAddAdult','waterPerAddJuvenile', c);
const calculateDeepWaterArea = c=>calculateAreaRequirement('waterDeep','waterDeepPerAddAdult','waterDeepPerAddJuvenile', c);

// ===== Compatibility =====
const getCompatibleObjects = (prop, container = document) => {
  const arrays = getSelectedAnimalNames(container).map(n => getAnimal(n)?.[prop] || []);
  return arrays.length ? arrays.reduce((acc, arr) => acc.filter(o1 => arr.some(o2 => o2.name === o1.name))) : [];
};

const getBarrierRequirements = (container = document) => 
  getSelectedAnimalsData(container).reduce((acc,d)=>({
    grade:Math.max(acc.grade,d.animal.barrierGrade||0),
    height:Math.max(acc.height,d.animal.barrierHeight||0),
    climbProof:acc.climbProof||d.animal.canClimb
  }),{grade:0,height:0,climbProof:false});

// ===== Display Updates =====
function updateIconSet(id, list, container = document){
  const span = container.querySelector(id);
  if(!span) return;
  span.innerHTML = !list.length && container.querySelectorAll('.selected-animal').length ? 
    '<span style="color:red;">No Match</span>' : 
    list.map(o=>`<div class="icon-description filter-selected" data-tooltip="${o.name}"><img height="30rem" src="${o.icon}" alt="${o.name}"></div>`).join('');
}

function updateRangeDisplay(sel, range, suffix='', container = document){
  const span=container.querySelector(sel); if(!span) return;
  if(range.min==null || range.max==null) span.textContent='';
  else if(range.min>range.max) span.innerHTML='<span style="color:red;">No Match</span>';
  else span.textContent=`${range.min}${suffix} to ${range.max}${suffix}`;
}

function updateTerrainDisplay(id,type, container = document){
  const span=container.querySelector(`#${id} span`); if(!span) return;
  const r=getPropertyRange(type, container);
  const over = TERRAIN_TYPES.map(t=>getPropertyRange(t, container).min).filter(v=>typeof v === 'number').reduce((a,b)=>a+b,0) > 100;
  if(r.min==null||r.max==null) span.textContent='';
  else if(r.min>r.max) span.innerHTML='<span style="color:red;">No Match</span>';
  else { span.textContent=`${r.min}% - ${r.max}%`; span.style.color = over?'red':''; }
}

function updateFoodCostsDisplay(container = document){
  const span=container.querySelector('#food-costs span'); if(!span) return;
  const total = getSelectedAnimalsData(container).reduce((sum,d)=>{
    const sid=sanitizeId(d.animal.name);
    const el=[...container.querySelectorAll('.selected-animal')].find(div=>div.querySelector('h3')?.textContent===d.animal.name);
    if(!el) return sum;
    const grade = el.querySelector(`#food-grade-${sid}`)?.value || '1';
    const [aProp,jProp] = grade==='2'?['foodGrade2Cost','foodGrade2CostJuv']:grade==='3'?['foodGrade3Cost','foodGrade3CostJuv']:['foodGrade1Cost','foodGrade1CostJuv'];
    return sum + (d.males + d.females)*(d.animal[aProp]||0) + d.juveniles*(d.animal[jProp]||0);
  },0);
  span.textContent = total.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
}

// ===== Visual Feedback =====
function updateJuvenileVisualFeedback(container = document){
  const data=getSelectedAnimalsData(container);
  const cards=container.querySelectorAll('.selected-animal');
  data.forEach((d,i)=>{
    const card=cards[i];
    const [maleInput, femaleInput, juvInput] = ['male-count','female-count','juvenile-count'].map(id=>card.querySelector(`input[id^="${id}-"]`));
    
    // Reset styles
    [maleInput,femaleInput,juvInput].forEach(inp=>inp&&Object.assign(inp.style,{backgroundColor:'',border:'',borderRadius:'0.5rem'}));
    card.style.backgroundColor = card.style.border = '';

    // Apply warnings
    if(d.juveniles>0 && d.totalAdults===0 && juvInput) Object.assign(juvInput.style,{backgroundColor:'#ffcccc',border:'0.2rem solid red'});
    
    const groupWarn = d.totalAdults===0 || d.totalAdults<d.animal.groupSizeMin || d.totalAdults>d.animal.groupMixedMax ||
      (d.males>0 && !d.females && d.males>d.animal.maxMalesBachelor) ||
      (d.females>0 && !d.males && d.females>d.animal.maxFemalesBachelor);
    
    if(groupWarn) [maleInput,femaleInput].forEach(inp=>inp&&Object.assign(inp.style,{backgroundColor:'#ffe6cc',border:'0.2rem solid orange'}));
    
    if(d.males>0 && d.females>0){
      if(d.males>d.animal.maxMalesMixed && maleInput) Object.assign(maleInput.style,{backgroundColor:'#ffe6cc',border:'0.2rem solid orange'});
      if(d.females>d.animal.maxFemalesMixed && femaleInput) Object.assign(femaleInput.style,{backgroundColor:'#ffe6cc',border:'0.2rem solid orange'});
    }

    if(d.animal.predator) Object.assign(card.style,{backgroundColor:'#ffcccc',border:'2px solid red',borderRadius:'1rem'});

    // Dominance colors
    const dom=d.animal.dominance;
    if(d.males>0 && d.females>0){
      if(dom===dominance.alphaMale && maleInput) Object.assign(maleInput.style,{backgroundColor:'#cce4ff',border:'0.2rem solid #3399ff'});
      else if(dom===dominance.alphaFemale && femaleInput) Object.assign(femaleInput.style,{backgroundColor:'#ffd6eb',border:'0.2rem solid #ff66b3'});
      else if(dom===dominance.alphaCouple) [maleInput,femaleInput].forEach(inp=>inp&&Object.assign(inp.style,{backgroundColor:'#e5d4ff',border:'0.2rem solid #8e50ff'}));
    }
  });
}

// ===== Notes Generation =====
function generateSpecialNotes(container = document){
  const box=container.querySelector('#special-notes'); if(!box) return;
  const data=getSelectedAnimalsData(container);
  if(!data.length){ box.innerHTML="Please select an animal to see its habitat requirements..."; return; }
  
  const notes=[];
  const terrainOver = TERRAIN_TYPES.map(t=>getPropertyRange(t, container).min).filter(v=>typeof v === 'number').reduce((a,b)=>a+b,0) > 100;
  if(terrainOver) notes.push('<span style="color:red;">The total for minimum terrain requirements exceeds 100%! Can\'t satisfy all the animals!</span>');
  
  const plant=getPropertyRange('plantCoverage', container), cont=getCompatibleObjects('continents', container), bio=getCompatibleObjects('biomes', container);
  if(plant.min===0){
    if(!cont.length && !bio.length) notes.push('<span style="color:orange;">There is no match in continents and biomes, but the species do not require plant coverage.</span>');
    else if(!cont.length) notes.push('<span style="color:orange;">There is no match in continents, but the species do not require plant coverage.</span>');
    else if(!bio.length) notes.push('<span style="color:orange;">There is no match in biomes, but the species do not require plant coverage.</span>');
  }
  
  data.forEach(d=>{
    const a=d.animal;
    if(d.totalAdults===0) notes.push(`<span style="color:orange;">Please add an adult ${a.name} for more data.</span>`);
    else {
      // Group size warnings
      if(d.totalAdults<a.groupSizeMin) notes.push(`<span style="color:orange;">At least ${a.groupSizeMin} adult ${a.name}s are required.</span>`);
      if(d.totalAdults>a.groupMixedMax) notes.push(`<span style="color:orange;">You shouldn't keep more than ${a.groupMixedMax} adult ${a.name}s in the habitat!</span>`);
      
      // Gender-specific warnings
      if(d.males>0 && !d.females && d.males>a.maxMalesBachelor) notes.push(`<span style="color:orange;">There shouldn't be more than ${a.maxMalesBachelor} male ${a.name}s in a male only habitat!</span>`);
      else if(d.females>0 && !d.males && d.females>a.maxFemalesBachelor) notes.push(`<span style="color:orange;">There shouldn't be more than ${a.maxFemalesBachelor} female ${a.name}s in a female only habitat!</span>`);
      else if(d.males>0 && d.females>0){
        if(d.males>a.maxMalesMixed && d.females>a.maxFemalesMixed) notes.push(`<span style="color:orange;">You shouldn't keep more than ${a.maxMalesMixed} male and ${a.maxFemalesMixed} female ${a.name}s in a habitat!</span>`);
        else {
          if(d.males>a.maxMalesMixed) notes.push(`<span style="color:orange;">There shouldn't be more than ${a.maxMalesMixed} male ${a.name}s in a mixed gender habitat!</span>`);
          if(d.females>a.maxFemalesMixed) notes.push(`<span style="color:orange;">There shouldn't be more than ${a.maxFemalesMixed} female ${a.name}s in a mixed gender habitat!</span>`);
        }
      }
    }
    
    // Special conditions
    if(d.juveniles>0 && d.totalAdults===0) notes.push(`<span style="color:red;">${a.name} requires an adult of the same species!</span>`);
    if(a.predator) notes.push(`<span style="color:red;">${a.name} is a predator!</span>`);
    if(a.burrower) notes.push(`<span style="color:green;">${a.name} can use burrows!</span>`);
    
    // Dominance notes
    if(d.males>0 && d.females>0){
      if(a.dominance===dominance.alphaMale) notes.push(`<span style="color:#3399ff;">Only the ${a.name} alpha male can mate!</span>`);
      else if(a.dominance===dominance.alphaFemale) notes.push(`<span style="color:#ff66b3;">Only the ${a.name} alpha female can mate!</span>`);
      else if(a.dominance===dominance.alphaCouple) notes.push(`<span style="color:#8e50ff;">Only the ${a.name} alpha couple can mate!</span>`);
    }
    
    // Offspring calculation
    if (d.females > 0 && a.gestationMonths && a.interbirthMonths && a.offspringPerMating) {
      const sterilityAge = a.sterilityAge !== null ? a.sterilityAge : a.lifeExpectancy;
      if (sterilityAge != null && sterilityAge >= 0) {
        const reproductiveMonths = (sterilityAge - a.maturityAge) * 12;
        const cyclesPerLifetime = Math.round(reproductiveMonths / (a.gestationMonths + a.interbirthMonths));
        const minOffspringPerFemale = Math.round(cyclesPerLifetime * a.offspringPerMating.min);
        const maxOffspringPerFemale = Math.round(cyclesPerLifetime * a.offspringPerMating.max);
        
        if (a.dominance === dominance.alphaCouple || a.dominance === dominance.alphaFemale) {
          if (d.males > 0 && d.females > 0) {
            const breedingType = a.dominance === dominance.alphaCouple ? 'alpha couple' : 'alpha female';
            const text = minOffspringPerFemale === maxOffspringPerFemale ? 
              `The ${a.name} ${breedingType} can have about ${minOffspringPerFemale} offspring in their lifetime!` :
              `The ${a.name} ${breedingType} can have between ${minOffspringPerFemale} and ${maxOffspringPerFemale} offspring in their lifetime!`;
            notes.push(`<span style="color:lightblue;">${text}</span>`);
          }
        } else if (d.males > 0 && d.females > 0) {
          const totalMin = minOffspringPerFemale * d.females;
          const totalMax = maxOffspringPerFemale * d.females;
          let text;
          if (d.females === 1) {
            text = minOffspringPerFemale === maxOffspringPerFemale ? 
              `The female ${a.name} added can have about ${totalMin} offspring in her lifetime!` :
              `The female ${a.name} added can have between ${totalMin} and ${totalMax} offspring in her lifetime!`;
          } else {
            text = minOffspringPerFemale === maxOffspringPerFemale ? 
              `The female ${a.name}s added can have about ${totalMin} offspring in their lifetime! (${minOffspringPerFemale} per female)` :
              `The female ${a.name}s added can have between ${totalMin} and ${totalMax} offspring in their lifetime! (${minOffspringPerFemale}-${maxOffspringPerFemale} per female)`;
          }
          notes.push(`<span style="color:lightblue;">${text}</span>`);
        }
      }
    }
  });
  
  if(data.length && data.every(d=>d.animal.guestsEnter)){
    notes.push('<span style="color:green;">Guests can enter this habitat.</span>');
    data.forEach(d=>d.animal.guestsInteract && notes.push(`<span style="color:green;">Animal encounters available for ${d.animal.name}!</span>`));
  }
  
  updateJuvenileVisualFeedback(container);
  box.innerHTML=notes.join('<br>');
}

// ===== Main Refresh =====
function refreshAllDisplays(container = document){
  const terrainMap={shortGrass:'range-grass-short',longGrass:'range-grass-long',soilRange:'range-soil',rockRange:'range-rock',sandRange:'range-sand',snowRange:'range-snow'};
  
  updateIconSet('#req-continents span', getCompatibleObjects('continents', container), container);
  updateIconSet('#req-biomes span', getCompatibleObjects('biomes', container), container);
  
  const barrier=getBarrierRequirements(container);
  const span=container.querySelector('#req-barrier span');
  if(span) span.textContent=(barrier.grade||barrier.height)?`Grade: ${barrier.grade}, Height: ${barrier.height}m${barrier.climbProof?', Climb Proof':''}`:'';
  
  updateRangeDisplay('#range-temperature span', getPropertyRange('temperatureRange', container), '', container);
  updateRangeDisplay('#range-plant-coverage span', getPropertyRange('plantCoverage', container), '%', container);
  
  TERRAIN_TYPES.forEach(t=>updateTerrainDisplay(terrainMap[t],t, container));
  
  [
    ['#req-area-land span',calculateLandArea],
    ['#req-area-climbing span',calculateClimbingArea],
    ['#req-area-water span',calculateWaterArea],
    ['#req-area-water-deep span',calculateDeepWaterArea]
  ].forEach(([sel,fn])=>{ const el=container.querySelector(sel); if(el) el.textContent=fn(container).toLocaleString(); });
  
  updateFoodCostsDisplay(container);
  generateSpecialNotes(container);
}

// ===== Animal Management =====
function populateAnimalSelect(container = document){
  const select=container.querySelector('#animal-select'); if(!select) return;
  const dlc=getSelectedDLCs();
  select.innerHTML='<option value="">- Select an Animal -</option>';
  
  const animalDlcNames = a=> Array.isArray(a.DLC) ? a.DLC.map(d=>d.name) : [a.DLC?.name].filter(Boolean);
  const passes = a => dlc.includes('All') || animalDlcNames(a).some(n=>dlc.includes(n));

  Object.values(animals)
    .filter(a=>a.type === "Habitat" && passes(a))
    .sort((a,b)=>a.name.localeCompare(b.name))
    .forEach(a=>select.appendChild(Object.assign(document.createElement('option'),{value:a.name,textContent:a.name})));
}

function addSelectedAnimal(container = document){
  const select=container.querySelector('#animal-select'); const name=select?.value;
  if(!name) return showMessage('Please select an animal first!',true);
  if([...container.querySelectorAll('.selected-animal h3')].some(h=>h.textContent===name)) return showMessage('This animal has already been added!',true);
  const a=getAnimal(name); if(!a) return showMessage('Animal not found!',true);
  const sid=sanitizeId(a.name);
  const isPlanner = window.location.pathname.includes('planner.html');
  
  const div=document.createElement('div'); div.className='selected-animal';
  div.innerHTML=`
    <h3>${a.name}</h3>
    <div class="icon-description" data-tooltip="${a.name}">
      <img height="40rem" src="${a.icon}" alt="${a.name}">
    </div>
    <div class="icon-description" data-tooltip="Males">
      <label><img height="30rem" src="./images/icons/icon-male.svg" alt="Males"></label>
      <input type="number" min="0" max="500" id="male-count-${sid}">
    </div>
    <div class="icon-description" data-tooltip="Females">
      <label><img height="30rem" src="./images/icons/icon-female.svg" alt="Females"></label>
      <input type="number" min="0" max="500" id="female-count-${sid}">
    </div>
    <div class="icon-description" data-tooltip="Juveniles">
      <label><img height="30rem" src="./images/icons/icon-juvenile.png" alt="Juveniles"></label>
      <input type="number" min="0" max="500" id="juvenile-count-${sid}">
    </div>
    <div class="icon-description" data-tooltip="Food Grade">
      <label><img height="30rem" src="./images/icons/icon-food.png" alt="Food"></label>
      <select id="food-grade-${sid}"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
    </div>
    ${isPlanner ? `<div class="icon-description" data-tooltip="Species Appeal">
      <img height="30rem" src="./images/icons/icon-appeal.png" alt="Species Appeal">
      <span>${a.speciesAppeal || 0}</span>
    </div>` : ''}
    ${isPlanner ? `<div class="icon-description" data-tooltip="Relation with Humans">
      <img height="30rem" src="./images/icons/icon-attitude.svg" alt="Relation with Humans">
      <span>${a.relationWithHumans || 0}</span>
    </div>` : ''}
    <div class="icon-description" data-tooltip="Delete">
      <button class="button-delete"><img height="40rem" src="./images/icons/icon-delete.svg" alt="Delete"></button>
    </div>`;
  
  div.querySelector('.button-delete').addEventListener('click',()=>{ div.remove(); refreshAllDisplays(container); });
  div.querySelectorAll('input[type="number"]').forEach(inp=>inp.addEventListener('input',()=>refreshAllDisplays(container)));
  div.querySelector(`#food-grade-${sid}`)?.addEventListener('change',()=>refreshAllDisplays(container));
  container.querySelector('#selected-animal').appendChild(div);
  select.value=''; refreshAllDisplays(container);
}

// ===== Initialization =====
function setupEventListeners(container = document){
  container.querySelector('.button-add-animal')?.addEventListener('click',()=>addSelectedAnimal(container));
  container.querySelectorAll('.button-delete').forEach(btn=>btn.addEventListener('click',e=>{
    e.target.closest('.selected-animal')?.remove(); refreshAllDisplays(container);
  }));
  container.querySelectorAll('#selected-animal input[type="number"]').forEach(inp=>inp.addEventListener('input',()=>refreshAllDisplays(container)));
  container.querySelectorAll('#selected-animal select[id^="food-grade-"]').forEach(sel=>sel.addEventListener('change',()=>refreshAllDisplays(container)));
}

function initialize(container = document){
  populateAnimalSelect(container);
  setupEventListeners(container);
  if(container === document) setupDlcSelectSync();
  refreshAllDisplays(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}

// === HABITAT PLANNER (Non-breaking extension) =================================
(function(){
  const LS_KEY = 'pzHabitats';
  let editingHabitatId = null;          // id of habitat currently being edited (unsaved or in edit mode)
  let originalSnapshot = null;          // snapshot for cancel during edit
  let idCounter = Date.now();

  function loadSavedArray(){
    try {
      return JSON.parse(localStorage.getItem(LS_KEY)) || [];
    } catch {
      return [];
    }
  }
  function saveArray(arr){
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  }

  function nextId(){ return (++idCounter).toString(); }

  function getRoot(){
    return document.querySelector('#planner-container');
  }

  function habitatNameInputTemplate(){
    return `<input type="text" class="habitat-name-input" placeholder="Habitat Name">`;
  }

  function editorTemplate(){
    return `
      <div class="planner-container">
        <details open>
        
          <summary>
            <h2>
              <img height="25rem" src="./images/icons/icon-habitat.svg" alt="">
              ${habitatNameInputTemplate()}
            </h2>
          </summary>

          <!-- ANIMAL SELECTION -->
          <section id="animal-selection">
            <div>
              <h3>
                <label for="animal-select">Animal Select:</label><br>
                <select name="animal-select" id="animal-select"></select>
                <button class="button-add-animal">Add</button>
              </h3>
            </div>
            <div id="selected-animal"></div>
          </section>

          <!-- HABITAT REQUIREMENTS -->
          <section id="habitat-requirements">
            <h3>Habitat Requirements:</h3>
            <div id="special-notes">Please select an animal to see its habitat requirements...</div>
            <br>
            <div id="range-temperature" class="icon-description" data-tooltip="Temperature">
              <img height="30rem" src="./images/icons/icon-temperature.jpg" alt="Temperature">
              <span></span> °C
            </div>
            <div id="range-plant-coverage" class="icon-description" data-tooltip="Plant Coverage">
              <img height="30rem" src="./images/icons/icon-plants.jpg" alt="Plant Coverage">
              <span></span>
            </div>
            <br>
            <div id="req-continents"><h3>Continents: <span></span></h3></div>
              <div id="req-biomes"><h3>Biomes: <span></span></h3></div>
            <br>
            <div id="req-barrier" class="icon-description" data-tooltip="Barrier">
              <h3>Barrier:
                <img height="30rem" src="./images/icons/icon-barrier.jpg" alt="Barrier">
                <span></span>
              </h3>
            </div>
            <br>
            <h3>Minimum Area:</h3>
            <div id="req-area-land" class="icon-description" data-tooltip="Land">
              <img height="30rem" src="./images/icons/icon-area-land.jpg" alt="Land">
              <span></span> m²
            </div>
            <div id="req-area-climbing" class="icon-description" data-tooltip="Climbing">
              <img height="30rem" src="./images/icons/icon-area-climbing.jpg" alt="Climbing">
              <span></span> m²
            </div>
              <div id="req-area-water" class="icon-description" data-tooltip="Water">
                <img height="30rem" src="./images/icons/icon-area-water.jpg" alt="Water">
                <span></span> m²
              </div>
            <div id="req-area-water-deep" class="icon-description" data-tooltip="Deep Water">
              <img height="30rem" src="./images/icons/icon-area-deep-water.jpg" alt="Deep Water">
              <span></span> m²
            </div>
            <br>
            <h3>TERRAIN:</h3>
            <div id="range-grass-short" class="icon-description" data-tooltip="Grass (Short)">
              <img height="30rem" src="./images/icons/icon-terrain-grass-short.jpg" alt="Grass (Short)">
              <span></span>
            </div>
            <div id="range-grass-long" class="icon-description" data-tooltip="Grass (Long)">
              <img height="30rem" src="./images/icons/icon-terrain-grass-long.jpg" alt="Grass (Long)">
              <span></span>
            </div>
            <div id="range-soil" class="icon-description" data-tooltip="Soil">
              <img height="30rem" src="./images/icons/icon-terrain-soil.jpg" alt="Soil">
              <span></span>
            </div>
            <div id="range-rock" class="icon-description" data-tooltip="Rock">
              <img height="30rem" src="./images/icons/icon-terrain-rock.jpg" alt="Rock">
              <span></span>
            </div>
            <div id="range-sand" class="icon-description" data-tooltip="Sand">
              <img height="30rem" src="./images/icons/icon-terrain-sand.jpg" alt="Sand">
              <span></span>
            </div>
            <div id="range-snow" class="icon-description" data-tooltip="Snow">
              <img height="30rem" src="./images/icons/icon-terrain-snow.jpg" alt="Snow">
              <span></span>
            </div>
            <br>
            <div id="food-costs">
              <img height="30rem" src="./images/icons/icon-food.png" alt="Food Costs">
              <b>Food costs per feed: $<span></span></b>
            </div>
            <br>
          </section>

          <div class="planner-buttons">
            <span class="icon-description" data-tooltip="Save Habitat">
              <button class="button-planner-save"><img height="50rem" src="./images/icons/icon-planner-save.svg" alt="Save"></button>
            </span>
            <span class="icon-description" data-tooltip="Cancel">
              <button class="button-planner-cancel"><img height="50rem" src="./images/icons/icon-planner-cancel.svg" alt="Cancel"></button>
            </span>
            <span class="icon-description" data-tooltip="Edit Habitat" style="display:none;">
              <button class="button-planner-edit"><img height="50rem" src="./images/icons/icon-planner-edit.svg" alt="Edit"></button>
            </span>
            <span class="icon-description" data-tooltip="Delete Habitat" style="display:none;">
              <button class="button-planner-delete"><img height="50rem" src="./images/icons/icon-planner-delete.svg" alt="Delete"></button>
            </span>
          </div>
        </details>
      </div>
    `;
  }

  function buildStaticMarkup(h){
    // Rebuild using same structural layout as editorTemplate (no inputs/selects are editable)
    // Use per-habitat unique IDs to avoid clashes with the live editor.
    const pid = h.id;
    const uid = id => `${id}-${pid}`;

    const animalCards = h.animals.map(a=>{
      const sid = sanitizeId(a.name);
      const animal = getAnimal(a.name);
      return `
        <div class="selected-animal static">
          <h3>${a.name}</h3>
          <div class="icon-description" data-tooltip="${a.name}">
            <img height="40rem" src="${animal?.icon || ''}" alt="${a.name}">
          </div>
          <div class="icon-description" data-tooltip="Males">
            <label><img height="30rem" src="./images/icons/icon-male.svg" alt="Males"></label>
            <input type="number" disabled value="${a.males}" id="male-count-${sid}-${pid}">
          </div>
          <div class="icon-description" data-tooltip="Females">
            <label><img height="30rem" src="./images/icons/icon-female.svg" alt="Females"></label>
            <input type="number" disabled value="${a.females}" id="female-count-${sid}-${pid}">
          </div>
          <div class="icon-description" data-tooltip="Juveniles">
            <label><img height="30rem" src="./images/icons/icon-juvenile.png" alt="Juveniles"></label>
            <input type="number" disabled value="${a.juveniles}" id="juvenile-count-${sid}-${pid}">
          </div>
          <div class="icon-description" data-tooltip="Food Grade">
            <label><img height="30rem" src="./images/icons/icon-food.png" alt="Food"></label>
            <select disabled id="food-grade-${sid}-${pid}">
              <option value="1" ${a.foodGrade==='1'?'selected':''}>1</option>
              <option value="2" ${a.foodGrade==='2'?'selected':''}>2</option>
              <option value="3" ${a.foodGrade==='3'?'selected':''}>3</option>
            </select>
          </div>         
          <div class="icon-description" data-tooltip="Species Appeal">
            <img height="30rem" src="./images/icons/icon-appeal.png" alt="Species Appeal">
            <span>${animal?.speciesAppeal || 0}</span>
          </div>
            <div class="icon-description" data-tooltip="Relation with Humans">
            <img height="30rem" src="./images/icons/icon-attitude.svg" alt="Relation with Humans">
            <span>${animal?.relationWithHumans || 0}</span>
          </div>
        </div>
      `;
    }).join('') || '<div class="selected-animal static"><i>No animals selected.</i></div>';

    const terrain = h.outputs.terrain || {};
    const continentsHTML = h.outputs.continentsHTML || '';
    const biomesHTML = h.outputs.biomesHTML || '';

    return `
      <div class="planner-container">
        <details>
          <summary>
            <h2>
              <img height="25rem" src="./images/icons/icon-habitat.svg" alt="">
              ${escapeHtml(h.name)}
            </h2>
          </summary>

          <!-- ANIMAL SELECTION -->
          <section id="animal-selection" class="animal-selection-static">
            <div>
              <h3>
                <label>Animal Select:</label><br>
                <select disabled><option>- Edit Habitat -</option></select>
                <button class="button-add-animal" disabled>Add</button>
              </h3>
            </div>
            <div id="selected-animal">${animalCards}</div>
          </section>

          <!-- HABITAT REQUIREMENTS (static mirror) -->
          <section id="habitat-requirements" class="habitat-requirements-static">
            <h3>Habitat Requirements:</h3>
            <div id="special-notes">${h.outputs.notesHTML || ''}</div>
            <br>
            <div id="range-temperature" class="icon-description" data-tooltip="Temperature">
              <img height="30rem" src="./images/icons/icon-temperature.jpg" alt="Temperature">
              <span>${h.outputs.temperatureRange || ''}</span> °C
            </div>
            <div id="range-plant-coverage" class="icon-description" data-tooltip="Plant Coverage">
              <img height="30rem" src="./images/icons/icon-plants.jpg" alt="Plant Coverage">
              <span>${h.outputs.plantCoverage || ''}</span>
            </div>
            <br>
            <div id="req-continents"><h3>Continents: <span>${continentsHTML}</span></h3></div>
            <div id="req-biomes"><h3>Biomes: <span>${biomesHTML}</span></h3></div>
            <br>
            <div id="req-barrier" class="icon-description" data-tooltip="Barrier">
              <h3>Barrier:
                <img height="30rem" src="./images/icons/icon-barrier.jpg" alt="Barrier">
                <span>${h.outputs.barrier || ''}</span>
              </h3>
            </div>
            <br>
            <h3>Minimum Area:</h3>
            <div id="req-area-land" class="icon-description" data-tooltip="Land">
              <img height="30rem" src="./images/icons/icon-area-land.jpg" alt="Land">
              <span>${h.outputs.landArea || ''}</span> m²
            </div>
            <div id="req-area-climbing" class="icon-description" data-tooltip="Climbing">
              <img height="30rem" src="./images/icons/icon-area-climbing.jpg" alt="Climbing">
              <span>${h.outputs.climbingArea || ''}</span> m²
            </div>
            <div id="req-area-water" class="icon-description" data-tooltip="Water">
              <img height="30rem" src="./images/icons/icon-area-water.jpg" alt="Water">
              <span>${h.outputs.waterArea || ''}</span> m²
            </div>
            <div id="req-area-water-deep" class="icon-description" data-tooltip="Deep Water">
              <img height="30rem" src="./images/icons/icon-area-deep-water.jpg" alt="Deep Water">
              <span>${h.outputs.deepWaterArea || ''}</span> m²
            </div>
            <br>
            <h3>TERRAIN:</h3>
            <div id="range-grass-short" class="icon-description" data-tooltip="Grass (Short)">
              <img height="30rem" src="./images/icons/icon-terrain-grass-short.jpg" alt="Grass (Short)">
              <span>${terrain.shortGrass || ''}</span>
            </div>
            <div id="range-grass-long" class="icon-description" data-tooltip="Grass (Long)">
              <img height="30rem" src="./images/icons/icon-terrain-grass-long.jpg" alt="Grass (Long)">
              <span>${terrain.longGrass || ''}</span>
            </div>
            <div id="range-soil" class="icon-description" data-tooltip="Soil">
              <img height="30rem" src="./images/icons/icon-terrain-soil.jpg" alt="Soil">
              <span>${terrain.soilRange || ''}</span>
            </div>
            <div id="range-rock" class="icon-description" data-tooltip="Rock">
              <img height="30rem" src="./images/icons/icon-terrain-rock.jpg" alt="Rock">
              <span>${terrain.rockRange || ''}</span>
            </div>
            <div id="range-sand" class="icon-description" data-tooltip="Sand">
              <img height="30rem" src="./images/icons/icon-terrain-sand.jpg" alt="Sand">
              <span>${terrain.sandRange || ''}</span>
            </div>
            <div id="range-snow" class="icon-description" data-tooltip="Snow">
              <img height="30rem" src="./images/icons/icon-terrain-snow.jpg" alt="Snow">
              <span>${terrain.snowRange || ''}</span>
            </div>
            <br>
            <div id="food-costs">
              <img height="30rem" src="./images/icons/icon-food.png" alt="Food Costs">
              <b>Food costs per feed: $<span>${h.outputs.foodCosts || '0.00'}</span></b>
            </div>
            <br>
          </section>

          <div class="planner-buttons">
            <span class="icon-description" data-tooltip="Save Habitat" style="display:none;">
              <button class="button-planner-save" disabled><img height="50rem" src="./images/icons/icon-planner-save.svg" alt="Save"></button>
            </span>
            <span class="icon-description" data-tooltip="Cancel" style="display:none;">
              <button class="button-planner-cancel" disabled><img height="50rem" src="./images/icons/icon-planner-cancel.svg" alt="Cancel"></button>
            </span>
            <span class="icon-description" data-tooltip="Edit Habitat">
              <button class="button-planner-edit"><img height="50rem" src="./images/icons/icon-planner-edit.svg" alt="Edit"></button>
            </span>
            <span class="icon-description" data-tooltip="Delete Habitat">
              <button class="button-planner-delete"><img height="50rem" src="./images/icons/icon-planner-delete.svg" alt="Delete"></button>
            </span>
          </div>
        </details>
      </div>
    `;
  }

  function escapeHtml(str){
    return (str||'').replace(/[<>&"'`]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;','`':'&#96;'}[c]));
  }

  function createEditor(){
    if(editingHabitatId){
      showMessage('Finish or cancel current habitat first.', true);
      return;
    }
    const root = getRoot();
    if(!root) return;
    const wrapper = document.createElement('div');
    const id = nextId();
    wrapper.className = 'habitat-instance editing';
    wrapper.dataset.habitatId = id;
    wrapper.innerHTML = editorTemplate();

    // Place the new planner at the top (before any existing habitats)
    if (root.firstChild) {
      root.insertBefore(wrapper, root.firstChild);
    } else {
      root.appendChild(wrapper);
    }

    editingHabitatId = id;
    originalSnapshot = null;
    initialize(wrapper); // Pass wrapper as container instead of using global document
    attachPlannerButtons(wrapper);
  }

  function collectCurrentAnimals(container = document){
    return Array.from(container.querySelectorAll('.selected-animal')).map(div=>{
      const name = div.querySelector('h3')?.textContent?.trim();
      if(!name) return null;
      const sid = name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();
      return {
        name,
        males: parseInt(div.querySelector(`#male-count-${sid}`)?.value)||0,
        females: parseInt(div.querySelector(`#female-count-${sid}`)?.value)||0,
        juveniles: parseInt(div.querySelector(`#juvenile-count-${sid}`)?.value)||0,
        foodGrade: (div.querySelector(`#food-grade-${sid}`)?.value)||'1'
      };
    }).filter(Boolean);
  }

  function snapshotOutputs(container = document){
    const getText = sel => {
      const el = container.querySelector(sel);
      return el ? el.textContent.trim() : '';
    };
    const terrain = {
      shortGrass: getText('#range-grass-short span'),
      longGrass:  getText('#range-grass-long span'),
      soilRange:  getText('#range-soil span'),
      rockRange:  getText('#range-rock span'),
      sandRange:  getText('#range-sand span'),
      snowRange:  getText('#range-snow span')
    };
    return {
      temperatureRange: getText('#range-temperature span'),
      plantCoverage: getText('#range-plant-coverage span'),
      continentsHTML: (container.querySelector('#req-continents span')?.innerHTML)||'',
      biomesHTML: (container.querySelector('#req-biomes span')?.innerHTML)||'',
      barrier: getText('#req-barrier span'),
      landArea: getText('#req-area-land span'),
      climbingArea: getText('#req-area-climbing span'),
      waterArea: getText('#req-area-water span'),
      deepWaterArea: getText('#req-area-water-deep span'),
      terrain,
      foodCosts: getText('#food-costs span'),
      notesHTML: (container.querySelector('#special-notes')?.innerHTML)||''
    };
  }

  function saveHabitat(wrapper){
    const nameInput = wrapper.querySelector('.habitat-name-input');
    const name = (nameInput?.value?.trim()) || 'Habitat';
    const animals = collectCurrentAnimals(wrapper); // Pass wrapper as container
    const outputs = snapshotOutputs(wrapper); // Pass wrapper as container
    const id = wrapper.dataset.habitatId;

    const arr = loadSavedArray();
    const existingIdx = arr.findIndex(h=>h.id===id);
    const data = {id, name, animals, outputs, ts: Date.now()};
    
    if(existingIdx >= 0) {
      // Update existing habitat
      arr[existingIdx] = data;
    } else {
      // Add new habitat at the beginning (top) of the array
      arr.unshift(data);
    }
    saveArray(arr);

    // Replace editor with static markup
    wrapper.classList.remove('editing');
    wrapper.innerHTML = buildStaticMarkup(data);
    editingHabitatId = null;
    originalSnapshot = null;
    attachPlannerButtons(wrapper);
    showMessage('Habitat saved.');
    
    // If this was a new habitat, move it to the top of the DOM
    if(existingIdx < 0) {
      const root = getRoot();
      if(root && root.firstChild !== wrapper) {
        root.insertBefore(wrapper, root.firstChild);
      }
    }
  }

  function restoreEditorFromSaved(wrapper, habitat){
    // Build editor then populate
    wrapper.classList.add('editing');
    wrapper.innerHTML = editorTemplate();
    const input = wrapper.querySelector('.habitat-name-input');
    if(input) input.value = habitat.name;
    editingHabitatId = habitat.id;
    originalSnapshot = JSON.parse(JSON.stringify(habitat)); // deep copy
    initialize(wrapper); // Pass wrapper as container instead of using global document
    // Populate animals
    habitat.animals.forEach(a=>{
      const select = wrapper.querySelector('#animal-select'); // Use wrapper-scoped selector
      if(select){
        // Add animal then set counts
        select.value = a.name;
        // Reuse existing add routine with wrapper as container
        addSelectedAnimal(wrapper);
        // Fill counts
        const sid = a.name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();
        const m = wrapper.querySelector(`#male-count-${sid}`); if(m) m.value = a.males;
        const f = wrapper.querySelector(`#female-count-${sid}`); if(f) f.value = a.females;
        const j = wrapper.querySelector(`#juvenile-count-${sid}`); if(j) j.value = a.juveniles;
        const fg = wrapper.querySelector(`#food-grade-${sid}`); if(fg) fg.value = a.foodGrade;
      }
    });
    refreshAllDisplays(wrapper);
    attachPlannerButtons(wrapper);
  }

  function cancelHabitat(wrapper){
    const isNew = !originalSnapshot;
    if(isNew){
      // Remove the entire editor
      wrapper.remove();
      editingHabitatId = null;
      showMessage('Creation cancelled.');
      return;
    }
    // Revert to previous snapshot
    const snap = originalSnapshot;
    wrapper.classList.remove('editing');
    wrapper.innerHTML = buildStaticMarkup(snap);
    editingHabitatId = null;
    originalSnapshot = null;
    attachPlannerButtons(wrapper);
    showMessage('Changes cancelled.');
  }

  function editHabitat(wrapper){
    if(editingHabitatId){
      showMessage('Finish current edit first.', true);
      return;
    }
    const id = wrapper.dataset.habitatId;
    const arr = loadSavedArray();
    const h = arr.find(x=>x.id===id);
    if(!h){
      showMessage('Habitat not found.', true);
      return;
    }
    restoreEditorFromSaved(wrapper, h);
  }

  function requestDelete(wrapper){
    const id = wrapper.dataset.habitatId;
    const modal = document.createElement('div');
    modal.style.position='fixed';
    modal.style.inset='0';
    modal.style.display='flex';
    modal.style.alignItems='center';
    modal.style.justifyContent='center';
    modal.style.background='rgba(0,0,0,0.55)';
    modal.style.zIndex='2000';
    modal.innerHTML = `
      <div class="delete-habitat">
        <p>Are you sure you would like to delete this habitat?</p>
        <div class="delete-habitat-buttons">
          <button class="del-confirm">Delete</button>
          <button class="del-cancel">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.del-cancel').onclick = ()=>modal.remove();
    modal.querySelector('.del-confirm').onclick = ()=>{
      const arr = loadSavedArray().filter(h=>h.id!==id);
      saveArray(arr);
      if(editingHabitatId === id){ editingHabitatId=null; originalSnapshot=null; }
      wrapper.remove();
      modal.remove();
      showMessage('Habitat deleted.');
    };
  }

  function attachPlannerButtons(wrapper){
    const saveBtn   = wrapper.querySelector('.button-planner-save');
    const cancelBtn = wrapper.querySelector('.button-planner-cancel');
    const editBtn   = wrapper.querySelector('.button-planner-edit');
    const delBtn    = wrapper.querySelector('.button-planner-delete');

    if(saveBtn) saveBtn.onclick = ()=>saveHabitat(wrapper);
    if(cancelBtn) cancelBtn.onclick = ()=>cancelHabitat(wrapper);
    if(editBtn) editBtn.onclick = ()=>editHabitat(wrapper);
    if(delBtn) delBtn.onclick = ()=>requestDelete(wrapper);
  }

  function renderSavedHabitats(){
    const root = getRoot();
    if(!root) return;
    root.innerHTML = ''; // clear existing static list (no active editor at load)
    const arr = loadSavedArray();
    // Render in order (most recent first since we use unshift in save)
    arr.forEach(h=>{
      const div = document.createElement('div');
      div.className='habitat-instance';
      div.dataset.habitatId = h.id;
      div.innerHTML = buildStaticMarkup(h);
      root.appendChild(div); // appendChild maintains the array order
      attachPlannerButtons(div);
    });
  }

  function handlePlanHabitat(){
    if(editingHabitatId){
      showMessage('Finish current habitat first.', true);
      return;
    }
    createEditor();
  }

  function init(){
    const planBtn = document.querySelector('.button-plan-habitat');
    planBtn && planBtn.addEventListener('click', handlePlanHabitat);
    renderSavedHabitats();
  }

  // Public (in case future use)
  window.HabitatPlanner = { init };

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();