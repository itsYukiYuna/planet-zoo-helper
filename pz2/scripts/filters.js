const DLC = {
    basegame: {
        name: "Base Game",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3219030/a5131aa4b84d04a55e3b9c561d7c886cc22bbe1c/header.jpg?t=1786347866"
    },
    deluxe: {
        name: "Deluxe Upgrade Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4515760/563edffd858af4e601182fd827771654ca7caf96/header.jpg?t=1791978911"
    } 
};

const form = {
    individual: {
        type: "Individual",
        icon: "/pz2/images/icons/icons_form_individual.png"
    },
    collective: {
        type: "Collectives",
        icon: "/pz2/images/icons/icons_form_collective.png"
    }
};

const types = {
    terrestrial: {
        type: "Terrestrial",
        icon: "/pz2/images/icons/icons_types_terrestrial.png"
    },
    avian: {
        type: "Avian",
        icon: "/pz2/images/icons/icons_types_avian.png"
    },
    aquatic: {
        type: "Aquatic",
        icon: "/pz2/images/icons/icons_types_aquatic.png"
    }
};

const enclosures = {   
    habitat: {
        type: "Habitat",
        icon: "/pz2/images/icons/icons_enclosures_habitat.png"
    },
    exhibit: {
        type: "Exhibit",
        icon: "/pz2/images/icons/icons_enclosures_exhibit.png"
    },
};

const enclosureTypes = {
    habitat: "Habitat",
    habitatClimbProof: "Climb-Proof Habitat",
    habitatRoofed: "Roofed Habitat",
    aquarium: "Aquarium",
    exhibitCylinder: "Cylinder Exhibit",
    exhibitBox: "Box Exhibit",
    exhibitWalkthrough: "Walkthrough Exhibit"
};

const cohabitationOptions = {
    none: "None",
    nonPredatory: "Any non-predatory species",
    selectSpecies: "Select Species",
};

const conservation = {
    extinct: {
        status: "Extinct",
        icon: "/pz2/images/icons/icons_conservation_extinct.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_extinct"
    },
    extinctInTheWild: {
        status: "Extinct in the Wild",
        icon: "/pz2/images/icons/icons_conservation_extinctInTheWild.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_extinctInTheWild"
    },
    criticallyEndangered: {
        status: "Critically Endangered",
        icon: "/pz2/images/icons/icons_conservation_criticallyEndangered.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_criticallyEndangered.png"
    },
    endangered: {
        status: "Endangered",
        icon: "/pz2/images/icons/icons_conservation_endangered.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_endangered.png"
    },
    vulnerable: {
        status: "Vulnerable",
        icon: "/pz2/images/icons/icons_conservation_vulnerable.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_vulnerable.png"
    },
    nearThreatened: {
        status: "Near Threatened",
        icon: "/pz2/images/icons/icons_conservation_nearThreatened.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_nearThreatened.png"
    },
    leastConcern: {
        status: "Least Concern",
        icon: "/pz2/images/icons/icons_conservation_leastConcern.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_leastConcern.png"
    },
    domesticated: {
        status: "Domesticated",
        icon: "/pz2/images/icons/icons_conservation_domesticated.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_domesticated.png"
    },
    dataDeficient: {
        status: "Data Deficient",
        icon: "/pz2/images/icons/icons_conservation_dataDeficient.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_dataDeficient.png"
    },
    notEvaluated: {
        status: "Not Evaluated",
        icon: "/pz2/images/icons/icons_conservation_notEvaluated.png",
        iconFull: "/pz2/images/icons/icons_conservation_full_notEvaluated.png"
    }
};

const nativeRange = {    
    africa: {
        name: "Africa",
        icon: "/pz2/images/icons/icons_nativeRange_africa.webp"
    },
    europe: {
        name: "Europe",
        icon: "/pz2/images/icons/icons_nativeRange_europe.webp"
    },
    asia: {
        name: "Asia",
        icon: "/pz2/images/icons/icons_nativeRange_asia.webp"
    },
    northAmerica: {
        name: "North America",
        icon: "/pz2/images/icons/icons_nativeRange_northAmerica.webp"
    },
    southAmerica: {
        name: "South America",
        icon: "/pz2/images/icons/icons_nativeRange_southAmerica.webp"
    },
    oceania: {
        name: "Oceania",
        icon: "/pz2/images/icons/icons_nativeRange_oceania.webp"
    },
    antarctica: {
        name: "Antarctica",
        icon: "/pz2/images/icons/icons_nativeRange_antarctica.webp"
    },
    atlanticOcean: {
        name: "Atlantic Ocean",
        icon: "/pz2/images/icons/icons_nativeRange_atlanticOcean.png"
    },
    indianOcean: {
        name: "Indian Ocean",
        icon: "/pz2/images/icons/icons_nativeRange_indianOcean.png"
    },
    pacificOcean: {
        name: "Pacific Ocean",
        icon: "/pz2/images/icons/icons_nativeRange_pacificOcean.png"
    },
    arcticOcean: {
        name: "Arctic Ocean",
        icon: "/pz2/images/icons/icons_nativeRange_arcticOcean.png"
    },
    southernOcean: {
        name: "Southern Ocean",
        icon: "/pz2/images/icons/icons_nativeRange_southernOcean.png"
    }  
};

