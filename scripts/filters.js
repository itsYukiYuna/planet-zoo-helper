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
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1934140/header.jpg?t=1706277256"
    },
    conservation: {
        name: "Conservation Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2013290/header.jpg?t=1706277200"
    },
    twilight: {
        name: "Twilight Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2150050/header.jpg?t=1706277132"
    },
    grasslands: {
        name: "Grasslands Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2199210/header.jpg?t=1706277050"
    },
    tropical: {
        name: "Tropical Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2346830/header.jpg?t=1706276990"
    },
    arid: {
        name: "Arid Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2436600/header.jpg?t=1706276322"
    },
    oceania: {
        name: "Oceania Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2502240/header.jpg?t=1706276135"
    },
    eurasia: {
        name: "Eurasia Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2675740/header.jpg?t=1706276161"
    },
    barnyard: {
        name: "Barnyard Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2837730/header.jpg?t=1714471314"
    },
    zookeepers: {
        name: "Zookeepers Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3146420/header.jpg?t=1728986434"
    },
    americas: {
        name: "Americas Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3473820/4b1ad7a50ad48e0e70be6e2557a6bb09a2b1753e/header.jpg?t=1744711154"
    },
    asia: {
        name: "Asia Animal Pack",
        icon: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3586990/18ce6c97184a9d3641a40860a0f40aee50696c88/header.jpg?t=1750845628"
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