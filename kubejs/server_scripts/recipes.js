priority: 1

ServerEvents.recipes((event) => {

  // Stonecutting
  //let stonecutting = (input, output, amount) => {
  //  event.custom({
  //      "type": "minecraft:stonecutting",
  //      "count": amount,
  //      "ingredient": {
  //        "item": input
  //      },
  //      "result": output
  //  });
  //};

  // Melting
  let melting = (input, fluid, amount) => {
    event.custom({
      type: "createbigcannons:melting",
      heatRequirement: "heated",
      ingredients: [
        {
          item: input,
        },
      ],
      results: [
        {
          amount: amount,
          fluid: fluid,
        },
      ],
    });
  };

  // Mixing
  let mixing = (input1, input2, output, amount) => {
    if (input1.includes("molten")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            fluid: input1,
            amount: 90,
          },
          {
            item: input2,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else if (input2.includes("molten")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: input1,
          },
          {
            fluid: input2,
            amount: 90,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else if (input2.includes("#")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: input1,
          },
          {
            tag: input2.replace("#", ""),
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else if (input1.includes("#")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            tag: input1.replace("#", ""),
          },
          {
            item: input2,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: input1,
          },
          {
            item: input2,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    }
  };

  // Milling
  let milling = (input, output, time, chance, amount) => {
    event.custom({
      type: "create:milling",
      ingredients: [
        {
          item: input,
        },
      ],
      processingTime: time,
      results: [
        {
          item: output,
          chance: chance,
          count: amount,
        },
      ],
    });
  };

  // Pressing
  let pressing = (tag, input, output) => {
    if (tag) {
      event.custom({
        type: "create:pressing",
        ingredients: [
          {
            tag: input,
          },
        ],
        results: [
          {
            item: output,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:pressing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output,
          },
        ],
      });
    }
  };

  // Splashing
  let splashing = (input, output1, chance1, amount1, output2, chance2, amount2) => {
    if (output2 == null) {
      event.custom({
        type: "create:splashing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:splashing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
          {
            item: output2,
            chance: chance2,
            count: amount2,
          },
        ],
      });
    }
  };

  // Compacting

  let compacting = (fluid, input, iAmount, output, oAmount) => {
    if (fluid) {
      event.custom({
        type: "create:compacting",
        ingredients: [
          {
            fluid: input,
            amount: iAmount,
          },
        ],
        results: [
          {
            item: output,
            count: oAmount,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:compacting",
        ingredients: [
          {
            item: input,
            count: iAmount,
          },
        ],
        results: [
          {
            item: output,
            count: oAmount,
          },
        ],
      });
    }
  };

  // Filling
  let filling = (input, fluid, amount, output) => {
    event.custom({
      type: "create:filling",
      ingredients: [
        {
          item: input,
        },
        {
          amount: amount,
          fluid: fluid,
          nbt: {},
        },
      ],
      results: [
        {
          item: output,
        },
      ],
    });
  };

  // Haunting
  let haunting = (input, output, chance, amount) => {
    event.custom({
      type: "create:haunting",
      ingredients: [
        {
          item: input,
        },
      ],
      results: [
        {
          item: output,
          chance: chance,
          count: amount,
        },
      ],
    });
  };

  // Crushing
  let crushing = (input, output1, chance1, amount1, output2, chance2, amount2) => {
    if (output2 == null) {
      event.custom({
        type: "create:crushing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:crushing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
          {
            item: output2,
            chance: chance2,
            count: amount2,
          },
        ],
      });
    }
  };

  // Disenchanting
  let disenchanting = (input, amount) => {
    event.custom({
      type: "create_enchantment_industry:disenchanting",
      ingredients: [
        {
          item: input,
        },
      ],
      results: [
        {
          fluid: "create_enchantment_industry:experience",
          amount: amount,
        },
      ],
    });
  };

  // Deploying
  let deploying = (input, applicator, output) => {
    event.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: input,
        },
        {
          item: applicator,
        },
      ],
      results: [
        {
          item: output,
        },
      ],
    });
  };

  // Crystallizing
  let crystallizing = (fluid, amount, type, input, output) => {
    if (type === "item") {
      event.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: fluid,
            amount: amount,
          },
          {
            item: input,
          },
        ],
        result: [
          {
            item: output,
          },
        ],
      });
    } else {
      event.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: fluid,
            amount: amount,
          },
          {
            tag: input,
          },
        ],
        result: [
          {
            fluid: output,
          },
        ],
      });
    }
  };

  // Charging
  let charging = (input, output, amount, energy) => {
    event.custom({
      type: "createaddition:charging",
      energy: energy,
      input: {
        item: input,
        count: 1,
      },
      result: {
        item: output,
        count: amount,
      },
      energy: energy,
    });
  };

  // Centrifuging
  let centrifuging = (input, output1, chance1, amount1, output2, chance2, amount2) => {
    if (output2 !== null) {
      event.custom({
        type: "thermal:centrifuge",
        ingredient: {
          item: input,
        },
        result: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
          {
            item: output2,
            chance: chance2,
            count: amount2,
          },
        ],
        energy: 10000,
      });
    } else {
      event.custom({
        type: "thermal:centrifuge",
        ingredient: {
          item: "thermal:oil_sand",
        },
        result: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
        ],
        energy: 10000,
      });
    }
  };

  // Rolling
  let rolling = (tag, input, output, amount) => {
    if (tag) {
      event.custom({
        type: "createaddition:rolling",
        input: {
          tag: input,
        },
        result: {
          item: output,
          count: amount,
        },
      });
    } else {
      event.custom({
        type: "createaddition:rolling",
        input: {
          item: input,
        },
        result: {
          item: output,
          count: amount,
        },
      });
    }
  };


  // Damnation of the damned "ae2:inscriber"
  event.remove({ output: "ad_astra:coal_generator" });
  event.remove({ type: "ae2:inscriber"});
  event.remove({ output: "ad_astra:fuel_refinery" });
  event.remove({ output: "ad_astra:water_pump" });
  event.remove({ output: "create_dd:bronze_ingot", type: "create:mixing" });




  event.replaceInput({}, "minecraft:dried_kelp", "thermal:cured_rubber");
  event.replaceInput({}, "minecraft:dried_kelp_block", "thermal:cured_rubber_block");
  event.replaceInput({}, "createutilities:void_steel_sheet", "thermal:enderium_plate");
  event.replaceInput({}, "biomimicry:wheat_grass", "minecraft:wheat");


  // Sequenced Assembly

  // Sequenced Assembly



  // Milling

  // Kelp into Lime Dye, 75, 100%, 2
  milling("minecraft:kelp", "minecraft:lime_dye", 75, 1.0, 2);

  // Moon Stone into Moon Cobblestone, 200, 100%, 1
  milling("ad_astra:moon_stone", "ad_astra:moon_cobblestone", 200, 1.0, 1);

  // Moon Cobblestone into Moon Sand, 200, 100%, 1
  milling("ad_astra:moon_cobblestone", "ad_astra:moon_sand", 200, 1.0, 1);

  // Mars Stone into Mars Cobblestone, 200, 100%, 1
  milling("ad_astra:mars_stone", "ad_astra:mars_cobblestone", 200, 1.0, 1);

  // Mars Cobblestone into Mars Sand, 200, 100%, 1
  milling("ad_astra:mars_cobblestone", "ad_astra:mars_sand", 200, 1.0, 1);

  // Milling



  // Mixing



  // Auto Netherrack
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 25,
        fluid: "minecraft:lava",
      },
      {
        item: "minecraft:blackstone",
      },
    ],
    results: [
      {
        item: "minecraft:netherrack",
      },
    ],
  });

    // Auto lava
    event.custom({
      type: "create:mixing",
      heatRequirement: "heated",
      ingredients: [
        {
          item: "minecraft:magma_block"
        }
      ],
      "results": [
        {
          "amount": 250,
          "fluid": "minecraft:lava"
        }
      ]
    });

    event.custom({
      type: "create:filling",
      ingredients: [
        {
          tag: "forge:cobblestone"
        },
        {
          amount: 50,
          fluid: "minecraft:lava",
          nbt: {}
        }
      ],
      results: [
        {
          item: "minecraft:magma_block"
        }
      ]
    });



