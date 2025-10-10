const types = {
    habitat: "Habitat",
    exhibit: "Exhibit"
}

const DLC = {
    basegame: {
        name: "Base Game",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/703080/header.jpg?t=1750845999"
    },
    deluxe: {
        name: "Deluxe Upgrade Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1098120/header.jpg?t=1706279923"
    },
    arctic: {
        name: "Arctic Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196770/header.jpg?t=1706279284"
    },
    southAmerica: {
        name: "South America Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238440/header.jpg?t=1706278873"
    },
    australia: {
        name: "Australia Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1349400/header.jpg?t=1706278689"
    },
    aquatic: {
        name: "Aquatic Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1471590/header.jpg?t=1706278417"
    },
    southeastAsia: {
        name: "Southeast Asia Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1567110/header.jpg?t=1706278101"
    },
    africa: {
        name: "Africa Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1647620/header.jpg?t=1706277534"
    },
    northAmerica: {
        name: "North America Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1747960/header.jpg?t=1706277371"
    },
    europe: {
        name: "Europe Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1726150/header.jpg?t=1706277437"
    },
    wetlands: {
        name: "Wetlands Animal Pack",
        icon: "./images/icons/icon-dlc-wetlands.webp"
    },
    conservation: {
        name: "Conservation Pack",
        icon: "./images/icons/icon-dlc-conservation.webp"
    },
    twilight: {
        name: "Twilight Pack",
        icon: "./images/icons/icon-dlc-twilight.webp"
    },
    grasslands: {
        name: "Grasslands Animal Pack",
        icon: "./images/icons/icon-dlc-grasslands.webp"
    },
    tropical: {
        name: "Tropical Pack",
        icon: "./images/icons/icon-dlc-tropical.webp"
    },
    arid: {
        name: "Arid Animal Pack",
        icon: "./images/icons/icon-dlc-arid.webp"
    },
    oceania: {
        name: "Oceania Pack",
        icon: "./images/icons/icon-dlc-oceania.webp"
    },
    eurasia: {
        name: "Eurasia Animal Pack",
        icon: "./images/icons/icon-dlc-eurasia.webp"
    },
    barnyard: {
        name: "Barnyard Animal Pack",
        icon: "./images/icons/icon-dlc-barnyard.webp"
    },
    zookeepers: {
        name: "Zookeepers Animal Pack",
        icon: "./images/icons/icon-dlc-zookeepers.webp"
    },
    americas: {
        name: "Americas Animal Pack",
        icon: "./images/icons/icon-dlc-americas.webp"
    },
    asia: {
        name: "Asia Animal Pack",
        icon: "./images/icons/icon-dlc-asia.webp"
    }
};

const continents = {    
    africa: {
        name: "Africa",
        icon: "./images/icons/icon-continent-africa.webp"
    },
    europe: {
        name: "Europe",
        icon: "./images/icons/icon-continent-europe.webp"
    },
    asia: {
        name: "Asia",
        icon: "./images/icons/icon-continent-asia.webp"
    },
    northAmerica: {
        name: "North America",
        icon: "./images/icons/icon-continent-north-america.webp"
    },
    southAmerica: {
        name: "South America",
        icon: "./images/icons/icon-continent-south-america.webp"
    },
    oceania: {
        name: "Oceania",
        icon: "./images/icons/icon-continent-oceania.webp"
    },
    antarctica: {
        name: "Antarctica", 
        icon: "./images/icons/icon-continent-antarctica.webp"
    }
};

const biomes = {
    aquatic: {
        name: "Aquatic",
        icon: "./images/icons/icon-biome-aquatic.svg"
    },
    desert: {
        name: "Desert",
        icon: "./images/icons/icon-biome-desert.svg"
    },
    grassland: {
        name: "Grassland",
        icon: "./images/icons/icon-biome-grassland.svg"
    },
    tropical: {
        name: "Tropical",
        icon: "./images/icons/icon-biome-tropical.svg"
    },
    temperate: {
        name: "Temperate",
        icon: "./images/icons/icon-biome-temperate.svg"
    },
    taiga: {
        name: "Taiga",
        icon: "./images/icons/icon-biome-taiga.svg"
    },
    tundra: {
        name: "Tundra",
        icon: "./images/icons/icon-biome-tundra.svg"
    }
};

const IUCN = {
    extinctInTheWild: {
        status: "Extinct in the Wild",
        icon: "./images/icons/icon-iucn-extinct-wild.webp",
        iconLong: "./images/icons/icon-iucn-long-extinct-wild.png"
    },
    criticallyEndangered: {
        status: "Critically Endangered",
        icon: "./images/icons/icon-iucn-critically-endangered.webp",
        iconLong: "./images/icons/icon-iucn-long-critically-endangered.png"
    },
    endangered: {
        status: "Endangered",
        icon: "./images/icons/icon-iucn-endangered.webp",
        iconLong: "./images/icons/icon-iucn-long-endangered.png"
    },
    vulnerable: {
        status: "Vulnerable",
        icon: "./images/icons/icon-iucn-vulnerable.webp",
        iconLong: "./images/icons/icon-iucn-long-vulnerable.png"
    },
    nearThreatened: {
        status: "Near Threatened",
        icon: "./images/icons/icon-iucn-near-threatened.webp",
        iconLong: "./images/icons/icon-iucn-long-near-threatened.png"
    },
    leastConcern: {
        status: "Least Concern",
        icon: "./images/icons/icon-iucn-least-concern.webp",
        iconLong: "./images/icons/icon-iucn-long-least-concern.png"
    },
    domesticated: {
        status: "Domesticated",
        icon: "./images/icons/icon-iucn-domesticated.webp",
        iconLong: "./images/icons/icon-iucn-long-domesticated.png"
    },
    dataDeficient: {
        status: "Data Deficient",
        icon: "./images/icons/icon-iucn-data-deficient.webp",
        iconLong: "./images/icons/icon-iucn-long-data-deficient.png"
    }
};

const relationWithHumans = {
    shy: "Shy",
    neutral: "Neutral",
    confident: "Confident"
};

const dominance = {
    alphaPair: {
        type: "Alpha Pair",
        description: "Other&nbsp;adults can't mate"
    },
    alphaMale: {
        type: "Alpha Male",
        description: "Other&nbsp;males can't mate"
    },
    alphaFemale: {
        type: "Alpha Female",
        description: "Other&nbsp;females can't mate"
    },
    leaderMale: {
        type: "Male Leader",
        description: "Males&nbsp;fight for dominance"
    },
    leaderFemale: {
        type: "Female Leader",
        description: "Female leads&nbsp;group"
    },
    none: {
        type: "None",
        description: "No mating dominance"
    },
};

const matingSystem = {
    monogamous: "Monogamous",
    polyandrous: "Polyandrous",
    polygynous: "Polygynous",
    polygamous: "Polygamous",
    promiscuous: "Promiscuous"
};

const maturationRules = {
    gregarious:{
        type: "Gregarious",
        description: "Mature offspring tolerated"
    },
    solitary:{
        type: "Solitary",
        description: "Mature offspring become outsiders"
    },
    matrilineal:{
        type: "Matrilineal",
        description: "Mature males become outsiders"
    },
    patrilineal:{
        type: "Patrilineal",
        description: "Mature females become outsiders"
    },
};


export {
    types, DLC, continents, biomes, IUCN, relationWithHumans, dominance, matingSystem, maturationRules
};