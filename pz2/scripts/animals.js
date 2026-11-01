import {
    DLC, form, types, enclosures, enclosureTypes, exhibitTerrain, cohabitationOptions, conservation, 
    nativeRange, biomes, wildlifeReserves, ecosystems, speciesRoles, releaseGroups, 
    temperament, alphaDominance, offspringDispersal, matingSystem, matingSeason, reproductionDifficulty, 
    salinity, feeders, shelters, foodEnrichment, toyEnrichment, diseases, conservationTopics
} from "/pz2/scripts/filters.js";

    // // --- # 0 ---
    // name:{
    //     name: "name", 
    //     latin: "latin", 
    //     image: "/pz2/images/animals/name.webp", 
    //     imageURL: "link", 
    //     headshot: "/pz2/images/animal_headshots/name_headshot.png", 
    //     headshotURL: "link", 
    //     map: "link", 
    //     illustration: "link", 
    //     zoopedia: "link", 
    //     wiki: "link", 
   
    //     class: "class", 
    //     order: "order", 
    //     family: "family", 
    //     genus: "genus", 

    //     DLC: DLC., 
    //     form: form., 
    //     type: types., 
    //     enclosure: [enclosures.], 
    //     enclosureTypes: [enclosureTypes.], 
    //     exhibitTerrain: [exhibitTerrain.], 
    //     cohabitationOptions: cohabitationOptions., 
    //     conservation: conservation., 
  
    //     maxAnimalAppeal: 0, 
    //     careerAccreditation: 0, 
    //     franchiseAccreditation: 0, 

    //     nativeRange: [nativeRange.], 
    //     biomes: [biomes.], 
    //     wildlifeReserves: [wildlifeReserves.], 
    //     ecosystems: [ecosystems.], 
    //     speciesRoles: [speciesRoles.], 
    //     rolesRequired: [speciesRoles.], 
    //     releaseGroups: [releaseGroups.], 

    //     temperament: temperament., 
    //     dominance: "", 
    //     alphaDominance: alphaDominance., 
    //     collectiveSize: {min: 0, max: 0}, 
    //     offspringDispersal: offspringDispersal., 
    //     matingSystem: matingSystem., 
    //     matingSeason: [matingSeason.], 
    //     reproductionDifficulty: reproductionDifficulty., 

    //     groupSizeMin: 0, 
    //     groupMixedMax: 0, 
    //     maxMalesMixed: 0, 
    //     maxMalesBachelor: 0, 
    //     maxFemalesMixed: 0, 
    //     maxFemalesBachelor: 0, 

    //     offspringPerMating: {min: 0, max: 0}, 
    //     preBirthMonths: 0, 
    //     interbirthMonths: 0, 
    //     juvenileYears: 0, 
    //     adultYears: 0, 
    //     elderlyYears: 0, 
    //     maturityAge: 0, 
    //     sterilityAge: 0, 

    //     barrierStrength: 0, 
    //     barrierHeight: 0, 
    //     landArea: 0, 
    //     landPerAddAdult: 0, 
    //     shelterArea: 0, 
    //     shelterPerAddAdult: 0, 
    //     climbableArea: 0, 
    //     climbablePerAddAdult: 0, 
    //     flyableArea: 0, 
    //     flyablePerAddAdult: 0, 
    //     waterArea: 0, 
    //     waterPerAddAdult: 0, 
    //     deepWaterArea: 0, 
    //     deepWaterPerAddAdult: 0, 
    //     diveDepth: 0, 

    //     temperatureRange: {min: 0, max: 0}, 
    //     humidityRange: {min: 0, max: 0}, 
    //     plantCoverage: {min: 0, max: 0}, 
    //     grassRange: {min: 0, max: 0}, 
    //     grassShort: {min: 0, max: 0}, 
    //     grassLong: {min: 0, max: 0}, 
    //     sandRange: {min: 0, max: 0}, 
    //     sandFine: {min: 0, max: 0}, 
    //     sandCoarse: {min: 0, max: 0}, 
    //     soilRange: {min: 0, max: 0}, 
    //     rockRange: {min: 0, max: 0}, 
    //     waterloggedRange: {min: 0, max: 0}, 
    //     snowRange: {min: 0, max: 0}, 

    //     foodGrade1: "name", 
    //     foodGrade1Cost: 0, 
    //     foodGrade1CostJuv: 0, 
    //     foodGrade2: "name", 
    //     foodGrade2Cost: 0, 
    //     foodGrade2CostJuv: 0, 

    //     salinity: salinity., 
    //     feeders: [feeders.], 
    //     shelters: [shelters.], 
    //     foodEnrichment: [foodEnrichment.], 
    //     toyEnrichment: [toyEnrichment.], 
    //     diseases: [diseases.], 
    //     conservationTopics: [conservationTopics.], 

    //     cohabitation: , 
    //     releasable: , 
    //     guestsEnter: , 
    //     burrower: , 
    //     groupDivision: , 
    //     spawning: , 
    //     pregnancy: , 
    //     eggLaying: , 
    //     brooding: , 
    //     nestbound: , 
    //     canMoveOnLand: , 
    //     canJump: , 
    //     canClimb: , 
    //     canFly: , 
    //     canWade: , 
    //     canSwim: , 
    //     canDive: , 

    //     thrivingRequirements: {
    //         req1: { 
    //             requirement: "text", 
    //             value: 0, 
    //             valueType: "text" 
    //         }, 
    //         req2: { 
    //             requirement: "text", 
    //             value: 0, 
    //             valueType: "text" 
    //         }, 
    //         req3: { 
    //             requirement: "text", 
    //             value: 0, 
    //             valueType: "text" 
    //         }, 
    //         req4: { 
    //             requirement: "text", 
    //             value: 0, 
    //             valueType: "text" 
    //         }, 
    //         req5: { 
    //             requirement: "text", 
    //             value: 0, 
    //             valueType: "text" 
    //         } 
    //     },

    //     standardCoat: {
    //         standard: { 
    //             name: "Standard", 
    //             description: "text" 
    //         } 
    //     }, 

    //     colourmorphs: {
    //         name: { 
    //             name: "name", 
    //             description: "text", 
    //             icon: "image" 
    //         }
    //     }, 

    //     thrivingRelationships: [""], 
    //     neutralRelationships: [""], 

    //     album: {
    //     name: "/pz2/images/albums/animal/image" 
    //     }, 

    //     notes: "" 
    // }, 