//  //Molten invar
//  event.custom({
//    type: "create:mixing",
//    heatRequirement: "heated",
//    ingredients: [
//      {
//        amount: 90,
//        fluid: "kubejs:molten_iron",
//      },
//      {
//        amount: 90,
//        fluid: "kubejs:molten_nickel",
//      },
//    ],
//    results: [
//      {
//        amount: 180,
//        fluid: "kubejs:molten_invar",
//      },
//    ],
//  });
//
  // Mixing 



  // Blasting event.blasting("minecraft:flint", "minecraft:gravel");

  // Blasting



  // Shaped

  // Rods/Steel, Plates/Steel = Engine Fan
  event.shaped(Item.of("ad_astra:engine_fan"), [" A ", "ABA", " A "], { A: "kubejs:steel_rod", B: "#forge:plates/steel" });

  // Rods/Steel, Plates/Steel = Engine Frame
  event.shaped(Item.of("ad_astra:engine_frame"), ["AAA", "ABA", "AAA"], { A: "kubejs:steel_rod", B: "#forge:plates/steel" });

 // // Shaped

//

  // Shapeless

  event.shapeless(Item.of("minecraft:dirt"), ["minecraft:bone_meal", "thermal:slag", "minecraft:sand"]);

  // Shapeless



  // Pressing

  // #Planks Into Upgrade Base
  pressing(true, "minecraft:planks", "sophisticatedstorage:upgrade_base");

  // Pressing



  // Splashing

  // Rose Quartz into Polished Rose Quartz
  splashing("create:rose_quartz", "create:polished_rose_quartz", 1, 1);

  // Rose Quartz into Polished Rose Quartz
  splashing("minecraft:amethyst_shard", "createutilities:polished_amethyst", 1, 1);

  // Moon Sand into Desh Nuggets
  splashing("ad_astra:moon_sand", "ad_astra:desh_nugget", 1, 1, "ad_astra:desh_nugget", 0.75, 1);

  // Splashing

  
  // Compacting

  event.custom({
    type: "create:compacting",
    ingredients: [
      {
        fluid: "kubejs:molten_sulfur",
        amount: 90,
      },
    ],
    results: [
      {
        item: "thermal:sulfur",
        count: 1,
      },
    ],
  });

  // Fluid to Nugget & Ingot
  let compactingNugget = (item, namespace) => {
    compacting(true, "kubejs:molten_" + item, 90, namespace + ":" + item + "_ingot", 1);
    compacting(true, "kubejs:molten_" + item, 10, namespace + ":" + item + "_nugget", 1);
  };

  // List of Ores
  let oresToCompact = [
    { item: "brass", namespace: "create" },
    { item: "iron", namespace: "minecraft" },
    { item: "zinc", namespace: "create" },
    { item: "desh", namespace: "ad_astra" },
    { item: "ostrum", namespace: "ad_astra" },
    { item: "calorite", namespace: "ad_astra" },
    { item: "gold", namespace: "minecraft" },
    { item: "deorum", namespace: "forbidden_arcanus" },
    { item: "signalum", namespace: "thermal" },
    { item: "lumium", namespace: "thermal" },
    { item: "enderium", namespace: "thermal" },
    { item: "tin", namespace: "thermal" },
    { item: "lead", namespace: "thermal" },
    { item: "silver", namespace: "thermal" },
    { item: "nickel", namespace: "thermal" },
    { item: "electrum", namespace: "thermal" },
    { item: "invar", namespace: "thermal" },
    { item: "constantan", namespace: "thermal" },
  ];

  oresToCompact.forEach((element) => {
    compactingNugget(element.item, element.namespace);
  });

  // Fluid, 90mb Molten Steel into Steel Ingot
  compacting(true, "createbigcannons:molten_steel", 90, "ad_astra:steel_ingot", 1);

  // Fluid, 10mb Molten Steel into Steel Nugget
  compacting(true, "createbigcannons:molten_steel", 10, "ad_astra:steel_nugget", 1);

  // Fluid, 90mb Molten Copper into Copper Ingot
  compacting(true, "kubejs:molten_copper", 90, "minecraft:copper_ingot", 1);

  // Fluid, 10mb Molten Copper into Copper Nugget
  compacting(true, "kubejs:molten_copper", 10, "create:copper_nugget", 1);

  // Fluid, 90mb Molten Diamond into Diamond
  compacting(true, "kubejs:molten_diamond", 90, "minecraft:diamond", 1);

  // Fluid, 90mb Molten Emerald into Emerald
  compacting(true, "kubejs:molten_emerald", 90, "minecraft:emerald", 1);

  // Fluid, 90mb Molten Lapis into Lapis Lazuli
  compacting(true, "kubejs:molten_lapis", 90, "minecraft:lapis_lazuli", 1);

  // Fluid, 90mb Molten Redstone into Redstone
  compacting(true, "kubejs:molten_redstone", 90, "minecraft:redstone", 1);

  // Fluid, 40mb Molten Quartz into Quartz
  compacting(true, "kubejs:molten_nether_quartz", 40, "minecraft:quartz", 1);

  // Fluid, 90mb Molten Netherite into Netherite Ingot
  compacting(true, "kubejs:molten_netherite", 90, "minecraft:netherite_ingot", 1);

  // Fluid, 10mb Molten Netherite into Netherite Nugget
  compacting(true, "kubejs:molten_netherite", 10, "createdeco:netherite_nugget", 1);

  // Fluid, 90mb Molten Obisidan into Obisidan Ingot
  //compacting(true, "kubejs:molten_obisidan", 90, "forbidden_arcanus:obsidian_ingot", 1);

  // Fluid, 90mb Molten Prosperity into Prosperity Shard
  compacting(true, "kubejs:molten_prosperity", 30, "mysticalagriculture:prosperity_shard", 1);

  // Fluid, 90mb Molten Pendorite into Pendorite Ingot
  compacting(true, "kubejs:molten_pendorite", 90, "byg:pendorite_ingot", 1);

  // Fluid, 50mb Latex into Rubber
  compacting(true, "thermal:latex", 50, "thermal:rubber", 1);

  // Compacting



  // Haunting

  // ad astra ice
  haunting("minecraft:ice", "ad_astra:ice_shard", 0.25, 1);

  // ad astra ice
  haunting("minecraft:charcoal", "minecraft:coal", 1, 1);

  // bronze compat
  haunting("alloyed:bronze_ingot", "create_dd:bronze_ingot", 1.0, 1);

  // peenees
  haunting("thermal:cured_rubber", "create_dd:rubber", 1.0, 1);

  // Cobbled Deepslate into Blackstone, 100%, 1
  haunting("minecraft:cobbled_deepslate", "minecraft:blackstone", 1.0, 1);

  // Tuff into Cobbled Deepslate, 100%, 1
  haunting("minecraft:tuff", "minecraft:cobbled_deepslate", 1.0, 1);

  // Iron Nugget into Zinc Nugget, 100%, 1
  haunting("minecraft:iron_nugget", "create:zinc_nugget", 1.0, 1);

  // Haunting


 
  // Filling

  // Iron Sheet + 15mb Destabilized Redstone = Electron Tube
  filling("minecraft:tuff", "kubejs:molten_porkchop", 90, "kubejs:pig_tuff");

  // Iron Sheet + 15mb Destabilized Redstone = Electron Tube
  filling("create:iron_sheet", "thermal:redstone", 15, "create:electron_tube");

  // Stick + 3mb Destabilized Redstone = Redstone Torch
  filling("minecraft:stick", "thermal:redstone", 3, "minecraft:redstone_torch");

  // Glowstone Dust + 20mb Liquid Experience = Gem Dust
  filling("minecraft:glowstone_dust", "create_enchantment_industry:hyper_experience", 20, "apotheosis:gem_dust");

  // Slimeball + 30mb Lava = Magma Cream
  filling("minecraft:slime_ball", "minecraft:lava", 30, "minecraft:magma_cream");


  // Fluid Pipe + 360bm Molten Ostrum = Ostrum Fluid Pipe
  filling("create:fluid_pipe", "kubejs:molten_ostrum", 180, "ad_astra:ostrum_fluid_pipe");

  // Filling



  // Crushing (input, output1, chance1, amount1, output2, chance2, amount2)

  crushing("minecraft:dirt", "thermal:niter", 0.2, 1, "minecraft:sand", 0.7, 1);

  crushing("minecraft:glowstone", "minecraft:glowstone_dust", 0.95, 1, "create:experience_nugget", 0.35, 2);

  crushing("thermal:sulfur", "thermal:sulfur_dust", 1.0, 1);

  // Mercury Stone into Mercury Cobblestone, 100%, 1 and Ice Shard, 25%, 1
  crushing("ad_astra:mercury_stone", "ad_astra:mercury_cobblestone", 1.0, 1, "ad_astra:ice_shard", 0.125, 1);

  // Crushing Wheel into Arcane Crystal Dust Speck, 50%, 1
  crushing("create:crushing_wheel", "forbidden_arcanus:arcane_crystal_dust_speck", 0.5, 1);

  // End Stone into Phantom Membrane, 12%, 1 and End Stone, 100%, 1
  crushing("minecraft:end_stone", "minecraft:phantom_membrane", 0.12, 1, "minecraft:end_stone", 1.0, 1);

  // Crushing


  
  // Disenchanting   disenchanting("create:experience_nugget", 10);

  // Disenchanting



  // Smithing

  // Smithing



  // Nasa Workbench

  // Nasa Workbench



  // Mechanical Crafting

  // Mechanical Crafting



  // Cutting

  // Planks Into 2x Sticks
  event.custom({
    type: "create:cutting",
    ingredients: [
      {
        tag: "minecraft:planks",
      },
    ],
    processingTime: 25,
    results: [
      {
        item: "minecraft:stick",
        count: 3,
      },
    ],
  });

  // Cutting



  // Deploying

  deploying("thermal:invar_block", "ae2:silicon", "ae2:silicon_press")
  deploying("thermal:invar_block", "minecraft:gold_ingot", "ae2:logic_processor_press")
  deploying("thermal:invar_block", "ae2:certus_quartz_crystal", "ae2:calculation_processor_press")
  deploying("thermal:invar_block", "minecraft:diamond", "ae2:engineering_processor_press")
  // Deploying



  // Crystallizer

  // Crystallizer



  // Charging ingr resul rf

  //Thermal powder automation
  charging("minecraft:blue_ice", "thermal:blizz_powder", 1, 1000); 
  charging("minecraft:blaze_powder", "thermal:blitz_powder", 1, 1000);
  charging("minecraft:basalt", "thermal:basalz_powder", 1, 1000);

  // Charging



  // Centrifuge

  // Ad astra automation

  centrifuging("ad_astra:moon_sand", "ad_astra:desh_nugget", 0.25, 1, "minecraft:sand", 0.75, 1);
  centrifuging("ad_astra:mars_sand", "ad_astra:ostrum_nugget", 0.25, 1, "minecraft:sand", 0.75, 1);
  centrifuging("ad_astra:venus_sand", "ad_astra:calorite_nugget", 0.25, 1, "minecraft:sand", 0.75, 1);

  // Centrifuge



  // Rolling

  // Tag, Plates/Steel = Steel Rod
  rolling(true, "forge:ingots/steel", "kubejs:steel_rod", 1);

  // Rolling

});