const biomes = {
    desert: {
        name: "Desert",
        icon: "/pz2/images/icons/icons_biomes_desert.svg"
    },
    grassland: {
        name: "Grassland",
        icon: "/pz2/images/icons/icons_biomes_grassland.svg"
    },
    tropical: {
        name: "Tropical",
        icon: "/pz2/images/icons/icons_biomes_tropical.svg"
    },
    temperate: {
        name: "Temperate",
        icon: "/pz2/images/icons/icons_biomes_temperate.svg"
    },
    taiga: {
        name: "Taiga",
        icon: "/pz2/images/icons/icons_biomes_taiga.svg"
    },
    tundra: {
        name: "Tundra",
        icon: "/pz2/images/icons/icons_biomes_tundra.svg"
    },
    wetlands: {
        name: "Wetlands",
        icon: "/pz2/images/icons/icons_biomes_wetlands.svg"
    },
    lakesRivers: {
        name: "Lakes & Rivers",
        icon: "/pz2/images/icons/icons_biomes_lakesRivers.svg"
    },
    mangrove: {
        name: "Mangrove",
        icon: "/pz2/images/icons/icons_biomes_mangrove.svg"
    },
    estuarine: {
        name: "Estuarine",
        icon: "/pz2/images/icons/icons_biomes_estuarine.svg"
    },
    openSea: {
        name: "Open Sea",
        icon: "/pz2/images/icons/icons_biomes_openSea.svg"
    },
    reef: {
        name: "Reef",
        icon: "/pz2/images/icons/icons_biomes_reef.svg"
    }
};

const wildlifeReserves = {
    greatRiftValleyReserve: {
        name: "Great Rift Valley Reserve",
        continent: "Africa",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_wildlifeReserves_greatRiftValleyReserve.png"
    },
    polandReserve: {
        name: "Poland Reserve",
        continent: "Europe",
        biome: "Temperate",
        icon: "/pz2/images/icons/icons_wildlifeReserves_polandReserve.png"
    },
    scottishHighlands: {
        name: "Scottish Highlands",
        continent: "Europe",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_wildlifeReserves_scottishHighlands.png"
    },
    sumatraReserve: {
        name: "Sumatra Reserve",
        continent: "Asia",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_wildlifeReserves_sumatraReserve.png"
    },
    swedenReserve: {
        name: "Sweden Reserve",
        continent: "Europe",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_wildlifeReserves_swedenReserve.png"
    },
    tanzaniaReserve: {
        name: "Tanzania Reserve",
        continent: "Africa",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_wildlifeReserves_tanzaniaReserve.png"
    }
};