const animals = {
// --- BASEGAME ANIMALS ---

    // --- Zoopedia bundle#1 2026/06/23 ---

    // --- # 1 ---
    sumatranTiger:{
        name: "Sumatran Tiger", 
        latin: "Panthera tigris sumatrae", 
        image: "/pz2/images/animals/sumatranTiger.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvYTc2YjFhZGEvVGlnZXJfU3VtYXRyYW4uanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4NX0sInRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiZml0IjoiY29udGFpbiJ9LCJ2ZXJzaW9uIjoiODI4NzMxNWEtODgwMS00ODIyLWEwYjgtZGQ3YjJlYjUzZjUxIn19", 
        headshot: "/pz2/images/animal_headshots/sumatranTiger_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/a76b1ada/Tiger_Sumatran_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/a76b1ada/Tiger_Sumatran_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/a76b1ada/Tiger_Sumatran_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/sumatran-tiger", 
        wiki: "https://en.wikipedia.org/wiki/Sumatran_tiger", 
   
        class: "Mammalia", 
        order: "Carnivora", 
        family: "Felidae", 
        genus: "Panthera", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatClimbProof], 
        cohabitationOptions: cohabitationOptions.none, 
        conservation: conservation.endangered, 

        maxAnimalAppeal: 8000, 
        careerAccreditation: 3, 
        franchiseAccreditation: 4, 

        nativeRange: [nativeRange.asia], 
        biomes: [biomes.tropical, biomes.wetlands], 
        wildlifeReserves: [wildlifeReserves.sumatraReserve], 
        ecosystems: [ecosystems.lowlandRainforest], 
        speciesRoles: [speciesRoles.predators], 
        rolesRequired: [speciesRoles.mediumPrey], 
        releaseGroups: [releaseGroups.femaleGroup, releaseGroups.solitaryMale], 

        temperament: temperament.neutral, 
        dominance: "None", 
        offspringDispersal: offspringDispersal.allOffspring, 
        matingSystem: matingSystem.promiscuous, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.average, 

        groupSizeMin: 1, 
        groupMixedMax: 2, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 1, 
        maxFemalesBachelor: 1, 

        offspringPerMating: {min: 1, max: 4}, 
        preBirthMonths: 3.4, 
        interbirthMonths: 21, 
        juvenileYears: 4, 
        adultYears: 5, 
        elderlyYears: 11, 
        maturityAge: 4, 
        sterilityAge: "Death", 

        barrierStrength: 3, 
        barrierHeight: 3, 
        landArea: 705, 
        landPerAddAdult: 110, 
        shelterArea: 10, 
        shelterPerAddAdult: 10, 
        climbableArea: 30, 
        climbablePerAddAdult: 10, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 40, 
        waterPerAddAdult: 10, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 3, 

        temperatureRange: {min: 18, max: 33}, 
        plantCoverage: {min: 25, max: 100}, 
        grassRange: {min: 20, max: 90}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 0, max: 60}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 10, max: 80}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 30}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Nutritionally Complete Meat", 
        foodGrade1Cost: 1200, 
        foodGrade1CostJuv: 600, 
        foodGrade2: "+ Small Carcasses", 
        foodGrade2Cost: 1716, 
        foodGrade2CostJuv: 858, 

        feeders: [feeders.foodTray, feeders.groundWaterFountain, feeders.waterPipe], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.bambooFeeder, foodEnrichment.blockofFrozenFish, foodEnrichment.frozenBloodPumpkin, foodEnrichment.pinataPronghorn, foodEnrichment.pinataZebra, foodEnrichment.restraintFeeder, foodEnrichment.ribbedFeeder], 
        toyEnrichment: [toyEnrichment.cardboardBox, toyEnrichment.preyScentedSack, toyEnrichment.rubbingPad, toyEnrichment.rubbingPadBark, toyEnrichment.scratchingPost, toyEnrichment.smallBall], 
        diseases: [diseases.avianInfluenza, diseases.bordetellosis, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.canineDistemperVirus, diseases.cowpoxVirus, diseases.fip, diseases.glanders, diseases.listeriosis, diseases.mrsa, diseases.qFever, diseases.rotavirus, diseases.salmonellosis, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.jumpingAnimals, conservationTopics.carnivoreDiet, conservationTopics.crepuscularBehaviour, conservationTopics.habitatLoss, conservationTopics.traditionalMedicine, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.humanWildlifeConflict, conservationTopics.rainforestEcosystemAmbience], 
  
        cohabitation: false, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: true, 

        thrivingRequirements: {
            req1: { 
                requirement: "Trees", 
                value: 6, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Scratching Post", 
                value: 2, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Deep Water Surface Area", 
                value: 50, 
                valueType: "m²" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Orange coat with black stripes" 
            }, 
            standardLight: { 
                name: "Standard", 
                description: "Light orange coat with black stripes" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Dark orange coat with black stripes" 
            } 
        }, 

        colourmorphs: {
            leucistic: { 
                name: "Leucistic", 
                description: "Leucistic: White coat with dark brown stripes", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/a76b1ada/Tiger_Sumatran_headshot_Albino.png" 
            }, 
            goldenMorph: { 
                name: "Golden Morph", 
                description: "Golden Tiger: Pale orange coat with brown stripes", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/a76b1ada/Tiger_Sumatran_headshot_Erythristic.png" 
            }, 
            pseudomelanistic: { 
                name: "Pseudomelanistic", 
                description: "Pseudomelanistic: Orange coat with thick black stripes", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/a76b1ada/Tiger_Sumatran_headshot_Leucistic.png" 
            } 
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "The first animal to be revealed in the PZ2 trailer on 2026/05/28 and the poster animal of the game, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 2 ---
    africanSavannahElephant:{
        name: "African Savannah Elephant", 
        latin: "Loxodonta africana", 
        image: "/pz2/images/animals/africanSavannahElephant.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvYzdlZmU3ZmEvRWxlcGhhbnRfQWZyaWNhblNhdmFubmFoLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6IjgyODczMTVhLTg4MDEtNDgyMi1hMGI4LWRkN2IyZWI1M2Y1MSJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/africanSavannahElephant_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c7efe7fa/Elephant_AfricanSavannah_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c7efe7fa/Elephant_AfricanSavannah_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c7efe7fa/Elephant_AfricanSavannah_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/african-savannah-elephant", 
        wiki: "https://en.wikipedia.org/wiki/African_bush_elephant", 
   
        class: "Mammalia", 
        order: "Proboscidea", 
        family: "Elephantidae", 
        genus: "Loxodonta", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitat], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.endangered, 
  
        maxAnimalAppeal: 9000, 
        careerAccreditation: 4, 
        franchiseAccreditation: 5, 

        nativeRange: [nativeRange.africa], 
        biomes: [biomes.desert, biomes.grassland, biomes.wetlands], 
        wildlifeReserves: [wildlifeReserves.greatRiftValleyReserve, wildlifeReserves.tanzaniaReserve], 
        ecosystems: [ecosystems.wetland, ecosystems.savannah, ecosystems.riverine], 
        speciesRoles: [speciesRoles.highBrowsers, speciesRoles.terrestrialForagers, speciesRoles.terrestrialSeedDispersers], 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.maleGroup, releaseGroups.femaleGroup, releaseGroups.solitaryMale], 

        temperament: temperament.confident, 
        dominance: "Stable dominant female in female herd. Male dominance in bachelor pods changes depending on age/aggression.", 
        alphaDominance: alphaDominance.alphaFemale, 
        offspringDispersal: offspringDispersal.maleOffspring, 
        matingSystem: matingSystem.polygynous, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.difficult, 

        groupSizeMin: 2, 
        groupMixedMax: 16, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 5, 
        maxFemalesMixed: 15, 
        maxFemalesBachelor: 16, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 22, 
        interbirthMonths: 108, 
        juvenileYears: 10, 
        adultYears: 50, 
        elderlyYears: 26, 
        maturityAge: 10, 
        sterilityAge: 60, 

        barrierStrength: 4, 
        barrierHeight: 3, 
        landArea: 502, 
        landPerAddAdult: 502, 
        shelterArea: 56, 
        shelterPerAddAdult: 56, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 25, 
        waterPerAddAdult: 25, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: 14, max: 36}, 
        plantCoverage: {min: 0, max: 30}, 
        grassRange: {min: 20, max: 40}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 10, max: 40}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 20, max: 40}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 10, max: 40}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Leaves and Branches", 
        foodGrade1Cost: 1322, 
        foodGrade1CostJuv: 661, 
        foodGrade2: "+ Hay", 
        foodGrade2Cost: 1884, 
        foodGrade2CostJuv: 942, 

        feeders: [feeders.foodTrough, feeders.wallFeeder, feeders.waterPipe], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.barrelFeederHanging, foodEnrichment.barrelFeederLarge, foodEnrichment.fixedRollerFeederLarge, foodEnrichment.melonFeeder, foodEnrichment.suspendedHighGrazerFeeder, foodEnrichment.treeScatterFeeder, foodEnrichment.veggieJellyCake], 
        toyEnrichment: [toyEnrichment.gyro, toyEnrichment.largeBall, toyEnrichment.largeTyre, toyEnrichment.mudBath, toyEnrichment.musicalKeyboard, toyEnrichment.rubbingPillar, toyEnrichment.skittle], 
        diseases: [diseases.avianInfluenza, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.cowpoxVirus, diseases.eehv, diseases.footAndMouthDisease, diseases.listeriosis, diseases.mrsa, diseases.rotavirus, diseases.salmonellosis, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.tallAnimals, conservationTopics.herbivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.populationFragmentation, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.humanWildlifeConflict, conservationTopics.savannahEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Mud Bath", 
                value: 2, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Spreading Crown", 
                value: 3, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Water Surface Area", 
                value: 500, 
                valueType: "m²" 
            }, 
            req5: { 
                requirement: "Waterfall and Metal Frame", 
                value: 2, 
                valueType: "Units" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Grey Skin" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Dark grey skin" 
            }, 
            standardBrown: { 
                name: "Standard", 
                description: "Brown-grey skin" 
            } 
        }, 

        colourmorphs: {
            albino: { 
                name: "Albino", 
                description: "Albino: Pink skin with dark patches", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c7efe7fa/Elephant_AfricanSavannah_headshot_Albino.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: ["", "", ""], 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed in the PZ2 trailer on 2026/05/28 and confirmed on Instagram the same day, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 3 ---
    secretarybird:{
        name: "Secretarybird", 
        latin: "Sagittarius serpentarius", 
        image: "/pz2/images/animals/secretarybird.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvMDdiNTNhNDMvU2VjcmV0YXJ5YmlyZC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb250YWluIn0sInZlcnNpb24iOiI4Mjg3MzE1YS04ODAxLTQ4MjItYTBiOC1kZDdiMmViNTNmNTEifX0=", 
        headshot: "/pz2/images/animal_headshots/secretarybird_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/07b53a43/Secretarybird_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/07b53a43/Secretarybird_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/07b53a43/Secretarybird_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/secretarybird", 
        wiki: "https://en.wikipedia.org/wiki/Secretarybird", 
   
        class: "Aves", 
        order: "Accipitriformes", 
        family: "Sagittariidae", 
        genus: "Sagittarius", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.avian, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatRoofed], 
        cohabitationOptions: cohabitationOptions.none, 
        conservation: conservation.endangered, 
  
        maxAnimalAppeal: 4500, 
        careerAccreditation: 2, 
        franchiseAccreditation: 3, 

        nativeRange: [nativeRange.africa], 
        biomes: [biomes.grassland], 
        wildlifeReserves: [wildlifeReserves.greatRiftValleyReserve, wildlifeReserves.tanzaniaReserve], 
        ecosystems: [ecosystems.grassland], 
        speciesRoles: [speciesRoles.predators, speciesRoles.scavengers], 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.breedingPartners], 

        temperament: temperament.shy, 
        dominance: "None", 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.monogamous, 
        matingSeason: [matingSeason.summer], 
        reproductionDifficulty: reproductionDifficulty.difficult, 

        groupSizeMin: 1, 
        groupMixedMax: 2, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 1, 
        maxFemalesBachelor: 1, 

        offspringPerMating: {min: 1, max: 2}, 
        preBirthMonths: 1.6, 
        interbirthMonths: 12, 
        juvenileYears: 3, 
        adultYears: 11, 
        elderlyYears: 6, 
        maturityAge: 3, 
        sterilityAge: "Death", 

        barrierStrength: 2, 
        barrierHeight: 1, 
        landArea: 200, 
        landPerAddAdult: 100, 
        shelterArea: 10, 
        shelterPerAddAdult: 10, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 60, 
        flyablePerAddAdult: 25, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: 14, max: 36}, 
        plantCoverage: {min: 10, max: 40}, 
        grassRange: null, 
        grassShort: {min: 20, max: 80}, 
        grassLong: null, 
        sandRange: {min: 10, max: 70}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 10, max: 70}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 10}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Nutritionally Complete Meat", 
        foodGrade1Cost: 625, 
        foodGrade1CostJuv: 312.5, 
        foodGrade2: "+ Small Carcasses", 
        foodGrade2Cost: 882, 
        foodGrade2CostJuv: 441, 

        feeders: [feeders.foodTray, feeders.groundWaterFountain, feeders.waterPipe], 
        shelters: [shelters.canopyPlatformNestLarge, shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.bambooFeeder, foodEnrichment.dogBall, foodEnrichment.termiteMound], 
        toyEnrichment: [toyEnrichment.mirrorMobile, toyEnrichment.perch01, toyEnrichment.perch02, toyEnrichment.plantPot, toyEnrichment.rubberSnake, toyEnrichment.treasureBox], 
        diseases: [diseases.aspergillosis, diseases.avianHerpesvirus, diseases.avianInfluenza, diseases.avianTuberculosis, diseases.avipoxvirus, diseases.candidiasis, diseases.featherLice, diseases.mareksDisease, diseases.nematodiasis, diseases.newcastleDisease, diseases.salmonellosis, diseases.usutuVirus, diseases.westNileVirus], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.livesofBirdsTalk, conservationTopics.birdEvolution, conservationTopics.flyingAnimals, conservationTopics.landSharingvsLandSparing, conservationTopics.carnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.habitatLoss, conservationTopics.wildlifePoisoning, conservationTopics.savannahEcosystemAmbience], 
  
        cohabitation: false, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: true, 
        brooding: true, 
        nestbound: true, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: true, 
        canWade: true, 
        canSwim: false, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Light Soil", 
                value: 30, 
                valueType: "m²" 
            }, 
            req2: { 
                requirement: "Climbable", 
                value: 12, 
                valueType: "Objects" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Canopy Platform Nest - Large", 
                value: 2, 
                valueType: "Units" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Grey body, black flight feathers and orange face" 
            }, 
            standardLight: { 
                name: "Standard", 
                description: "Light grey body, black flight feathers and orange face" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Grey body with darker back, black flight feathers and orange face" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed in the PZ2 trailer on 2026/05/28 and confirmed on the official website news the same day, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 4 ---
    africanPenguin:{
        name: "African Penguin", 
        latin: "Spheniscus demersus", 
        image: "/pz2/images/animals/africanPenguin.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvMWI2ZmU3NjcvUGVuZ3Vpbl9BZnJpY2FuLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6IjgyODczMTVhLTg4MDEtNDgyMi1hMGI4LWRkN2IyZWI1M2Y1MSJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/africanPenguin_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/1b6fe767/Penguin_African_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/1b6fe767/Penguin_African_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/1b6fe767/Penguin_African_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/african-penguin", 
        wiki: "https://en.wikipedia.org/wiki/African_penguin", 
   
        class: "Aves", 
        order: "Sphenisciformes", 
        family: "Spheniscidae", 
        genus: "Spheniscus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitat], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.criticallyEndangered, 
  
        maxAnimalAppeal: 3000, 
        careerAccreditation: 2, 
        franchiseAccreditation: 3, 

        nativeRange: [nativeRange.africa], 
        biomes: [biomes.grassland, biomes.openSea], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup, releaseGroups.breedingPartners], 

        temperament: temperament.neutral, 
        dominance: "None", 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.monogamous, 
        matingSeason: [matingSeason.spring], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 6, 
        groupMixedMax: 500, 
        maxMalesMixed: 500, 
        maxMalesBachelor: 500, 
        maxFemalesMixed: 500, 
        maxFemalesBachelor: 500, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 1.3, 
        interbirthMonths: 12, 
        juvenileYears: 5, 
        adultYears: 9, 
        elderlyYears: 16, 
        maturityAge: 5, 
        sterilityAge: 14, 

        barrierStrength: 2, 
        barrierHeight: 1, 
        landArea: 180, 
        landPerAddAdult: 3, 
        shelterArea: 2, 
        shelterPerAddAdult: 2, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 135, 
        waterPerAddAdult: 2, 
        deepWaterArea: 67, 
        deepWaterPerAddAdult: 2, 
        diveDepth: 0, 

        temperatureRange: {min: 3, max: 36}, 
        plantCoverage: {min: 0, max: 20}, 
        grassRange: null, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 20, max: 100}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 0, max: 50}, 
        rockRange: {min: 10, max: 100}, 
        waterloggedRange: {min: 0, max: 0}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Small Whole Fish", 
        foodGrade1Cost: 83.75, 
        foodGrade1CostJuv: 41.88, 
        foodGrade2: "+ Squid", 
        foodGrade2Cost: 113.25, 
        foodGrade2CostJuv: 56.63, 

        feeders: [feeders.foodTray, feeders.aquaticFeederFish, feeders.groundWaterFountain], 
        shelters: [shelters.animalBurrow, shelters.jettyBeddingPlatform, shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.bambooFeeder, foodEnrichment.blockofFrozenFish], 
        toyEnrichment: [toyEnrichment.curioBall, toyEnrichment.platformFloats, toyEnrichment.sprinkler, toyEnrichment.submarineBuoy, toyEnrichment.tennisBall, toyEnrichment.bubbleBlowerAirstone, toyEnrichment.waterHoop], 
        diseases: [diseases.aspergillosis, diseases.avianHerpesvirus, diseases.avianInfluenza, diseases.avianTuberculosis, diseases.avipoxvirus, diseases.candidiasis, diseases.featherLice, diseases.mareksDisease, diseases.nematodiasis, diseases.newcastleDisease, diseases.salmonellosis, diseases.usutuVirus, diseases.westNileVirus], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.livesofBirdsTalk, conservationTopics.birdEvolution, conservationTopics.swimmingAnimals, conservationTopics.piscivoreDiet, conservationTopics.crepuscularBehaviour, conservationTopics.pollution, conservationTopics.climateChange, conservationTopics.foodScarcity, conservationTopics.invasiveSpecies, conservationTopics.oceanEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: false, 
        guestsEnter: true, 
        burrower: true, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: true, 
        brooding: true, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: true, 

        thrivingRequirements: {
            req1: { 
                requirement: "Water Hoop", 
                value: 2, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Aquatic Feeder - Fish", 
                value: 2, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Grass", 
                value: 40, 
                valueType: "m²" 
            }, 
            req5: { 
                requirement: "Coarse Sand", 
                value: 40, 
                valueType: "m²" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Black feathers with white front and black spots" 
            } 
        }, 

        colourmorphs: {
            brownMorph: { 
                name: "Brown Morph", 
                description: "Brown mutation: Pale brown feathers with white front and brown spots", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/1b6fe767/Penguin_African_headshot_Albino.png" 
            }, 
            partLeucistic: { 
                name: "Part Leucistic", 
                description: "Part-Leucistic: White feathers with partial black mottled markings", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/1b6fe767/Penguin_African_headshot_Erythristic.png" 
            }, 
            albino: { 
                name: "Albino", 
                description: "Albino: White feathers", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/1b6fe767/Penguin_African_headshot_Leucistic.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed via Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 5 ---
    europeanBison:{
        name: "European Bison", 
        latin: "Bison bonasus", 
        image: "/pz2/images/animals/europeanBison.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvZWEwZWZmZGYvQmlzb25fRXVyb3BlYW4uanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4NX0sInRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiZml0IjoiY29udGFpbiJ9LCJ2ZXJzaW9uIjoiODI4NzMxNWEtODgwMS00ODIyLWEwYjgtZGQ3YjJlYjUzZjUxIn19", 
        headshot: "/pz2/images/animal_headshots/europeanBison_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/ea0effdf/Bison_European_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/ea0effdf/Bison_European_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/ea0effdf/Bison_European_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/european-bison", 
        wiki: "https://en.wikipedia.org/wiki/European_bison", 
   
        class: "Mammalia", 
        order: "Artiodactyla", 
        family: "Bovidae", 
        genus: "Bison", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitat], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.nearThreatened, 
  
        maxAnimalAppeal: 2500, 
        careerAccreditation: 4, 
        franchiseAccreditation: 2, 

        nativeRange: [nativeRange.europe], 
        biomes: [biomes.temperate, biomes.taiga], 
        wildlifeReserves: [wildlifeReserves.polandReserve], 
        ecosystems: [ecosystems.closedCanopyForest, ecosystems.pastures, ecosystems.openCanopyForest], 
        speciesRoles: [speciesRoles.grazers, speciesRoles.terrestrialSeedDispersers, speciesRoles.largePrey], 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup, releaseGroups.maleGroup], 

        temperament: temperament.neutral, 
        dominance: "Matriarchal herds and dominant bulls", 
        alphaDominance: alphaDominance.alphaMale, 
        offspringDispersal: offspringDispersal.maleOffspring, 
        matingSystem: matingSystem.polygynous, 
        matingSeason: [matingSeason.autumn], 
        reproductionDifficulty: reproductionDifficulty.veryEasy, 

        groupSizeMin: 2, 
        groupMixedMax: 13, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 8, 
        maxFemalesMixed: 12, 
        maxFemalesBachelor: 13, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 8.7, 
        interbirthMonths: 15, 
        juvenileYears: 3, 
        adultYears: 17, 
        elderlyYears: 8, 
        maturityAge: 3, 
        sterilityAge: 20, 

        barrierStrength: 3, 
        barrierHeight: 1.25, 
        landArea: 420, 
        landPerAddAdult: 105, 
        shelterArea: 15, 
        shelterPerAddAdult: 15, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: -15, max: 28}, 
        plantCoverage: {min: 15, max: 100}, 
        grassRange: {min: 30, max: 100}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 0, max: 40}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 20, max: 100}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 20}, 
        snowRange: {min: 0, max: 100}, 

        foodGrade1: "Hay", 
        foodGrade1Cost: 304, 
        foodGrade1CostJuv: 152, 
        foodGrade2: "+ Herbivore Pellets", 
        foodGrade2Cost: 418, 
        foodGrade2CostJuv: 209, 

        feeders: [feeders.foodTrough, feeders.wallFeeder, feeders.groundWaterFountain, feeders.waterPipe], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.barrelFeederHanging, foodEnrichment.barrelFeederLarge, foodEnrichment.grazingBallFeeder, foodEnrichment.hangingGrazerFeeder, foodEnrichment.melonFeeder, foodEnrichment.scarecrowFeeder], 
        toyEnrichment: [toyEnrichment.grabBall, toyEnrichment.largeBall, toyEnrichment.mudBath, toyEnrichment.plantScreen, toyEnrichment.rubbingPillar, toyEnrichment.skittle], 
        diseases: [diseases.avianInfluenza, diseases.bordetellosis, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.cowpoxVirus, diseases.footAndMouthDisease, diseases.listeriosis, diseases.mrsa, diseases.qFever, diseases.rotavirus, diseases.salmonellosis, diseases.tetanus, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesFactSheet, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.walkingAnimals, conservationTopics.speciesReintroduction, conservationTopics.herbivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.geneticBottlenecks, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.forestEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: false, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Bushes", 
                value: 8, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Water Surface Area", 
                value: 30, 
                valueType: "m²" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Mud Bath", 
                value: 2, 
                valueType: "Units" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Brown fur and shaggy mane" 
            }, 
            standardLight: { 
                name: "Standard", 
                description: "Light brown fur and shaggy mane" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Dark brown fur and shaggy mane" 
            } 
        }, 

        colourmorphs: {
            leucistic: { 
                name: "Leucistic", 
                description: "Leucistic: White fur and shaggy mane", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/ea0effdf/Bison_European_headshot_Leucistic.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: ["", ""], 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed via Zoopedia Bundle#1 from 2026/06/23." 
    }, 

    // --- Zoopedia bundle#2 2026/06/30 ---

    // --- # 6 ---
    westernChimpanzee:{
        name: "Western Chimpanzee", 
        latin: "Pan troglodytes verus", 
        image: "/pz2/images/animals/westernChimpanzee.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvOGUzNzA5MWUvQ2hpbXBhbnplZV9XZXN0ZXJuLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6ImZmNjFiZmI3LTkwZWEtNGQwYy1iMmZhLThiNjEwNGNjOGU1MCJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/westernChimpanzee_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/8e37091e/Chimpanzee_Western_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/8e37091e/Chimpanzee_Western_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/8e37091e/Chimpanzee_Western_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/western-chimpanzee", 
        wiki: "https://en.wikipedia.org/wiki/Western_chimpanzee", 
   
        class: "Mammalia", 
        order: "Primates", 
        family: "Hominidae", 
        genus: "Pan", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatClimbProof], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.criticallyEndangered, 
  
        maxAnimalAppeal: 8500, 
        careerAccreditation: 2, 
        franchiseAccreditation: 5, 

        nativeRange: [nativeRange.africa], 
        biomes: [biomes.tropical], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup, releaseGroups.solitaryMale], 

        temperament: temperament.confident, 
        dominance: "Patriarchal dominance based on age and relations", 
        offspringDispersal: offspringDispersal.femaleOffspring, 
        matingSystem: matingSystem.promiscuous, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.average, 

        groupSizeMin: 5, 
        groupMixedMax: 15, 
        maxMalesMixed: 10, 
        maxMalesBachelor: 10, 
        maxFemalesMixed: 10, 
        maxFemalesBachelor: 15, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 8, 
        interbirthMonths: 52, 
        juvenileYears: 14, 
        adultYears: 36, 
        elderlyYears: 10, 
        maturityAge: 14, 
        sterilityAge: 50, 

        barrierStrength: 3, 
        barrierHeight: 3, 
        landArea: 780, 
        landPerAddAdult: 50, 
        shelterArea: 10, 
        shelterPerAddAdult: 10, 
        climbableArea: 80, 
        climbablePerAddAdult: 30, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: 18, max: 33}, 
        plantCoverage: {min: 15, max: 100}, 
        grassRange: null, 
        grassShort: {min: 20, max: 100}, 
        grassLong: null, 
        sandRange: {min: 0, max: 20}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 10, max: 80}, 
        rockRange: {min: 0, max: 40}, 
        waterloggedRange: {min: 0, max: 10}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Leafy Greens and Vegetables", 
        foodGrade1Cost: 1221, 
        foodGrade1CostJuv: 610.5, 
        foodGrade2: "+ Nutritionally Complete Biscuits", 
        foodGrade2Cost: 1733, 
        foodGrade2CostJuv: 866.5, 

        feeders: [feeders.arborealFeedingPlatform, feeders.groundWaterFountain], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.blockofFrozenFruit, foodEnrichment.fixedRollerFeederSmall, foodEnrichment.forageBox, foodEnrichment.fruitSpikeTree, foodEnrichment.melonFeeder, foodEnrichment.naturalTermiteMound, foodEnrichment.suspendedForager, foodEnrichment.termiteMound, foodEnrichment.toolPuzzleFeeder], 
        toyEnrichment: [toyEnrichment.blockofIce, toyEnrichment.bobbin, toyEnrichment.bobbinDrum, toyEnrichment.curioBall, toyEnrichment.grabBall, toyEnrichment.mirrorMobile, toyEnrichment.musicalKeyboard, toyEnrichment.smallBall, toyEnrichment.stuffedPandaLarge], 
        diseases: [diseases.avianInfluenza, diseases.bordetellosis, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.cowpoxVirus, diseases.glanders, diseases.hepatitisA, diseases.listeriosis, diseases.mpox, diseases.mrsa, diseases.qFever, diseases.rotavirus, diseases.salmonellosis, diseases.simianHaemorrhagicFever, diseases.tetanus, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.strongAnimals, conservationTopics.omnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.habitatLoss, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.deforestation, conservationTopics.rainforestEcosystemAmbience], 

        cohabitation: true, 
        releasable: false, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: false, 
        canWade: false, 
        canSwim: false, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Tool Puzzle Feeder", 
                value: 1, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Trees", 
                value: 5, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Climbable", 
                value: 20, 
                valueType: "Objects" 
            } 
        },

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Black hairs and brown-pink skin" 
            }, 
            standardLight: { 
                name: "Standard", 
                description: "Black hairs and pink skin" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Black hairs and brown skin" 
            } 
        }, 

        colourmorphs: {
            leucistic: { 
                name: "Leucistic", 
                description: "Leucistic: White hairs and pink skin", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/8e37091e/Chimpanzee_Western_headshot_Albino.png" 
            }, 
            darkerVariation: { 
                name: "Darker Variation", 
                description: "Black hairs and dark brown skin", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/8e37091e/Chimpanzee_Western_headshot_Melanistic.png" 
            } 
        }, 

        thrivingRelationships: null, 
        neutralRelationships: [""], 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed in the PZ2 trailer on 2026/05/28 and confirmed on the official website news and Instagram the same day, was part of Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 7 ---
    saltwaterCrocodile:{
        name: "Saltwater Crocodile", 
        latin: "Crocodylus porosus", 
        image: "/pz2/images/animals/saltwaterCrocodile.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNGQ1M2Y3YmQvQ3JvY29kaWxlX1NhbHR3YXRlci5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb250YWluIn0sInZlcnNpb24iOiI4ODNhZjRiZC04YzRjLTQxNDMtODhmMC0xYjg4NDJkODg2MDEifX0=", 
        headshot: "/pz2/images/animal_headshots/saltwaterCrocodile_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/4d53f7bd/Crocodile_Saltwater_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/4d53f7bd/Crocodile_Saltwater_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/4d53f7bd/Crocodile_Saltwater_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/saltwater-crocodile", 
        wiki: "https://en.wikipedia.org/wiki/Saltwater_crocodile", 
   
        class: "Reptilia", 
        order: "Crocodilia", 
        family: "Crocodylidae", 
        genus: "Crocodylus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitat], 
        cohabitationOptions: cohabitationOptions.none, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 3000, 
        careerAccreditation: 3, 
        franchiseAccreditation: 2, 

        nativeRange: [nativeRange.asia, nativeRange.oceania], 
        biomes: [biomes.tropical, biomes.mangrove, biomes.estuarine], 
        wildlifeReserves: [wildlifeReserves.sumatraReserve], 
        ecosystems: [ecosystems.forestSwamp, ecosystems.river], 
        speciesRoles: [speciesRoles.predators], 
        rolesRequired: [speciesRoles.mediumPrey], 
        releaseGroups: [releaseGroups.femaleGroup, releaseGroups.solitaryMale], 

        temperament: temperament.confident, 
        dominance: "Males are territorial", 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.polygynous, 
        matingSeason: [matingSeason.spring], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 7, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 6, 
        maxFemalesBachelor: 7, 

        offspringPerMating: {min: 1, max: 4}, 
        preBirthMonths: 3, 
        interbirthMonths: 11, 
        juvenileYears: 14, 
        adultYears: 50, 
        elderlyYears: 50, 
        maturityAge: 14, 
        sterilityAge: "Death", 

        barrierStrength: 3, 
        barrierHeight: 1, 
        landArea: 155, 
        landPerAddAdult: 15, 
        shelterArea: 0, 
        shelterPerAddAdult: 0, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 75, 
        waterPerAddAdult: 25, 
        deepWaterArea: 30, 
        deepWaterPerAddAdult: 7.5, 
        diveDepth: 0, 

        temperatureRange: {min: 18, max: 33}, 
        plantCoverage: {min: 0, max: 60}, 
        grassRange: null, 
        grassShort: {min: 0, max: 50}, 
        grassLong: null, 
        sandRange: {min: 30, max: 100}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 20, max: 70}, 
        rockRange: {min: 0, max: 40}, 
        waterloggedRange: {min: 0, max: 100}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Nutritionally Complete Meat", 
        foodGrade1Cost: 391, 
        foodGrade1CostJuv: 195.5, 
        foodGrade2: "+ Small Carcasses", 
        foodGrade2Cost: 545, 
        foodGrade2CostJuv: 272.5, 

        feeders: [feeders.foodTray, feeders.aquaticFeederFish, feeders.groundWaterFountain], 
        shelters: [shelters.moundNestLarge, shelters.jettyBeddingPlatform, shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.bambooFeeder, foodEnrichment.blockofFrozenFish, foodEnrichment.frozenBloodPumpkin, foodEnrichment.restraintFeeder], 
        toyEnrichment: [toyEnrichment.mudBath, toyEnrichment.platformFloats, toyEnrichment.rubberDuck, toyEnrichment.rubbingPad, toyEnrichment.rubbingPadBark, toyEnrichment.smallBall, toyEnrichment.smallBubbleMachine], 
        diseases: [diseases.nematodiasis, diseases.nileCrocodilePoxvirus, diseases.salmonellosis, diseases.streptococcosis, diseases.ulcerativeDermatitis, diseases.ulcerativeStomatitis, diseases.westNileVirus], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.herpetologyTalk, conservationTopics.reptileEvolution, conservationTopics.strongAnimals, conservationTopics.carnivoreDiet, conservationTopics.nocturnalBehaviour, conservationTopics.habitatLoss, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.wetlandEcosystemAmbience], 

        cohabitation: false, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: true, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: true, 

        thrivingRequirements: {
            req1: { 
                requirement: "Shelter Space", 
                value: 40, 
                valueType: "m²" 
            }, 
            req2: { 
                requirement: "Semi-Aquatic", 
                value: 8, 
                valueType: "Objects" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Platform Floats", 
                value: 1, 
                valueType: "Units" 
            }, 
            req5: { 
                requirement: "Aquatic Feeder - Fish", 
                value: 1, 
                valueType: "Units" 
            } 
        },

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Green-grey scaled skin with dark markings" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Grey scaled skin with dark markings" 
            } 
        }, 

        colourmorphs: {
            albino: { 
                name: "Albino", 
                description: "Albino: Off-white scaled skin with dark green markings", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/4d53f7bd/Crocodile_Saltwater_headshot_Albino.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed in the PZ2 trailer on 2026/05/28 and confirmed on Instagram on 2026/06/02, was part of Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 8 ---
    commonHippopotamus:{
        name: "Common Hippopotamus", 
        latin: "Hippopotamus amphibius", 
        image: "/pz2/images/animals/commonHippopotamus.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNWNhOTg2YzAvSGlwcG9wb3RhbXVzX0NvbW1vbi5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb250YWluIn0sInZlcnNpb24iOiI4ODNhZjRiZC04YzRjLTQxNDMtODhmMC0xYjg4NDJkODg2MDEifX0=", 
        headshot: "/pz2/images/animal_headshots/commonHippopotamus_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/5ca986c0/Hippopotamus_Common_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/5ca986c0/Hippopotamus_Common_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/5ca986c0/Hippopotamus_Common_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/common-hippopotamus", 
        wiki: "https://en.wikipedia.org/wiki/Hippopotamus", 
   
        class: "Mammalia", 
        order: "Artiodactyla", 
        family: "Hippopotamidae", 
        genus: "Hippopotamus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitat], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.vulnerable, 
  
        maxAnimalAppeal: 5500, 
        careerAccreditation: 3, 
        franchiseAccreditation: 3, 

        nativeRange: [nativeRange.africa], 
        biomes: [biomes.grassland, biomes.wetlands, biomes.lakesRivers], 
        wildlifeReserves: [wildlifeReserves.greatRiftValleyReserve, wildlifeReserves.tanzaniaReserve], 
        ecosystems: [ecosystems.swamp], 
        speciesRoles: [speciesRoles.grazers, speciesRoles.wetlandEngineers], 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup, releaseGroups.solitaryMale], 

        temperament: temperament.confident, 
        dominance: "Males are dominant", 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.polygynous, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.average, 

        groupSizeMin: 3, 
        groupMixedMax: 30, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 3, 
        maxFemalesMixed: 29, 
        maxFemalesBachelor: 30, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 8, 
        interbirthMonths: 16, 
        juvenileYears: 7, 
        adultYears: 33, 
        elderlyYears: 15, 
        maturityAge: 7, 
        sterilityAge: 40, 

        barrierStrength: 4, 
        barrierHeight: 2, 
        landArea: 502, 
        landPerAddAdult: 251, 
        shelterArea: 35, 
        shelterPerAddAdult: 35, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 502, 
        waterPerAddAdult: 251, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: 14, max: 36}, 
        plantCoverage: {min: 0, max: 30}, 
        grassRange: {min: 20, max: 60}, 
        grassShort: null, 
        grassLong: {min: 15, max: 60}, 
        sandRange: {min: 20, max: 60}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 0, max: 60}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 20, max: 60}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Young Branches and Leaves", 
        foodGrade1Cost: 728, 
        foodGrade1CostJuv: 364, 
        foodGrade2: "+ Hay", 
        foodGrade2Cost: 1018, 
        foodGrade2CostJuv: 509, 

        feeders: [feeders.foodTrough, feeders.waterPipe], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.barrelFeederHanging, foodEnrichment.barrelFeederLarge, foodEnrichment.melonFeeder], 
        toyEnrichment: [toyEnrichment.gyro, toyEnrichment.largeTyre, toyEnrichment.mudBath, toyEnrichment.plantScreen, toyEnrichment.rubbingPillar, toyEnrichment.skittle, toyEnrichment.sprinkler, toyEnrichment.waterfallAndMetalFrame, toyEnrichment.bubbleBlowerAirstone], 
        diseases: [diseases.avianInfluenza, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.cowpoxVirus, diseases.footAndMouthDisease, diseases.listeriosis, diseases.mrsa, diseases.rotavirus, diseases.salmonellosis, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.vocalAnimals, conservationTopics.ecologicalRestoration, conservationTopics.herbivoreDiet, conservationTopics.nocturnalBehaviour, conservationTopics.habitatLoss, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.humanWildlifeConflict, conservationTopics.wetlandEcosystemAmbience], 

        cohabitation: true, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Waterfall And Metal Frame", 
                value: 2, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Aquatic", 
                value: 30, 
                valueType: "Objects" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Rubbing Pillar", 
                value: 3, 
                valueType: "Units" 
            }, 
            req5: { 
                requirement: "Barrel Feeder - Hanging", 
                value: 2, 
                valueType: "Units" 
            } 
        },

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Grey-brown skin with pink mottling" 
            } 
        }, 

        colourmorphs: {
            leucistic: { 
                name: "Leucistic", 
                description: "Leucistic: Pink skin", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/5ca986c0/Hippopotamus_Common_headshot_Albino.png" 
            }, 
            leucisticMottling: { 
                name: "Leucistic", 
                description: "Leucistic: Pink skin with black mottling", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/5ca986c0/Hippopotamus_Common_headshot_Leucistic.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Teased during the PZ2 trailer on 2026/05/28 with the pre-order bonus and confirmed in PC Gamer Magazine on 2026/06/18, was part of Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 9 ---
    goodfellowsTreeKangaroo:{
        name: "Goodfellow's Tree-Kangaroo", 
        latin: "Dendrolagus goodfellowi", 
        image: "/pz2/images/animals/goodfellowsTreeKangaroo.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvOTVhNjg3Y2QvS2FuZ2Fyb29fR29vZGZlbGxvd3NUcmVlLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6Ijg4M2FmNGJkLThjNGMtNDE0My04OGYwLTFiODg0MmQ4ODYwMSJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/goodfellowsTreeKangaroo_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/95a687cd/Kangaroo_GoodfellowsTree_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/95a687cd/Kangaroo_GoodfellowsTree_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/95a687cd/Kangaroo_GoodfellowsTree_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/goodfellow-s-tree-kangaroo", 
        wiki: "https://en.wikipedia.org/wiki/Goodfellow%27s_tree-kangaroo", 
   
        class: "Mammalia", 
        order: "Diprotodontia", 
        family: "Macropodidae", 
        genus: "Dendrolagus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatClimbProof], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.endangered, 
  
        maxAnimalAppeal: 4000, 
        careerAccreditation: 2, 
        franchiseAccreditation: 4, 

        nativeRange: [nativeRange.oceania], 
        biomes: [biomes.tropical], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.breedingPartners, releaseGroups.femaleGroup, releaseGroups.solitaryMale], 

        temperament: temperament.neutral, 
        dominance: "None", 
        offspringDispersal: offspringDispersal.allOffspring, 
        matingSystem: matingSystem.polygynous, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 2, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 1, 
        maxFemalesBachelor: 1, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 9.8, 
        interbirthMonths: 14, 
        juvenileYears: 3, 
        adultYears: 6, 
        elderlyYears: 11, 
        maturityAge: 3, 
        sterilityAge: "Death", 

        barrierStrength: 1, 
        barrierHeight: 1, 
        landArea: 200, 
        landPerAddAdult: 50, 
        shelterArea: 7.5, 
        shelterPerAddAdult: 7.5, 
        climbableArea: 20, 
        climbablePerAddAdult: 10, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: 18, max: 33}, 
        plantCoverage: {min: 40, max: 100}, 
        grassRange: {min: 0, max: 30}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 0, max: 50}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 50, max: 100}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 0}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Leafy Greens and Vegetables", 
        foodGrade1Cost: 541, 
        foodGrade1CostJuv: 270.5, 
        foodGrade2: "+ Nutritionally Complete Biscuits", 
        foodGrade2Cost: 760, 
        foodGrade2CostJuv: 380, 

        feeders: [feeders.arborealFeedingPlatform, feeders.groundWaterFountain], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.fruitSpikeTree, foodEnrichment.melonFeeder, foodEnrichment.suspendedForager, foodEnrichment.suspendedPerchFeeder, foodEnrichment.suspendedPuzzleFeeder], 
        toyEnrichment: [toyEnrichment.rattle, toyEnrichment.suspendedPerch, toyEnrichment.tennisBall], 
        diseases: [diseases.avianInfluenza, diseases.bordetellosis, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.cowpoxVirus, diseases.glanders, diseases.hepatitisA, diseases.listeriosis, diseases.mpox, diseases.qFever, diseases.rotavirus, diseases.salmonellosis, diseases.simianHaemorrhagicFever, diseases.tetanus, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.herbivoreDiet, conservationTopics.nocturnalBehaviour, conservationTopics.habitatLoss, conservationTopics.traditionalMedicine, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.rainforestEcosystemAmbience], 

        cohabitation: true, 
        releasable: false, 
        guestsEnter: true, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: false, 
        canWade: false, 
        canSwim: false, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Trees", 
                value: 2, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Heavy Soil", 
                value: 30, 
                valueType: "m²" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Suspended Puzzle Feeder", 
                value: 2, 
                valueType: "Units" 
            } 
        },

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Rufous back with maroon markings, cream front and limbs" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Teased during the PZ2 trailer on 2026/05/28 on a zookeeper's tablet and confirmed via Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 10 ---
    redPanda:{
        name: "Red Panda", 
        latin: "Ailurus fulgens", 
        image: "/pz2/images/animals/redPanda.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNDc4Njc2YzEvUGFuZGFfUmVkLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6Ijg4M2FmNGJkLThjNGMtNDE0My04OGYwLTFiODg0MmQ4ODYwMSJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/redPanda_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/478676c1/Panda_Red_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/478676c1/Panda_Red_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/478676c1/Panda_Red_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/red-panda", 
        wiki: "https://en.wikipedia.org/wiki/Red_panda", 
   
        class: "Mammalia", 
        order: "Carnivora", 
        family: "Ailuridae", 
        genus: "Ailurus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatClimbProof], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.endangered, 
  
        maxAnimalAppeal: 5500, 
        careerAccreditation: 3, 
        franchiseAccreditation: 4, 

        nativeRange: [nativeRange.asia], 
        biomes: [biomes.temperate, biomes.taiga], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.breedingPartners, releaseGroups.femaleGroup, releaseGroups.solitaryMale], 

        temperament: temperament.neutral, 
        dominance: "None", 
        offspringDispersal: offspringDispersal.allOffspring, 
        matingSystem: matingSystem.promiscuous, 
        matingSeason: [matingSeason.spring], 
        reproductionDifficulty: reproductionDifficulty.veryEasy, 

        groupSizeMin: 1, 
        groupMixedMax: 2, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 1, 
        maxFemalesBachelor: 1, 

        offspringPerMating: {min: 1, max: 3}, 
        preBirthMonths: 4.3, 
        interbirthMonths: 8, 
        juvenileYears: 1, 
        adultYears: 5, 
        elderlyYears: 8, 
        maturityAge: 1.5, 
        sterilityAge: "Death", 

        barrierStrength: 2, 
        barrierHeight: 3, 
        landArea: 160, 
        landPerAddAdult: 80, 
        shelterArea: 5, 
        shelterPerAddAdult: 5, 
        climbableArea: 60, 
        climbablePerAddAdult: 20, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: -6, max: 28}, 
        plantCoverage: {min: 35, max: 100}, 
        grassRange: {min: 50, max: 100}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 0, max: 20}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 0, max: 50}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 5}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Bamboo", 
        foodGrade1Cost: 756, 
        foodGrade1CostJuv: 378, 
        foodGrade2: "+ Nutritionally Complete Biscuits", 
        foodGrade2Cost: 1066, 
        foodGrade2CostJuv: 533, 

        feeders: [feeders.arborealFeedingPlatform, feeders.groundWaterFountain], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.dogBall, foodEnrichment.forageBox, foodEnrichment.foragingWall, foodEnrichment.melonFeeder, foodEnrichment.treeForager], 
        toyEnrichment: [toyEnrichment.cardboardBox, toyEnrichment.mirrorMobile, toyEnrichment.rubbingPad, toyEnrichment.rubbingPadBark, toyEnrichment.tennisBall], 
        diseases: [diseases.avianInfluenza, diseases.bordetellosis, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.canineDistemperVirus, diseases.cowpoxVirus, diseases.glanders, diseases.listeriosis, diseases.mrsa, diseases.rotavirus, diseases.salmonellosis, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.bambooDiet, conservationTopics.crepuscularBehaviour, conservationTopics.habitatLoss, conservationTopics.climateChange, conservationTopics.foodScarcity, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.forestEcosystemAmbience], 

        cohabitation: true, 
        releasable: false, 
        guestsEnter: true, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: false, 
        canWade: false, 
        canSwim: false, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Trees", 
                value: 4, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Water Surface Area", 
                value: 10, 
                valueType: "m²" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Rocks", 
                value: 10, 
                valueType: "Units" 
            } 
        },

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Red-orange fur with black legs and striped tail" 
            }, 
            standardLight: { 
                name: "Standard", 
                description: "Bright red fur with black legs and striped tail" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Dark red fur with black legs and striped tail" 
            } 
        }, 

        colourmorphs: {
            leucistic: { 
                name: "Leucistic", 
                description: "Leucistic: Pale red fur with black legs and faintly striped tail", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/478676c1/Panda_Red_headshot_Albino.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: [""], 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Teased on 2026/06/26 with 'Guess the Animal' and confirmed via Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 11 ---
    humpheadWrasse:{
        name: "Humphead Wrasse", 
        latin: "Cheilinus undulatus", 
        image: "/pz2/images/animals/humpheadWrasse.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvOTlhNTZmYzcvV3Jhc3NlX0h1bXBoZWFkLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6Ijg4M2FmNGJkLThjNGMtNDE0My04OGYwLTFiODg0MmQ4ODYwMSJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/humpheadWrasse_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/99a56fc7/Wrasse_Humphead_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/99a56fc7/Wrasse_Humphead_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/99a56fc7/Wrasse_Humphead_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/humphead-wrasse", 
        wiki: "https://en.wikipedia.org/wiki/Humphead_wrasse", 
   
        class: "Actinopterygii", 
        order: "Labriformes", 
        family: "Labridae", 
        genus: "Cheilinus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.aquatic, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.aquarium], 
        cohabitationOptions: cohabitationOptions.selectSpecies, 
        conservation: conservation.endangered, 
  
        maxAnimalAppeal: 2500, 
        careerAccreditation: 2, 
        franchiseAccreditation: 4, 

        nativeRange: [nativeRange.indianOcean, nativeRange.pacificOcean], 
        biomes: [biomes.openSea, biomes.reef], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.breedingPartners, releaseGroups.solitaryMale, releaseGroups.solitaryFemale], 

        temperament: temperament.confident, 
        dominance: "Dominant large adult males", 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.promiscuous, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.veryDifficult, 

        groupSizeMin: 1, 
        groupMixedMax: 10, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 9, 
        maxFemalesBachelor: 10, 

        offspringPerMating: {min: 1, max: 3}, 
        preBirthMonths: 0, 
        interbirthMonths: 24, 
        juvenileYears: 6, 
        adultYears: 22, 
        elderlyYears: 22, 
        maturityAge: 6, 
        sterilityAge: "Death", 

        barrierStrength: 2, 
        barrierHeight: 1, 
        landArea: 0, 
        landPerAddAdult: 0, 
        shelterArea: 0, 
        shelterPerAddAdult: 0, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 60, 
        deepWaterPerAddAdult: 12.5, 
        diveDepth: 0, 

        temperatureRange: {min: 22, max: 30}, 
        plantCoverage: {min: 0, max: 80}, 
        grassRange: null, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 30, max: 80}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 0, max: 50}, 
        rockRange: {min: 20, max: 70}, 
        waterloggedRange: {min: 0, max: 0}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Small Whole Fish", 
        foodGrade1Cost: 343, 
        foodGrade1CostJuv: 171.5, 
        foodGrade2: "+ Clams and Crustaceans", 
        foodGrade2Cost: 482, 
        foodGrade2CostJuv: 241, 

        salinity: salinity.saltwater, 
        feeders: [feeders.aquaticFeederFish], 
        foodEnrichment: [foodEnrichment.suspendedBait], 
        toyEnrichment: [toyEnrichment.bloodScentMarker, toyEnrichment.submarineBuoy, toyEnrichment.bubbleBlowerAirstone], 
        diseases: [diseases.amoebiasis, diseases.furunculosis, diseases.fusariosis, diseases.isopodiasis, diseases.nematodiasis, diseases.piscineMycobacteriosis, diseases.salmonellosis, diseases.streptococcosis, diseases.velvetDisease, diseases.vibriosis, diseases.viralErythrocyticNecrosis, diseases.whiteSpotDisease], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.underwaterLifeTalk, conservationTopics.rayfinnedFishEvolution, conservationTopics.swimmingAnimals, conservationTopics.carnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.habitatLoss, conservationTopics.climateChange, conservationTopics.overexploitation, conservationTopics.reefEcosystemAmbience], 

        cohabitation: true, 
        releasable: false, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: true, 
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: false, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: false, 
        canSwim: true, 
        canDive: true, 

        thrivingRequirements: {
            req1: { 
                requirement: "Rocks", 
                value: 5, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Coral", 
                value: 12, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Fine Sand", 
                value: 35, 
                valueType: "m²" 
            }, 
            req5: { 
                requirement: "Large Indo-Pacific Reef animals", 
                value: 1, 
                valueType: "Species" 
            } 
        },

        standardCoat: {
            standardMale: { 
                name: "Standard", 
                description: "Male: Green-yellow marbled body with blue-yellow head" 
            }, 
            standardFemale: { 
                name: "Standard", 
                description: "Female: Red marbled body with yellow fins and orange-blue head" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
        neutralRelationships: ["", ""], 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed in the gameplay trailer on 2026/06/07 and confirmed via Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 12 ---
    brownTrout:{
        name: "Brown Trout", 
        latin: "Salmo trutta", 
        image: "/pz2/images/animals/brownTrout.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvMGUxOTQxZGIvVHJvdXRfQnJvd24uanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4NX0sInRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiZml0IjoiY29udGFpbiJ9LCJ2ZXJzaW9uIjoiODgzYWY0YmQtOGM0Yy00MTQzLTg4ZjAtMWI4ODQyZDg4NjAxIn19", 
        headshot: "/pz2/images/animal_headshots/brownTrout_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/0e1941db/Trout_Brown_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/0e1941db/Trout_Brown_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/0e1941db/Trout_Brown_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/brown-trout", 
        wiki: "https://en.wikipedia.org/wiki/Brown_trout", 
   
        class: "Actinopterygii", 
        order: "Salmoniformes", 
        family: "Salmonidae", 
        genus: "Salmo", 

        DLC: DLC.basegame, 
        form: form.collective, 
        type: types.aquatic, 
        enclosure: [enclosures.habitat, enclosures.exhibit], 
        enclosureTypes: [enclosureTypes.aquarium, enclosureTypes.exhibitCylinder, enclosureTypes.exhibitBox], 
        cohabitationOptions: cohabitationOptions.selectSpecies, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 1000, 
        careerAccreditation: 2, 
        franchiseAccreditation: 2, 

        nativeRange: [nativeRange.europe], 
        biomes: [biomes.lakesRivers], 
        wildlifeReserves: [wildlifeReserves.scottishHighlands, wildlifeReserves.swedenReserve, wildlifeReserves.polandReserve], 
        ecosystems: [ecosystems.lakeTemperate, ecosystems.lakeTaiga, ecosystems.lakeLoch], 
        speciesRoles: [speciesRoles.underwaterPredators], 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup], 

        temperament: temperament.confident, 
        dominance: "Larger males are more dominant", 
        collectiveSize: {min: 10, max: 20}, 
        matingSeason: [matingSeason.autumn], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 5, 

        preBirthMonths: 1.9, 
        interbirthMonths: 10, 
        juvenileYears: 3, 
        adultYears: 9, 
        elderlyYears: 15, 
        maturityAge: 3, 
        sterilityAge: "Death", 

        barrierStrength: 0, 
        barrierHeight: 0, 
        landArea: 0, 
        landPerAddAdult: 0, 
        shelterArea: 0, 
        shelterPerAddAdult: 0, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 50, 
        deepWaterPerAddAdult: 15, 
        diveDepth: 0, 

        temperatureRange: {min: 12, max: 19}, 
        plantCoverage: {min: 20, max: 60}, 

        foodGrade1: "Copepods", 
        foodGrade1Cost: 125, 
        foodGrade2: "+ Algae Pellets", 
        foodGrade2Cost: 172, 

        salinity: salinity.freshwater, 
        feeders: [feeders.aquaticFeederFlakes], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.underwaterLifeTalk, conservationTopics.rayfinnedFishEvolution, conservationTopics.swimmingAnimals, conservationTopics.ecologicalRestoration, conservationTopics.carnivoreDiet, conservationTopics.crepuscularBehaviour, conservationTopics.habitatLoss, conservationTopics.climateChange, conservationTopics.invasiveSpecies, conservationTopics.freshwaterEcosystemAmbience], 

        cohabitation: true, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: true, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: false, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: false, 
        canSwim: true, 
        canDive: true, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Olive-silvery body with brown spots and pale underside" 
            } 
        }, 

        colourmorphs: {
            oliveMorph: { 
                name: "Olive Morph", 
                description: "Olive-yellow body with brown spots and pale underside", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/0e1941db/Trout_Brown_headshot_Erythristic.png" 
            }, 
            copperMorph: { 
                name: "Copper Morph", 
                description: "Copper-brown body with brown spots and pale underside", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/0e1941db/Trout_Brown_headshot_Leucistic.png" 
            } 
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed via Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 13 ---
    europeanPeacock:{
        name: "European Peacock", 
        latin: "Aglais io", 
        image: "/pz2/images/animals/europeanPeacock.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvZTU3YzYxMmUvQnV0dGVyZmx5X0V1cm9wZWFuUGVhY29jay5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb250YWluIn0sInZlcnNpb24iOiI4ODNhZjRiZC04YzRjLTQxNDMtODhmMC0xYjg4NDJkODg2MDEifX0=", 
        headshot: "/pz2/images/animal_headshots/europeanPeacock_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/e57c612e/Butterfly_EuropeanPeacock_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/e57c612e/Butterfly_EuropeanPeacock_map.png", 
        illustration: "none", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/european-peacock", 
        wiki: "https://en.wikipedia.org/wiki/Aglais_io", 
   
        class: "Insecta", 
        order: "Lepidoptera", 
        family: "Nymphalidae", 
        genus: "Aglais", 

        DLC: DLC.basegame, 
        form: form.collective, 
        type: types.avian, 
        enclosure: [enclosures.exhibit], 
        enclosureTypes: [enclosureTypes.exhibitWalkthrough], 
        cohabitationOptions: cohabitationOptions.selectSpecies, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 1500, 
        careerAccreditation: 4, 
        franchiseAccreditation: 1, 

        nativeRange: [nativeRange.europe, nativeRange.asia], 
        biomes: [biomes.grassland, biomes.temperate], 

        dominance: "Males are territorial", 
        collectiveSize: {min: 1, max: 15}, 
        matingSeason: [matingSeason.summer], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 8, 

        offspringPerMating: {min: 1, max: 1}, 
        preBirthMonths: 1.2, 
        interbirthMonths: 11, 
        juvenileYears: 0, 
        adultYears: 0, 
        elderlyYears: 1, 
        maturityAge: 0.1, 
        sterilityAge: "Death", 

        temperatureRange: {min: 18, max: 25}, 
        humidityRange: {min: 60, max: 80}, 

        foodGrade1: null, 
        foodGrade1Cost: 225, 
        foodGrade1CostJuv: null, 

        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theArthropodWorldTalk, conservationTopics.insectEvolution, conservationTopics.nectarivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.climateChange, conservationTopics.beePopulationDecline, conservationTopics.grasslandEcosystemAmbience], 

        cohabitation: true, 
        releasable: false, 
        guestsEnter: true, 
        burrower: false, 
        groupDivision: true, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: false, 
        canClimb: true, 
        canFly: true, 
        canWade: false, 
        canSwim: false, 
        canDive: false, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Brown-rimmed red wings with blue eye-spots and black markings, brown body" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: ["", "", "", "", ""], 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed via Zoopedia Bundle#2 from 2026/06/30." 
    }, 
    // --- # 14 ---
    danubeCrestedNewt:{
        name: "Danube Crested Newt", 
        latin: "Triturus dobrogicus", 
        image: "/pz2/images/animals/danubeCrestedNewt.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvMzE0NjUyMjIvU2FsYW1hbmRlcl9EYW51YmVDcmVzdGVkTmV3dC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb250YWluIn0sInZlcnNpb24iOiI4ODNhZjRiZC04YzRjLTQxNDMtODhmMC0xYjg4NDJkODg2MDEifX0=", 
        headshot: "/pz2/images/animal_headshots/danubeCrestedNewt_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/31465222/Salamander_DanubeCrestedNewt_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/31465222/Salamander_DanubeCrestedNewt_map.png", 
        illustration: "none", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/danube-crested-newt", 
        wiki: "https://en.wikipedia.org/wiki/Danube_crested_newt", 
   
        class: "Amphibia", 
        order: "Urodela", 
        family: "Salamandridae", 
        genus: "Triturus", 

        DLC: DLC.basegame, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.exhibit], 
        enclosureTypes: [enclosureTypes.exhibitCylinder, enclosureTypes.exhibitBox], 
        exhibitTerrain: [exhibitTerrain.aquaticFull, exhibitTerrain.aquaticHalf, exhibitTerrain.aquaticQuarter], 
        cohabitationOptions: cohabitationOptions.none, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 2500, 
        careerAccreditation: 3, 
        franchiseAccreditation: 1, 

        nativeRange: [nativeRange.europe], 
        biomes: [biomes.wetlands, biomes.lakesRivers], 

        dominance: "None", 
        matingSeason: [matingSeason.spring], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 6, 

        offspringPerMating: {min: 1, max: 3}, 
        preBirthMonths: 1.2, 
        interbirthMonths: 11, 
        juvenileYears: 3, 
        adultYears: 4, 
        elderlyYears: 10, 
        maturityAge: 3, 
        sterilityAge: "Death", 

        temperatureRange: {min: 12, max: 25}, 
        humidityRange: {min: 55, max: 75}, 

        foodGrade1: null, 
        foodGrade1Cost: 225, 
        foodGrade1CostJuv: null, 

        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.herpetologyTalk, conservationTopics.amphibianEvolution, conservationTopics.amphibianExtinctionCrisis, conservationTopics.carnivoreDiet, conservationTopics.nocturnalBehaviour, conservationTopics.infectiousDisease, conservationTopics.wetlandEcosystemAmbience], 

        cohabitation: false, 
        releasable: false, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: true, 
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: true, 
        canSwim: true, 
        canDive: false, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Olive body with black markings, orange underside and legs" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
        name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Revealed via Zoopedia Bundle#2 from 2026/06/30." 
    }, 