const ecosystems = {
    peatland: {
        name: "Peatland",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    mixedLowlandForest: {
        name: "Mixed Lowland Forest",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    wateringHole: {
        name: "Watering Hole",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    moorland: {
        name: "Moorland",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    lakeLoch: {
        name: "Lake (Loch)",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_lakeLoch.png"
    },
    riverine: {
        name: "Riverine",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_riverine.png"
    },
    river: {
        name: "River",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    limestoneHills: {
        name: "Limestone Hills",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    degradedLand: {
        name: "Degraded Land",
        biome: "",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    lowlandMarsh: {
        name: "Lowland Marsh",
        biome: "Temperate",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    openCanopyForest: {
        name: "Open Canopy Forest",
        biome: "Temperate",
        icon: "/pz2/images/icons/icons_ecosystems_openCanopyForest.png"
    },
    shrubland: {
        name: "Shrubland",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    montaneForestBoreal: {
        name: "Montane Forest (Boreal)",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    lakeTaiga: {
        name: "Lake",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_lakeTaiga.png"
    },
    denseForest: {
        name: "Dense Forest",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    montaneRainforest: {
        name: "Montane Rainforest",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    lowlandRainforest: {
        name: "Lowland Rainforest",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_lowlandRainforest.png"
    },
    saltmarsh: {
        name: "Saltmarsh",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    forestSwamp: {
        name: "Forest Swamp",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    pastures: {
        name: "Pastures",
        biome: "Temperate",
        icon: "/pz2/images/icons/icons_ecosystems_pastures.png"
    },
    grasslandTropical: {
        name: "Grassland",
        biome: "Tropical",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    rockyHills: {
        name: "Rocky Hills",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    closedCanopyForest: {
        name: "Closed Canopy Forest",
        biome: "Temperate",
        icon: "/pz2/images/icons/icons_ecosystems_closedCanopyForest.png"
    },
    savannah: {
        name: "Savannah",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_savannah.png"
    },
    // moorland2: {
    //     name: "Second Moorland error?",
    //     biome: "",
    //     icon: "/pz2/images/icons/icons_ecosystems_"
    // },
    lakeTemperate: {
        name: "Lake",
        biome: "Temperate",
        icon: "/pz2/images/icons/icons_ecosystems_lakeTemperate.png"
    },
    rockyPeaks: {
        name: "Rocky Peaks",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    wetland: {
        name: "Wetland",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_wetland.png"
    },
    swamp: {
        name: "Swamp",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    fenWetland: {
        name: "Fen Wetland",
        biome: "",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    montaneForest: {
        name: "Montane Forest",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    grassland: {
        name: "Grassland",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_grassland.png"
    },
    floodedGrassland: {
        name: "Flooded Grassland",
        biome: "Taiga",
        icon: "/pz2/images/icons/icons_ecosystems_"
    },
    sandyPlain: {
        name: "Sandy Plain",
        biome: "Grassland",
        icon: "/pz2/images/icons/icons_ecosystems_"
    }
};

const speciesRoles = {
    aerialForagers: "Aerial Foragers",
    aerialPollinators: "Aerial Pollinators",
    aerialSeedDispersers: "Aerial Seed Dispersers",
    grazers: "Grazers",
    highBrowsers: "High Browsers",
    largePrey: "Large Prey",
    lowBrowsers: "Low Browsers",
    mediumPrey: "Medium Prey",
    mediumUnderwaterPrey: "Medium Underwater Prey",
    predators: "Predators",
    scavengers: "Scavengers",
    smallPrey: "Small Prey",
    smallUnderwaterPrey: "Small Underwater Prey",
    soilRooters: "Soil Rooters",
    terrestrialForagers: "Terrestrial Foragers",
    terrestrialPollinators: "Terrestrial Pollinators",
    terrestrialSeedDispersers: "Terrestrial Seed Dispersers",
    terrestrialSporeDispersers: "Terrestrial Spore Dispersers",
    underwaterGrazers: "Underwater Grazers",
    underwaterPredators: "Underwater Predators",
    wetlandEngineers: "Wetland Engineers",
};

const releaseGroups = {
    mixedGroup: {
        type: "Mixed Group",
        icon: "/pz2/images/icons/icons_releaseGroups_mixedGroup.svg"
    },
    breedingPartners: {
        type: "Breeding Partners",
        icon: "/pz2/images/icons/icons_releaseGroups_breedingPartners.svg"
    },
    maleGroup: {
        type: "Male Group",
        icon: "/pz2/images/icons/icons_releaseGroups_maleGroup.svg"
    },
    femaleGroup: {
        type: "Female Group",
        icon: "/pz2/images/icons/icons_releaseGroups_femaleGroup.svg"
    },  
    solitaryMale: {
        type: "Solitary Male",
        icon: "/pz2/images/icons/icons_releaseGroups_solitaryMale.svg"
    },
    solitaryFemale: {
        type: "Solitary Female",
        icon: "/pz2/images/icons/icons_releaseGroups_solitaryFemale.svg"
    }
};

const temperament = {
    shy: "Shy",
    neutral: "Neutral",
    confident: "Confident"
};

const alphaDominance = {
    none: {
        type: "None",
        description: "No set alphas or leaders"
    },
    alphaPair: {
        type: "Alpha Pair",
        description: "Other adults can't mate"
    },
    alphaMale: {
        type: "Alpha Male",
        description: "Other males can't mate"
    },
    alphaFemale: {
        type: "Alpha Female",
        description: "Other females can't mate"
    },
    leaderPair: {
        type: "Alpha Pair Leaders",
        description: "Pair leads group"
    },
    leaderMale: {
        type: "Male Alpha Leader",
        description: "Male leads group"
    },
    leaderFemale: {
        type: "Female Alpha Leader",
        description: "Female leads group"
    }
};

const offspringDispersal = {
    none: {
        type: "None",
        description: "No offspring become 'Outsiders'."
    },
    maleOffspring: {
        type: "Male offspring",
        description: "Male offspring become 'Outsiders'."
    },
    femaleOffspring: {
        type: "Female offspring",
        description: "Female offspring become 'Outsiders'."
    },
    allOffspring: {
        type: "All offspring",
        description: "All offspring become 'Outsiders'."
    },
};

const matingSystem = {
    monogamous: {
        type: "Monogamous",
        description: "The male and female pairs become exclusive bonded mates."
    },
    polygynous: {
        type: "Polygynous",
        description: "Females form bonds with males that may mate with multiple other partners."
    },
    polyandrous: {
        type: "Polyandrous",
        description: "Males form bonds with females that may mate with multiple other partners."
    },
    promiscuous: {
        type: "Promiscuous",
        description: "There is no mating bond between males and females."
    },
    polygamous: {
        type: "Polygamous",
        description: "Both males and females can have multiple bonded partners."
    }
};

const matingSeason = {
    aseasonal: "Aseasonal",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
};

const reproductionDifficulty = {
    veryEasy: "Very Easy",
    easy: "Easy",
    average: "Average",
    difficult: "Difficult",
    veryDifficult: "Very Difficult"
};

const salinity = {
    freshwater: {
        type: "Freshwater",
        description: "Water with low salt content, as found in rivers."
    },
    brackish: {
        type: "Brackish",
        description: "Water with medium salt content, as found in estuaries."
    },
    saltwater: {
        type: "Saltwater",
        description: "Water with high salt content, as found in oceans."
    }
};

const feeders = {
    arborealFeedingPlatform: {
        name: "Arboreal Feeding Platform",
        icon: "/pz2/images/icons/icons_feeders_arborealFeedingPlatform.png"
    }, 
    birdFeeder: {
        name: "Bird Feeder",
        icon: "/pz2/images/icons/icons_feeders_"
    }, 
    foodBowl: {
        name: "Food Bowl",
        icon: "/pz2/images/icons/icons_feeders_"
    }, 
    foodCage: {
        name: "Food Cage",
        icon: "/pz2/images/icons/icons_feeders_"
    }, 
    foodTray: {
        name: "Food Tray",
        icon: "/pz2/images/icons/icons_feeders_foodTray.png"
    }, 
    foodTrough: {
        name: "Food Trough",
        icon: "/pz2/images/icons/icons_feeders_foodTrough.png"
    }, 
    groundWaterFountain: {
        name: "Ground Water Fountain",
        icon: "/pz2/images/icons/icons_feeders_groundWaterFountain.png"
    }, 
    nectarFeeder: {
        name: "Nectar Feeder",
        icon: "/pz2/images/icons/icons_feeders_"
    }, 
    wallFeeder: {
        name: "Wall Feeder",
        icon: "/pz2/images/icons/icons_feeders_wallFeeder.png"
    }, 
    waterPipe: {
        name: "Water Pipe",
        icon: "/pz2/images/icons/icons_feeders_waterPipe.png"
    }, 
    aquaticFeederFish: {
        name: "Aquatic Feeder - Fish",
        icon: "/pz2/images/icons/icons_feeders_aquaticFeederFish.png"
    }, 
    aquaticFeederFlakes: {
        name: "Aquatic Feeder - Flakes",
        icon: "/pz2/images/icons/icons_feeders_aquaticFeederFlakes.png"
    }, 
    aquaticFeederPlant: {
        name: "Aquatic Feeder - Plant",
        icon: "/pz2/images/icons/icons_feeders_"
    }, 
    veggieMatFeeder: {
        name: "Veggie Mat Feeder",
        icon: "/pz2/images/icons/icons_feeders_"
    } 
};

const shelters = { 
    habitatBedding: {
        name: "Habitat Bedding - All Sizes",
        type: "Bedding",
        icon: "/pz2/images/icons/icons_shelters_habitatBedding.png"
    }, 
    habitatBeddingLeaves: {
        name: "Habitat Bedding - Leaves All Sizes",
        type: "Bedding",
        icon: "/pz2/images/icons/icons_shelters_habitatBeddingLeaves.png"
    }, 
    animalBurrow: {
        name: "Animal Burrow",
        type: "Shelter",
        icon: "/pz2/images/icons/icons_shelters_animalBurrow.png"
    }, 
    animalBurrowSmall: {
        name: "Animal Burrow - Small",
        type: "Shelter",
        icon: "/pz2/images/icons/icons_shelters_animalBurrowSmall.png"
    }, 
    jettyBeddingPlatform: {
        name: "Jetty Bedding - Platform",
        type: "Shelter",
        icon: "/pz2/images/icons/icons_shelters_jettyBeddingPlatform.png"
    }, 
    buriedNest: {
        name: "Buried Nest",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    canopyPlatformNestLarge: {
        name: "Canopy Platform Nest - Large",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_canopyPlatformNestLarge.png"
    }, 
    cavityNestLarge: {
        name: "Cavity Nest - Large",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    cavityNestMedium: {
        name: "Cavity Nest - Medium",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    cavityNestSmall: {
        name: "Cavity Nest - Small",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    cupNestLarge: {
        name: "Cup Nest - Large",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_cupNestLarge.png"
    }, 
    cupNestMedium: {
        name: "Cup Nest - Medium",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    cupNestSmall: {
        name: "Cup Nest - Small",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    groundNest: {
        name: "Ground Nest",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    moundNestLarge: {
        name: "Mound Nest - Large",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    mudMoundNest: {
        name: "Mud Mound Nest",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    turtleNestLarge: {
        name: "Turtle Nest - Large",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    waterPlatformNestLarge: {
        name: "Water Platform Nest - Large",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    }, 
    waterPlatformNestSmall: {
        name: "Water Platform Nest - Small",
        type: "Nest",
        icon: "/pz2/images/icons/icons_shelters_"
    } 
};

const foodEnrichment = { 
    bambooFeeder: {
        name: "Bamboo Feeder",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/En_Bamboo_Feeder_Spawner.png"
    }, 
    barrelFeederHanging: {
        name: "Barrel Feeder - Hanging",
        type: "Browsing Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/En_Hanging_Barrel_Feeder.png"
    }, 
    barrelFeederLarge: {
        name: "Barrel Feeder - Large",
        type: "Herbivorous Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Large_Barrel_Feeder_Spawner.png"
    }, 
    barrelFeederSmall: {
        name: "Barrel Feeder - Small",
        type: "Herbivorous Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    blockofFrozenFish: {
        name: "Block of Frozen Fish",
        type: "Frozen Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Block_of_Ice_Fish.png"
    }, 
    blockofFrozenFruit: {
        name: "Block of Frozen Fruit",
        type: "Frozen Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    dogBall: {
        name: "Dog Ball",
        type: "Feeder Ball Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Dog_Ball_Feeder_Spawner.png"
    }, 
    fixedRollerFeederLarge: {
        name: "Fixed Roller Feeder - Large",
        type: "Dexterity Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Large_Fixed_Roller.png"
    }, 
    fixedRollerFeederSmall: {
        name: "Fixed Roller Feeder - Small",
        type: "Dexterity Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    forageBox: {
        name: "Forage Box",
        type: "Foraging Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Forage_Box.png"
    }, 
    foragePool: {
        name: "Forage Pool",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    foragingWall: {
        name: "Foraging Wall",
        type: "Foraging Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    frozenBloodPumpkin: {
        name: "Frozen Blood Pumpkin",
        type: "Frozen Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Blood_Pumpkin.png"
    }, 
    fruitDish: {
        name: "Fruit Dish",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    fruitSpikeTree: {
        name: "Fruit Spike Tree",
        type: "Foraging Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Fruit_Spike_Tree.png"
    }, 
    grazingBallFeeder: {
        name: "Grazing Ball Feeder",
        type: "Feeder Ball Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/En_Grazing_Ball_Spawner.png"
    }, 
    hangingGrazerFeeder: {
        name: "Hanging Grazer Feeder",
        type: "Browsing Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Hanging_Grazer.png"
    }, 
    melonFeeder: {
        name: "Melon Feeder",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Melon.png"
    }, 
    naturalTermiteMound: {
        name: "Natural Termite Mound",
        type: "Insectivore Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    perchFeeder: {
        name: "Perch Feeder",
        type: "Carnivore Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Feeder_Perch.png"
    }, 
    pinataPronghorn: {
        name: "Piñata Pronghorn",
        type: "Hunting Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Pinata_Pronghorn_Spawner.png"
    }, 
    pinataZebra: {
        name: "Piñata Zebra",
        type: "Hunting Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Pinata_Spawner.png"
    }, 
    restraintFeeder: {
        name: "Restraint Feeder",
        type: "Carnivore Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Restraint_Feeder.png"
    }, 
    ribbedFeeder: {
        name: "Ribbed Feeder",
        type: "Carnivore Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Feeder_Ribbed.png"
    }, 
    rotationLineFeeder: {
        name: "Rotation Line Feeder",
        type: "Carnivore Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    scarecrowFeeder: {
        name: "Scarecrow Feeder",
        type: "Herbivorous Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Scarecrow.png"
    }, 
    skittleFeeder: {
        name: "Skittle Feeder",
        type: "Hunting Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    slowFeeder: {
        name: "Slow Feeder",
        type: "Dexterity Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    suspendedForager: {
        name: "Suspended Forager",
        type: "Arboreal Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Suspended_Forager.png"
    }, 
    suspendedHighGrazerFeeder: {
        name: "Suspended High Grazer Feeder",
        type: "Browsing Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Suspended_High_Grazer.png"
    },  
    suspendedPerchFeeder: {
        name: "Suspended Perch Feeder",
        type: "Arboreal Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    },  
    suspendedPuzzleFeeder: {
        name: "Suspended Puzzle Feeder",
        type: "Arboreal Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Feeder_Puzzle_Suspended.png"
    },  
    suspendedSpikeFeeder: {
        name: "Suspended Spike Feeder",
        type: "Arboreal Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    },  
    suspendedVeggieFeeder: {
        name: "Suspended Veggie Feeder",
        type: "Browsing Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    termiteMound: {
        name: "Termite Mound",
        type: "Insectivore Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Termite_Mound.png"
    }, 
    toolPuzzleFeeder: {
        name: "Tool Puzzle Feeder",
        type: "Dexterity Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    treeForager: {
        name: "Tree Forager",
        type: "Dexterity Food-based Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    treeScatterFeeder: {
        name: "Tree Scatter Feeder",
        type: "Foraging Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Tree_Scatter_Feeder.png"
    }, 
    veggieJellyCake: {
        name: "Veggie Jelly Cake",
        type: "Herbivorous Food-based Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Jelly_Cake.png"
    }, 
    forageTray: {
        name: "Forage Tray",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    suspendedBait: {
        name: "Suspended Bait",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Bait_Suspended.png"
    }, 
    veggieBundle: {
        name: "Veggie Bundle",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }
};

const toyEnrichment = {
    blockofIce: {
        name: "Block of Ice",
        type: "Ball Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    bloodScentMarker: {
        name: "Blood Scent Marker",
        type: "Olfactory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Blood_Trail.png"
    }, 
    bobbin: {
        name: "Bobbin",
        type: "Manipulation Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    bobbinDrum: {
        name: "Bobbin Drum",
        type: "Manipulation Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    cardboardBox: {
        name: "Cardboard Box",
        type: "Destructible Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Cardboard_Box_Spawner.png"
    }, 
    chewToy: {
        name: "Chew Toy",
        type: "Biting Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    curioBall: {
        name: "Curio Ball",
        type: "Curiosity Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_DiscoBall.png"
    }, 
    fireHoseBall: {
        name: "Fire Hose Ball",
        type: "Biting Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    grabBall: {
        name: "Grab Ball",
        type: "Biting Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Grab_Ball_Spawner.png"
    }, 
    gyro: {
        name: "Gyro",
        type: "Manipulation Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Gyro_Spawner.png"
    }, 
    herbScentMarker: {
        name: "Herb Scent Marker",
        type: "Olfactory Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    largeBall: {
        name: "Large Ball",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Large_Ball_Spawner.png"
    }, 
    largeTyre: {
        name: "Large Tyre",
        type: "Manipulation Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Tyre_Large_Spawner.png"
    }, 
    mirrorMobile: {
        name: "Mirror Mobile",
        type: "Curiosity Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Mirror_Mobile.png"
    }, 
    mudBath: {
        name: "Mud Bath",
        type: "Sensory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/En_Mud_Bath.png"
    }, 
    musicalKeyboard: {
        name: "Musical Keyboard",
        type: "Auditory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Musical_Keyboard.png"
    }, 
    perch01: {
        name: "Perch 01",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Perch_01.png"
    }, 
    perch02: {
        name: "Perch 02",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Perch_02.png"
    }, 
    plantPot: {
        name: "Plant Pot",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Plant_Pot_Spawner.png"
    }, 
    plantPotStand: {
        name: "Plant Pot Stand",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    plantScreen: {
        name: "Plant Screen",
        type: "Curiosity Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Plant_Screen.png"
    }, 
    platformFloats: {
        name: "Platform Floats",
        type: "Resting Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Platform_Floats.png"
    }, 
    preyScentedSack: {
        name: "Prey Scented Sack",
        type: "Olfactory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Prey_Scented_Sack.png"
    }, 
    rattle: {
        name: "Rattle",
        type: "Auditory Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    rubberChicken: {
        name: "Rubber Chicken",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    rubberDuck: {
        name: "Rubber Duck",
        type: "Ball Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    rubberSnake: {
        name: "Rubber Snake",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Fake_Snake_Spawner.png"
    }, 
    rubbingPad: {
        name: "Rubbing Pad",
        type: "Sensory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Rubbing_Pad.png"
    }, 
    rubbingPadBark: {
        name: "Rubbing Pad Bark",
        type: "Sensory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Rubbing_Pad_Bark.png"
    }, 
    rubbingPillar: {
        name: "Rubbing Pillar",
        type: "Sensory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Rubbing_Pillar.png"
    }, 
    scratchingPost: {
        name: "Scratching Post",
        type: "Sensory Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Scratching_Post.png"
    },  
    shreddingPaper: {
        name: "Shredding Paper",
        type: "Destructible Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    shreddingPerch: {
        name: "Shredding Perch",
        type: "Destructible Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Perch_Shredding.png"
    }, 
    skittle: {
        name: "Skittle",
        type: "Manipulation Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Skittle_Spawner.png"
    }, 
    smallBall: {
        name: "Small Ball",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Small_Ball_Spawner.png"
    }, 
    smallBubbleMachine: {
        name: "Small Bubble Machine",
        type: "Curiosity Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    smallIceBall: {
        name: "Small Ice Ball",
        type: "Ball Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    sprinkler: {
        name: "Sprinkler",
        type: "Water Feature Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Sprinkler.png"
    }, 
    stuffedPandaLarge: {
        name: "Stuffed Panda - Large",
        type: "No Research Required",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    submarineBuoy: {
        name: "Submarine Buoy",
        type: "Aquatic Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_FloatBuoy_Submarine.png"
    }, 
    suspendedBall: {
        name: "Suspended Ball",
        type: " Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    suspendedPerch: {
        name: "Suspended Perch",
        type: "Resting Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Perch_Suspended.png"
    }, 
    suspendedRattle: {
        name: "Suspended Rattle",
        type: " Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    tennisBall: {
        name: "Tennis Ball",
        type: "Ball Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_TennisBall_Spawner.png"
    }, 
    treasureBox: {
        name: "Treasure Box",
        type: "Destructible Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Treasure_Box.png"
    }, 
    tugRope: {
        name: "Tug Rope",
        type: "Biting Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    tunnel: {
        name: "Tunnel",
        type: "Navigational Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    tyre: {
        name: "Tyre",
        type: "Manipulation Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    waterJet: {
        name: "Water Jet",
        type: "Water Feature Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    waterJetRock: {
        name: "Water Jet Rock",
        type: "Water Feature Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    waterfallAndMetalFrame: {
        name: "Waterfall And Metal Frame",
        type: "Water Feature Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    windChimes: {
        name: "Wind Chimes",
        type: "Auditory Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    bubbleBlowerAirstone: {
        name: "Bubble Blower - Airstone",
        type: "No Research Required",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Bubble_Blower_Disk.png"
    }, 
    latticeBall: {
        name: "Lattice Ball",
        type: "Aquatic Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Ball_Spawner.png"
    }, 
    squareFloat: {
        name: "Square Float",
        type: "Aquatic Toy Enrichments",
        icon: "/images/icon-planet-zoo.svg"
    }, 
    waterHoop: {
        name: "Water Hoop",
        type: "Navigational Toy Enrichments",
        icon: "https://www.planetzoogame.com/assets/images/icons/enrichment/EN_Water_Hoop.png"
    }
};

const diseases = {
    amoebiasis: {
        name: "Amoebiasis",
        level: 3,
        danger: "Considerable Danger"
    }, 
    aspergillosis: {
        name: "Aspergillosis",
        level: 3,
        danger: "Considerable Danger"
    }, 
    avianHerpesvirus: {
        name: "Avian Herpesvirus",
        level: 4,
        danger: "High Danger"
    }, 
    avianInfluenza: {
        name: "Avian Influenza",
        level: 1,
        danger: "Low Danger"
    }, 
    avianTuberculosis: {
        name: "Avian Tuberculosis",
        level: 3,
        danger: "Considerable Danger"
    }, 
    avipoxvirus: {
        name: "Avipoxvirus",
        level: 2,
        danger: "Moderate Danger"
    }, 
    bordetellosis: {
        name: "Bordetellosis",
        level: 4,
        danger: "High Danger"
    }, 
    botulismToxicosis: {
        name: "Botulism Toxicosis",
        level: 4,
        danger: "High Danger"
    }, 
    campylobacteriosis: {
        name: "Campylobacteriosis",
        level: 1,
        danger: "Low Danger"
    }, 
    candidiasis: {
        name: "Candidiasis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    canineDistemperVirus: {
        name: "Canine Distemper Virus",
        level: 4,
        danger: "High Danger"
    }, 
    classicalSwineFever: {
        name: "Classical Swine Fever",
        level: 4,
        danger: "High Danger"
    }, 
    cowpoxVirus: {
        name: "Cowpox Virus",
        level: 1,
        danger: "Low Danger"
    }, 
    eehv: {
        name: "EEHV",
        level: 3,
        danger: "Considerable Danger"
    }, 
    europeanBrownHareSyndromeVirus: {
        name: "European Brown Hare Syndrome Virus",
        level: 5,
        danger: "Very High Danger"
    }, 
    featherLice: {
        name: "Feather Lice",
        level: 1,
        danger: "Low Danger"
    }, 
    fip: {
        name: "FIP",
        level: 1,
        danger: "Low Danger"
    }, 
    footAndMouthDisease: {
        name: "Foot And Mouth Disease",
        level: 3,
        danger: "Considerable Danger"
    }, 
    furunculosis: {
        name: "Furunculosis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    fusariosis: {
        name: "Fusariosis",
        level: 5,
        danger: "Very High Danger"
    }, 
    glanders: {
        name: "Glanders",
        level: 5,
        danger: "Very High Danger"
    }, 
    hepatitisA: {
        name: "Hepatitis A",
        level: 1,
        danger: "Low Danger"
    }, 
    isopodiasis: {
        name: "Isopodiasis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    listeriosis: {
        name: "Listeriosis",
        level: 5,
        danger: "Very High Danger"
    }, 
    mareksDisease: {
        name: "Marek's Disease",
        level: 5,
        danger: "Very High Danger"
    }, 
    mpox: {
        name: "Mpox",
        level: 4,
        danger: "High Danger"
    }, 
    mrsa: {
        name: "MRSA",
        level: 1,
        danger: "Low Danger"
    }, 
    mycoplasmosis: {
        name: "Mycoplasmosis",
        level: 1,
        danger: "Low Danger"
    }, 
    nematodiasis: {
        name: "Nematodiasis",
        level: 1,
        danger: "Low Danger"
    }, 
    newcastleDisease: {
        name: "Newcastle Disease",
        level: 2,
        danger: "Moderate Danger"
    }, 
    nileCrocodilePoxvirus: {
        name: "Nile Crocodile Poxvirus",
        level: 2,
        danger: "Moderate Danger"
    }, 
    piscineMycobacteriosis: {
        name: "Piscine Mycobacteriosis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    qFever: {
        name: "Q Fever",
        level: 3,
        danger: "Considerable Danger"
    }, 
    rabbitHaemorrhagicDiseaseVirus: {
        name: "Rabbit Haemorrhagic Disease Virus",
        level: 5,
        danger: "Very High Danger"
    }, 
    rotavirus: {
        name: "Rotavirus",
        level: 3,
        danger: "Considerable Danger"
    }, 
    salmonellosis: {
        name: "Salmonellosis",
        level: 3,
        danger: "Considerable Danger"
    }, 
    simianHaemorrhagicFever: {
        name: "Simian Haemorrhagic Fever",
        level: 1,
        danger: "Low Danger"
    }, 
    staphylococcusInfection: {
        name: "Staphylococcus Infection",
        level: 2,
        danger: "Moderate Danger"
    }, 
    streptococcosis: {
        name: "Streptococcosis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    testudinidHerpesvirus: {
        name: "Testudinid Herpesvirus",
        level: 5,
        danger: "Very High Danger"
    }, 
    tetanus: {
        name: "Tetanus",
        level: 1,
        danger: "Low Danger"
    }, 
    toxoplasmosis: {
        name: "Toxoplasmosis",
        level: 3,
        danger: "Considerable Danger"
    }, 
    tularemia: {
        name: "Tularemia",
        level: 5,
        danger: "Very High Danger"
    }, 
    ulcerativeDermatitis: {
        name: "Ulcerative Dermatitis",
        level: 5,
        danger: "Very High Danger"
    }, 
    ulcerativeStomatitis: {
        name: "Ulcerative Stomatitis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    usutuVirus: {
        name: "Usutu Virus",
        level: 5,
        danger: "Very High Danger"
    }, 
    velvetDisease: {
        name: "Velvet Disease",
        level: 4,
        danger: "High Danger"
    }, 
    vibriosis: {
        name: "Vibriosis",
        level: 2,
        danger: "Moderate Danger"
    }, 
    viralErythrocyticNecrosis: {
        name: "Viral Erythrocytic Necrosis",
        level: 5,
        danger: "Very High Danger"
    }, 
    viralPapillomatosis: {
        name: "Viral Papillomatosis",
        level: 4,
        danger: "High Danger"
    },  
    westNileVirus: {
        name: "West Nile Virus",
        level: 5,
        danger: "Very High Danger"
    },  
    whiteSpotDisease: {
        name: "White Spot Disease",
        level: 4,
        danger: "High Danger"
    }
};

const conservationTopics = {
    speciesNamePlate: {
        name: "Species Name Plate",
        type: "Animal Species - No Research"
    },  
    speciesFactSheet: {
        name: "Species Fact Sheet",
        type: "Animal Species Research"
    },    
    theAnimalKingdomTalk: {
        name: "The Animal Kingdom Talk",
        type: "Talks - No Research"
    },     
    livesofBirdsTalk: {
        name: "Lives of Birds Talk",
        type: "Talks - No Research"
    },      
    underwaterLifeTalk: {
        name: "Underwater Life Talk",
        type: "Talks - No Research"
    },      
    herpetologyTalk: {
        name: "Herpetology Talk",
        type: "Talks - No Research"
    }, 
    mammalEvolution: {
        name: "Mammal Evolution",
        type: "Evolution - No Research"
    },   
    birdEvolution: {
        name: "Bird Evolution",
        type: "Evolution - No Research"
    },    
    reptileEvolution: {
        name: "Reptile Evolution",
        type: "Evolution - No Research"
    },     
    sharkandRayEvolution: {
        name: "Shark and Ray Evolution",
        type: "Evolution - No Research"
    },       
    rayfinnedFishEvolution: {
        name: "Ray-finned Fish Evolution",
        type: "Evolution - No Research"
    },        
    amphibianEvolution: {
        name: "Amphibian Evolution",
        type: "Evolution - No Research"
    },  
    jumpingAnimals: {
        name: "Jumping Animals",
        type: "Animal Types - No Research"
    },  
    tallAnimals: {
        name: "Tall Animals",
        type: "Animal Types - No Research"
    },    
    flyingAnimals: {
        name: "Flying Animals",
        type: "Animal Types - No Research"
    },     
    swimmingAnimals: {
        name: "Swimming Animals",
        type: "Animal Types - No Research"
    },     
    walkingAnimals: {
        name: "Walking Animals",
        type: "Animal Types - No Research"
    },     
    speciesReintroduction: {
        name: "Species Reintroduction",
        type: "Conservation - No Research"
    },          
    landSharingvsLandSparing: {
        name: "Land Sharing vs Land Sparing",
        type: "Conservation - No Research"
    },          
    ecologicalRestoration: {
        name: "Ecological Restoration",
        type: "Conservation - No Research"
    },           
    amphibianExtinctionCrisis: {
        name: "Amphibian Extinction Crisis",
        type: "Conservation - No Research"
    }, 
    piscivoreDiet: {
        name: "Piscivore Diet",
        type: "Animal Diets"
    }, 
    omnivoreDiet: {
        name: "Omnivore Diet",
        type: "Animal Diets"
    }, 
    nectarivoreDiet: {
        name: "Nectarivore Diet",
        type: "Animal Diets"
    }, 
    insectivoreDiet: {
        name: "Insectivore Diet",
        type: "Animal Diets"
    }, 
    herbivoreDiet: {
        name: "Herbivore Diet",
        type: "Animal Diets"
    }, 
    dungDiet: {
        name: "Dung Diet",
        type: "Animal Diets"
    }, 
    carnivoreDiet: {
        name: "Carnivore Diet",
        type: "Animal Diets"
    }, 
    bambooDiet: {
        name: "Bamboo Diet",
        type: "Animal Diets"
    }, 
    nocturnalBehaviour: {
        name: "Nocturnal Behaviour",
        type: "Activity Patterns"
    },  
    diurnalBehaviour: {
        name: "Diurnal Behaviour",
        type: "Activity Patterns"
    },  
    crepuscularBehaviour: {
        name: "Crepuscular Behaviour",
        type: "Activity Patterns"
    },  
    cathemeralBehaviour: {
        name: "Cathemeral Behaviour",
        type: "Activity Patterns"
    },  
    populationFragmentation: {
        name: "Population Fragmentation",
        type: "Conservation Threats"
    },   
    pollution: {
        name: "Pollution",
        type: "Conservation Threats"
    },   
    habitatLoss: {
        name: "Habitat Loss",
        type: "Conservation Threats"
    },   
    infectiousDisease: {
        name: "Infectious Disease",
        type: "Conservation Threats"
    },   
    climateChange: {
        name: "Climate Change",
        type: "Conservation Threats"
    },   
    geneticBottlenecks: {
        name: "Genetic Bottlenecks",
        type: "Conservation Threats"
    },   
    foodScarcity: {
        name: "Food Scarcity",
        type: "Conservation Threats"
    },   
    beePopulationDecline: {
        name: "Bee Population Decline",
        type: "Conservation Threats"
    },   
    amphibianExtinctionCrisis: {
        name: "Amphibian Extinction Crisis",
        type: "Conservation Threats"
    }, 
    traditionalMedicine: {
        name: "Traditional Medicine",
        type: "Human Conservation Impact"
    },  
    wildlifePoisoning: {
        name: "Wildlife Poisoning",
        type: "Human Conservation Impact"
    },  
    poachingAndTheExoticPetTrade: {
        name: "Poaching and the Exotic Pet Trade",
        type: "Human Conservation Impact"
    },  
    overexploitation: {
        name: "Overexploitation",
        type: "Human Conservation Impact"
    },  
    invasiveSpecies: {
        name: "Invasive Species",
        type: "Human Conservation Impact"
    },  
    humanWildlifeConflict: {
        name: "Human-Wildlife Conflict",
        type: "Human Conservation Impact"
    },  
    deforestation: {
        name: "Deforestation",
        type: "Human Conservation Impact"
    },  
    bycatch: {
        name: "Bycatch",
        type: "Human Conservation Impact"
    }, 
    mountainEcosystemAmbience: {
        name: "Mountain Ecosystem Ambience",
        type: "Terrestrial Ecosystem Ambiences"
    },  
    grasslandEcosystemAmbience: {
        name: "Grassland Ecosystem Ambience",
        type: "Terrestrial Ecosystem Ambiences"
    },  
    forestEcosystemAmbience: {
        name: "Forest Ecosystem Ambience",
        type: "Terrestrial Ecosystem Ambiences"
    },  
    desertEcosystemAmbience: {
        name: "Desert Ecosystem Ambience",
        type: "Terrestrial Ecosystem Ambiences"
    },  
    wetlandEcosystemAmbience: {
        name: "Wetland Ecosystem Ambience",
        type: "Aquatic Ecosystem Ambiences"
    },   
    reefEcosystemAmbience: {
        name: "Reef Ecosystem Ambience",
        type: "Aquatic Ecosystem Ambiences"
    },   
    oceanEcosystemAmbience: {
        name: "Ocean Ecosystem Ambience",
        type: "Aquatic Ecosystem Ambiences"
    },   
    freshwaterEcosystemAmbience: {
        name: "Freshwater Ecosystem Ambience",
        type: "Aquatic Ecosystem Ambiences"
    },   
    rainforestEcosystemAmbience: {
        name: "Rainforest Ecosystem Ambience",
        type: "Ecosystem Ambiences - No Research"
    },   
    savannahEcosystemAmbience: {
        name: "Savannah Ecosystem Ambience",
        type: "Ecosystem Ambiences - No Research"
    },   
    EcosystemAmbience: {
        name: "Ecosystem Ambience",
        type: "Ecosystem Ambiences - No Research"
    }
};

export {
    DLC, form, types, enclosures, enclosureTypes, cohabitationOptions, conservation, 
    nativeRange, biomes, wildlifeReserves, ecosystems, speciesRoles, releaseGroups, 
    temperament, alphaDominance,  offspringDispersal, matingSystem, matingSeason, reproductionDifficulty,
    salinity, feeders, shelters, foodEnrichment, toyEnrichment, diseases, conservationTopics
};