// --- DELUXE DLC ANIMALS ---

    // --- # 131 ---
    goldenEagle:{
        name: "Golden Eagle", 
        latin: "Aquila chrysaetos", 
        image: "/pz2/images/animals/goldenEagle.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNzUzYTM5MGEvRWFnbGVfR29sZGVuLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6ImUwNjYwZWJlLWNlNmItNDgwNS05M2QyLWNhZDk3YzlkYTJhNSJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/goldenEagle_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/753a390a/Eagle_Golden_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/753a390a/Eagle_Golden_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/753a390a/Eagle_Golden_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/golden-eagle", 
        wiki: "https://en.wikipedia.org/wiki/Golden_eagle", 
   
        class: "Aves", 
        order: "Accipitriformes", 
        family: "Accipitridae", 
        genus: "Aquila", 

        DLC: DLC.deluxe, 
        form: form.individual, 
        type: types.avian, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatRoofed], 
        cohabitationOptions: cohabitationOptions.none, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 5500, 
        careerAccreditation: 4, 
        franchiseAccreditation: 3, 

        nativeRange: [nativeRange.africa, nativeRange.europe, nativeRange.asia, nativeRange.northAmerica], 
        biomes: [biomes.desert, biomes.grassland, biomes.temperate, biomes.taiga, biomes.tundra], 
        wildlifeReserves: [wildlifeReserves.scottishHighlands, wildlifeReserves.swedenReserve, wildlifeReserves.polandReserve], 
        ecosystems: [ecosystems.lakeTemperate, ecosystems.lakeTaiga, ecosystems.lakeLoch], 
        speciesRoles: [speciesRoles.predators, speciesRoles.scavengers, speciesRoles.aerialForagers], 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.breedingPartners], 

        temperament: temperament.shy, 
        dominance: "Size and age dominates at feeding sites", 
        offspringDispersal: offspringDispersal.allOffspring, 
        matingSystem: matingSystem.monogamous, 
        matingSeason: [matingSeason.spring], 
        reproductionDifficulty: reproductionDifficulty.difficult, 

        groupSizeMin: 1, 
        groupMixedMax: 2, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 1, 
        maxFemalesBachelor: 1, 

        offspringPerMating: {min: 1, max: 3}, 
        preBirthMonths: 1.6, 
        interbirthMonths: 12, 
        juvenileYears: 5, 
        adultYears: 11, 
        elderlyYears: 24, 
        maturityAge: 5, 
        sterilityAge: "Death", 

        barrierStrength: 2, 
        barrierHeight: 1, 
        landArea: 400, 
        landPerAddAdult: 200, 
        shelterArea: 10, 
        shelterPerAddAdult: 10, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 50, 
        flyablePerAddAdult: 50, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: -30, max: 30}, 
        plantCoverage: {min: 10, max: 50}, 
        grassRange: {min: 0, max: 30}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 20, max: 100}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 20, max: 100}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 0}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Nutritionally Complete Meat", 
        foodGrade1Cost: 775, 
        foodGrade1CostJuv: 387.5, 
        foodGrade2: "+ Small Carcasses", 
        foodGrade2Cost: 1096, 
        foodGrade2CostJuv: 548, 

        feeders: [feeders.foodTray, feeders.groundWaterFountain], 
        shelters: [shelters.cupNestLarge, shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.bambooFeeder, foodEnrichment.blockofFrozenFish, foodEnrichment.perchFeeder, foodEnrichment.ribbedFeeder], 
        toyEnrichment: [toyEnrichment.mirrorMobile, toyEnrichment.perch01, toyEnrichment.perch02, toyEnrichment.rubberSnake, toyEnrichment.shreddingPerch], 
        diseases: [diseases.aspergillosis, diseases.avianHerpesvirus, diseases.avianInfluenza, diseases.avianTuberculosis, diseases.avipoxvirus, diseases.candidiasis, diseases.featherLice, diseases.mareksDisease, diseases.nematodiasis, diseases.newcastleDisease, diseases.salmonellosis, diseases.usutuVirus, diseases.westNileVirus], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.livesofBirdsTalk, conservationTopics.birdEvolution, conservationTopics.flyingAnimals, conservationTopics.carnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.habitatLoss, conservationTopics.climateChange, conservationTopics.wildlifePoisoning, conservationTopics.mountainEcosystemAmbience], 
  
        cohabitation: false, 
        releasable: true, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: true, 
        brooding: true, 
        nestbound: true, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: true, 
        canWade: true, 
        canSwim: false, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Climbable", 
                value: 10, 
                valueType: "Objects" 
            }, 
            req2: { 
                requirement: "Rocks", 
                value: 10, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Cup Nest - Large", 
                value: 3, 
                valueType: "Units" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Dark brown feathers, golden head" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Confirmed in the PZ2 trailer on 2026/05/28 - the poster bird of the Deluxe Edition, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 132 ---
    goldenLionTamarin:{
        name: "Golden Lion Tamarin", 
        latin: "Leontopithecus rosalia", 
        image: "/pz2/images/animals/goldenLionTamarin.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvYzg5Mzg1N2MvTW9ua2V5X0dvbGRlbkxpb25UYW1hcmluLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6ImZkMzk2NDFmLTM5MTItNDgzOS04MDZkLTg3N2VkZjI2ZWQ1NCJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/goldenLionTamarin_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c893857c/Monkey_GoldenLionTamarin_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c893857c/Monkey_GoldenLionTamarin_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/c893857c/Monkey_GoldenLionTamarin_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/golden-lion-tamarin", 
        wiki: "https://en.wikipedia.org/wiki/Golden_lion_tamarin", 
   
        class: "Mammalia", 
        order: "Primates", 
        family: "Callitrichidae", 
        genus: "Leontopithecus", 

        DLC: DLC.deluxe, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.habitatClimbProof], 
        cohabitationOptions: cohabitationOptions.nonPredatory, 
        conservation: conservation.endangered, 
  
        maxAnimalAppeal: 2500, 
        careerAccreditation: 3, 
        franchiseAccreditation: 3, 

        nativeRange: [nativeRange.southAmerica], 
        biomes: [biomes.tropical], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup, releaseGroups.breedingPartners], 

        temperament: temperament.neutral, 
        dominance: "Regulated by dominant breeding pair", 
        alphaDominance: alphaDominance.alphaPair, 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.monogamous, 
        matingSeason: [matingSeason.autumn, matingSeason.winter], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 2, 
        groupMixedMax: 8, 
        maxMalesMixed: 7, 
        maxMalesBachelor: 3, 
        maxFemalesMixed: 7, 
        maxFemalesBachelor: 3, 

        offspringPerMating: {min: 1, max: 3}, 
        preBirthMonths: 4.3, 
        interbirthMonths: 8, 
        juvenileYears: 3, 
        adultYears: 6, 
        elderlyYears: 11, 
        maturityAge: 3, 
        sterilityAge: "Death", 

        barrierStrength: 1, 
        barrierHeight: 3, 
        landArea: 55, 
        landPerAddAdult: 15, 
        shelterArea: 2, 
        shelterPerAddAdult: 2, 
        climbableArea: 15, 
        climbablePerAddAdult: 5, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 0, 
        deepWaterPerAddAdult: 0, 
        diveDepth: 0, 

        temperatureRange: {min: 18, max: 33}, 
        plantCoverage: {min: 40, max: 100}, 
        grassRange: null, 
        grassShort: {min: 0, max: 40}, 
        grassLong: null, 
        sandRange: {min: 0, max: 10}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 30, max: 90}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 0}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Nutritionally Complete Biscuits", 
        foodGrade1Cost: 317, 
        foodGrade1CostJuv: 158.5, 
        foodGrade2: "+ Fruit", 
        foodGrade2Cost: 439, 
        foodGrade2CostJuv: 219.5, 

        feeders: [feeders.arborealFeedingPlatform, feeders.groundWaterFountain], 
        shelters: [shelters.habitatBedding, shelters.habitatBeddingLeaves], 
        foodEnrichment: [foodEnrichment.forageBox, foodEnrichment.fruitSpikeTree, foodEnrichment.melonFeeder, foodEnrichment.suspendedForager, foodEnrichment.suspendedPuzzleFeeder], 
        toyEnrichment: [toyEnrichment.cardboardBox, toyEnrichment.musicalKeyboard, toyEnrichment.tennisBall, toyEnrichment.suspendedPerch], 
        diseases: [diseases.avianInfluenza, diseases.bordetellosis, diseases.botulismToxicosis, diseases.campylobacteriosis, diseases.cowpoxVirus, diseases.glanders, diseases.hepatitisA, diseases.listeriosis, diseases.mpox, diseases.qFever, diseases.rotavirus, diseases.salmonellosis, diseases.simianHaemorrhagicFever, diseases.tetanus, diseases.tularemia], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.theAnimalKingdomTalk, conservationTopics.mammalEvolution, conservationTopics.speciesReintroduction, conservationTopics.ecologicalRestoration, conservationTopics.omnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.habitatLoss, conservationTopics.geneticBottlenecks, conservationTopics.rainforestEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: false, 
        guestsEnter: true, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canJump: true, 
        canClimb: true, 
        canFly: false, 
        canWade: false, 
        canSwim: false, 
        canDive: false, 

        thrivingRequirements: {
            req1: { 
                requirement: "Climbable", 
                value: 10, 
                valueType: "Objects" 
            }, 
            req2: { 
                requirement: "Suspended Forager", 
                value: 3, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Native Plants", 
                value: 50, 
                valueType: "%" 
            }, 
            req5: { 
                requirement: "Shelter Space", 
                value: 50, 
                valueType: "m²" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Cream and red fur and mane" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: ["", ""], 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Confirmed in the PZ2 trailer on 2026/05/28, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 133 ---
    greatHammerhead:{
        name: "Great Hammerhead", 
        latin: "Sphyrna mokarran", 
        image: "/pz2/images/animals/greatHammerhead.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNmIzMDUwMDcvU2hhcmtfR3JlYXRIYW1tZXJoZWFkLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6ImZkMzk2NDFmLTM5MTItNDgzOS04MDZkLTg3N2VkZjI2ZWQ1NCJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/greatHammerhead_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/6b305007/Shark_GreatHammerhead_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/6b305007/Shark_GreatHammerhead_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/6b305007/Shark_GreatHammerhead_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/great-hammerhead", 
        wiki: "https://en.wikipedia.org/wiki/Great_hammerhead", 
   
        class: "Chondrichthyes", 
        order: "Carcharhiniformes", 
        family: "Sphyrnidae", 
        genus: "Sphyrna", 

        DLC: DLC.deluxe, 
        form: form.individual, 
        type: types.aquatic, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.aquarium], 
        cohabitationOptions: cohabitationOptions.selectSpecies, 
        conservation: conservation.criticallyEndangered, 
  
        maxAnimalAppeal: 7000, 
        careerAccreditation: 4, 
        franchiseAccreditation: 5, 

        nativeRange: [nativeRange.atlanticOcean, nativeRange.indianOcean, nativeRange.pacificOcean], 
        biomes: [biomes.openSea, biomes.reef], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.solitaryMale, releaseGroups.solitaryFemale], 

        temperament: temperament.confident, 
        dominance: "Larger sharks may attack, kill and eat smaller individuals", 
        offspringDispersal: offspringDispersal.none, 
        matingSystem: matingSystem.promiscuous, 
        matingSeason: [matingSeason.spring, matingSeason.summer], 
        reproductionDifficulty: reproductionDifficulty.veryDifficult, 

        groupSizeMin: 1, 
        groupMixedMax: 2, 
        maxMalesMixed: 1, 
        maxMalesBachelor: 1, 
        maxFemalesMixed: 1, 
        maxFemalesBachelor: 1, 

        offspringPerMating: {min: 1, max: 6}, 
        preBirthMonths: 11, 
        interbirthMonths: 13, 
        juvenileYears: 15, 
        adultYears: 17, 
        elderlyYears: 12, 
        maturityAge: 15, 
        sterilityAge: "Death", 

        barrierStrength: 3, 
        barrierHeight: 1, 
        landArea: 0, 
        landPerAddAdult: 0, 
        shelterArea: 0, 
        shelterPerAddAdult: 0, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 960, 
        deepWaterPerAddAdult: 240, 
        diveDepth: 0, 

        temperatureRange: {min: 20, max: 28}, 
        plantCoverage: {min: 0, max: 70}, 
        grassRange: {min: 0, max: 0}, 
        grassShort: null, 
        grassLong: null, 
        sandRange: {min: 20, max: 100}, 
        sandFine: null, 
        sandCoarse: null, 
        soilRange: {min: 0, max: 100}, 
        rockRange: {min: 0, max: 20}, 
        waterloggedRange: {min: 0, max: 0}, 
        snowRange: {min: 0, max: 0}, 

        foodGrade1: "Whole Fish", 
        foodGrade1Cost: 1064, 
        foodGrade1CostJuv: 532, 
        foodGrade2: "+ Squid", 
        foodGrade2Cost: 1526, 
        foodGrade2CostJuv: 763, 

        salinity: salinity.saltwater, 
        feeders: [feeders.aquaticFeederFish], 
        foodEnrichment: [foodEnrichment.suspendedBait], 
        toyEnrichment: [toyEnrichment.bloodScentMarker, toyEnrichment.submarineBuoy, toyEnrichment.bubbleBlowerAirstone, toyEnrichment.latticeBall, toyEnrichment.waterHoop], 
        diseases: [diseases.amoebiasis, diseases.furunculosis, diseases.fusariosis, diseases.isopodiasis, diseases.nematodiasis, diseases.piscineMycobacteriosis, diseases.salmonellosis, diseases.streptococcosis, diseases.velvetDisease, diseases.vibriosis, diseases.viralErythrocyticNecrosis, diseases.whiteSpotDisease], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.underwaterLifeTalk, conservationTopics.sharkandRayEvolution, conservationTopics.swimmingAnimals, conservationTopics.carnivoreDiet, conservationTopics.nocturnalBehaviour, conservationTopics.overexploitation, conservationTopics.oceanEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: false, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: false, 
        spawning: false, 
        pregnancy: true, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: false, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: false, 
        canSwim: true, 
        canDive: true, 

        thrivingRequirements: {
            req1: { 
                requirement: "Blood Scent Marker", 
                value: 2, 
                valueType: "Units" 
            }, 
            req2: { 
                requirement: "Rocks", 
                value: 5, 
                valueType: "Units" 
            }, 
            req3: { 
                requirement: "Food Grade", 
                value: 2, 
                valueType: "Quality" 
            }, 
            req4: { 
                requirement: "Aquatic Feeder - Fish", 
                value: 2, 
                valueType: "Units" 
            }, 
            req5: { 
                requirement: "Suspended Bait", 
                value: 2, 
                valueType: "Units" 
            } 
        }, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Brown-grey skin" 
            }, 
            standardLight: { 
                name: "Standard", 
                description: "Light grey skin" 
            }, 
            standardDark: { 
                name: "Standard", 
                description: "Dark grey skin" 
            }, 
        }, 

        colourmorphs: {
            albino: { 
                name: "Albino", 
                description: "Albino: White skin", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/6b305007/Shark_GreatHammerhead_headshot_Albino.png" 
            }
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Confirmed in the PZ2 trailer on 2026/05/28 - the poster aquarium species of the Deluxe Edition, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 134 ---
    longfinBatfish:{
        name: "Longfin Batfish", 
        latin: "Platax pinnatus", 
        image: "/pz2/images/animals/longfinBatfish.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNjM5NjgwZjAvQmF0ZmlzaF9Mb25nZmluLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6ImZkMzk2NDFmLTM5MTItNDgzOS04MDZkLTg3N2VkZjI2ZWQ1NCJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/longfinBatfish_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/639680f0/Batfish_Longfin_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/639680f0/Batfish_Longfin_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/639680f0/Batfish_Longfin_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/longfin-batfish", 
        wiki: "https://en.wikipedia.org/wiki/Platax_pinnatus", 
   
        class: "Actinopterygii", 
        order: "Acanthuriformes", 
        family: "Ephippidae", 
        genus: "Platax", 

        DLC: DLC.deluxe, 
        form: form.collective, 
        type: types.aquatic, 
        enclosure: [enclosures.habitat], 
        enclosureTypes: [enclosureTypes.aquarium], 
        cohabitationOptions: cohabitationOptions.selectSpecies, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 1000, 
        careerAccreditation: 3, 
        franchiseAccreditation: 2, 

        nativeRange: [nativeRange.indianOcean, nativeRange.pacificOcean], 
        biomes: [biomes.reef], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup], 

        temperament: temperament.neutral, 
        dominance: "None", 
        collectiveSize: {min: 15, max: 30}, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 5, 

        preBirthMonths: 0.1, 
        interbirthMonths: 3, 
        juvenileYears: 3, 
        adultYears: 17, 
        elderlyYears: 15, 
        maturityAge: 3, 
        sterilityAge: "Death", 

        barrierStrength: 0, 
        barrierHeight: 0, 
        landArea: 0, 
        landPerAddAdult: 0, 
        shelterArea: 0, 
        shelterPerAddAdult: 0, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 100, 
        deepWaterPerAddAdult: 30, 
        diveDepth: 0, 

        temperatureRange: {min: 22, max: 28}, 
        plantCoverage: {min: 20, max: 60}, 

        foodGrade1: "Copepods", 
        foodGrade1Cost: 125, 
        foodGrade2: "+ Algae Pellets", 
        foodGrade2Cost: 172, 

        salinity: salinity.saltwater, 
        feeders: [feeders.aquaticFeederFlakes], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.underwaterLifeTalk, conservationTopics.rayfinnedFishEvolution, conservationTopics.swimmingAnimals, conservationTopics.omnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.climateChange, conservationTopics.poachingAndTheExoticPetTrade, conservationTopics.overexploitation, conservationTopics.reefEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: false, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: true, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: false, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: false, 
        canSwim: true, 
        canDive: true, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Silver with black vertical band and black-rimmed yellow fins" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: ["", "", "Blue and Gold Fusilier", "", "", "", "", "", "", "Great Hammerhead", "", "Humphead Wrasse", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Confirmed in the PZ2 trailer on 2026/05/28, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 135 ---
    blueAndGoldFusilier:{
        name: "Blue and Gold Fusilier", 
        latin: "Caesio teres", 
        image: "/pz2/images/animals/blueAndGoldFusilier.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvNjhiNzgzZTMvRnVzaWxpZXJfQmx1ZUFuZEdvbGQuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4NX0sInRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiZml0IjoiY29udGFpbiJ9LCJ2ZXJzaW9uIjoiZmQzOTY0MWYtMzkxMi00ODM5LTgwNmQtODc3ZWRmMjZlZDU0In19", 
        headshot: "/pz2/images/animal_headshots/blueAndGoldFusilier_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/68b783e3/Fusilier_BlueAndGold_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/68b783e3/Fusilier_BlueAndGold_map.png", 
        illustration: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/68b783e3/Fusilier_BlueAndGold_illustration.jpg", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/blue-and-gold-fusilier", 
        wiki: "https://en.wikipedia.org/wiki/Caesio_teres", 
   
        class: "Actinopterygii", 
        order: "Acanthuriformes", 
        family: "Lutjanidae", 
        genus: "Caesio", 

        DLC: DLC.deluxe, 
        form: form.collective, 
        type: types.aquatic, 
        enclosure: [enclosures.habitat, enclosures.exhibit], 
        enclosureTypes: [enclosureTypes.aquarium, enclosureTypes.exhibitCylinder, enclosureTypes.exhibitBox], 
        cohabitationOptions: cohabitationOptions.selectSpecies, 
        conservation: conservation.leastConcern, 
  
        maxAnimalAppeal: 1000, 
        careerAccreditation: 2, 
        franchiseAccreditation: 2, 

        nativeRange: [nativeRange.indianOcean, nativeRange.pacificOcean], 
        biomes: [biomes.reef], 
        wildlifeReserves: null, 
        ecosystems: null, 
        speciesRoles: null, 
        rolesRequired: null, 
        releaseGroups: [releaseGroups.mixedGroup], 

        temperament: temperament.confident, 
        dominance: "None", 
        collectiveSize: {min: 40, max: 60}, 
        matingSeason: [matingSeason.aseasonal], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 4, 

        preBirthMonths: 0.1, 
        interbirthMonths: 3, 
        juvenileYears: 1, 
        adultYears: 12, 
        elderlyYears: 14, 
        maturityAge: 1.5, 
        sterilityAge: "Death", 

        barrierStrength: 0, 
        barrierHeight: 0, 
        landArea: 0, 
        landPerAddAdult: 0, 
        shelterArea: 0, 
        shelterPerAddAdult: 0, 
        climbableArea: 0, 
        climbablePerAddAdult: 0, 
        flyableArea: 0, 
        flyablePerAddAdult: 0, 
        waterArea: 0, 
        waterPerAddAdult: 0, 
        deepWaterArea: 50, 
        deepWaterPerAddAdult: 15, 
        diveDepth: 0, 

        temperatureRange: {min: 21, max: 31}, 
        plantCoverage: {min: 10, max: 40}, 

        foodGrade1: "Copepods", 
        foodGrade1Cost: 125, 
        foodGrade2: "+ Algae Pellets", 
        foodGrade2Cost: 173, 

        salinity: salinity.saltwater, 
        feeders: [feeders.aquaticFeederFlakes], 
        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.underwaterLifeTalk, conservationTopics.rayfinnedFishEvolution, conservationTopics.swimmingAnimals, conservationTopics.ecologicalRestoration, conservationTopics.carnivoreDiet, conservationTopics.diurnalBehaviour, conservationTopics.habitatLoss, conservationTopics.overexploitation, conservationTopics.reefEcosystemAmbience], 
  
        cohabitation: true, 
        releasable: false, 
        guestsEnter: false, 
        burrower: false, 
        groupDivision: true, 
        spawning: false, 
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: false, 
        canJump: false, 
        canClimb: false, 
        canFly: false, 
        canWade: false, 
        canSwim: true, 
        canDive: true, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Blue body with yellow back and tail" 
            } 
        }, 

        colourmorphs: null, 

        thrivingRelationships: null, 
        neutralRelationships: ["", "", "", "", "", "", "", "", "Great Hammerhead", "", "Humphead Wrasse", "", "", "", "", "Longfin Batfish", "", "", "", "", "", "", "", "", "", "", ""], 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Confirmed in the PZ2 trailer on 2026/05/28, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }, 
    // --- # 136 ---
    axolotl:{
        name: "Axolotl", 
        latin: "Ambystoma mexicanum", 
        image: "/pz2/images/animals/axolotl.webp", 
        imageURL: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1wbGF0Zm9ybS1ob3N0aW5nIiwia2V5Ijoid2Vic2l0ZXMvcGxhbmV0LXpvby0yL2FuaW1hbHMvZDc1ZjgwYTkvU2FsYW1hbmRlcl9BeG9sb3RsLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImZpdCI6ImNvbnRhaW4ifSwidmVyc2lvbiI6ImZkMzk2NDFmLTM5MTItNDgzOS04MDZkLTg3N2VkZjI2ZWQ1NCJ9fQ==", 
        headshot: "/pz2/images/animal_headshots/axolotl_headshot.png", 
        headshotURL: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_headshot.png", 
        map: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_map.png", 
        illustration: "none", 
        zoopedia: "https://www.planetzoogame.com/2/zoopedia/axolotl", 
        wiki: "https://en.wikipedia.org/wiki/Axolotl", 
   
        class: "Amphibia", 
        order: "Urodela", 
        family: "Ambystomatidae", 
        genus: "Ambystoma", 

        DLC: DLC.deluxe, 
        form: form.individual, 
        type: types.terrestrial, 
        enclosure: [enclosures.exhibit], 
        enclosureTypes: [enclosureTypes.exhibitBox, enclosureTypes.exhibitCylinder], 
        exhibitTerrain: [exhibitTerrain.semiaquatic], 
        cohabitationOptions: cohabitationOptions.none, 
        conservation: conservation.criticallyEndangered, 
  
        maxAnimalAppeal: 3000, 
        careerAccreditation: 2, 
        franchiseAccreditation: 2, 

        nativeRange: [nativeRange.northAmerica], 
        biomes: [biomes.lakesRivers], 

        dominance: "None", 
        matingSeason: [matingSeason.spring], 
        reproductionDifficulty: reproductionDifficulty.easy, 

        groupSizeMin: 1, 
        groupMixedMax: 5, 

        offspringPerMating: {min: 2, max: 3}, 
        preBirthMonths: 0.5, 
        interbirthMonths: 12, 
        juvenileYears: 1, 
        adultYears: 5, 
        elderlyYears: 15, 
        maturityAge: 1, 
        sterilityAge: "Death", 

        temperatureRange: {min: 15, max: 20}, 
        humidityRange: {min: 80, max: 90}, 

        foodGrade1: null, 
        foodGrade1Cost: 225, 
        foodGrade1CostJuv: null, 

        conservationTopics: [conservationTopics.speciesNamePlate, conservationTopics.speciesFactSheet, conservationTopics.herpetologyTalk, conservationTopics.amphibianEvolution, conservationTopics.swimmingAnimals, conservationTopics.ecologicalRestoration, conservationTopics.amphibianExtinctionCrisis, conservationTopics.carnivoreDiet, conservationTopics.cathemeralBehaviour, conservationTopics.pollution, conservationTopics.habitatLoss, conservationTopics.freshwaterEcosystemAmbience], 

        releasable: false, 
        guestsEnter: false, 
        groupDivision: false, 
        spawning: true,
        pregnancy: false, 
        eggLaying: false, 
        brooding: false, 
        nestbound: false, 
        canMoveOnLand: true, 
        canFly: false, 
        canSwim: true, 
        canDive: false, 

        standardCoat: {
            standard: { 
                name: "Standard", 
                description: "Muddy brown marbled body and gills" 
            } 
        }, 

        colourmorphs: { 
            melanistic: { 
                name: "Melanistic", 
                description: "Melanistic: Black body and gills", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_headshot_Albino.png" 
            }, 
            leucistic: { 
                name: "Leucistic", 
                description: "Leucistic: Pink body and red gills", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_headshot_Erythristic.png" 
            }, 
            albino: { 
                name: "Albino", 
                description: "Albino: Pink body, red gills and red eyes", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_headshot_Leucistic.png" 
            }, 
            xanthic: { 
                name: "Xanthic", 
                description: "Xanthic: Yellow body and red gills", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_headshot_Melanistic.png" 
            }, 
            partLeucistic: { 
                name: "Part Leucistic", 
                description: "Speckled: Black mottled body with red gills", 
                icon: "https://hosting.zaonce.net/websites/planet-zoo-2/animals/d75f80a9/Salamander_Axolotl_headshot_Axanthic.png" 
            } 
        }, 

        thrivingRelationships: null, 
        neutralRelationships: null, 

        album: {
            name: "/pz2/images/albums/animal/image" 
        }, 

        notes: "Confirmed in the PZ2 trailer on 2026/05/28, was part of Zoopedia Bundle#1 from 2026/06/23." 
    }

// --- PLACEHOLDER DLC ANIMALS -

};

export {animals};