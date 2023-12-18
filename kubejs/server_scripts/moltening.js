priority: 2

ServerEvents.recipes((event) => {

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

  // Ingots, metals in general
  let meltingIngots = (item, namespace) => {
    melting(namespace + ":" + item + "_block", "kubejs:molten_" + item, 810);
    melting(namespace + ":" + item + "_ingot", "kubejs:molten_" + item, 90);
    melting(namespace + ":" + item + "_sheet", "kubejs:molten_" + item, 90);
    melting(namespace + ":" + item + "_plate", "kubejs:molten_" + item, 90);
    melting(namespace + ":" + item + "_nugget", "kubejs:molten_" + item, 10);
  };

  let ingots = [
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
    { item: "calorite", namespace: "ad_astra" },
    { item: "copper", namespace: "create" },
  ];

  ingots.forEach((item) => {
    meltingIngots(item.item, item.namespace);
  });

  // Raw ore
  let meltingRaw = (item, namespace) => {
    melting(namespace + ":raw_" + item, "kubejs:molten_" + item, 180);
    melting("create:crushed_raw_" + item, "kubejs:molten_" + item, 180);
    melting("createastracompat:crushed_" + item + "_ore", "kubejs:molten_" + item, 180);
  };

  let raw = [
    { item: "iron", namespace: "minecraft" },
    { item: "gold", namespace: "minecraft" },
    { item: "copper", namespace: "minecraft" },
    { item: "copper", namespace: "create" },
    { item: "zinc", namespace: "create" },
    { item: "desh", namespace: "ad_astra" },
    { item: "ostrum", namespace: "ad_astra" },
    { item: "calorite", namespace: "ad_astra" },
    { item: "tin", namespace: "thermal" },
    { item: "lead", namespace: "thermal" },
    { item: "silver", namespace: "thermal" },
    { item: "nickel", namespace: "thermal" },
  ];

  raw.forEach((item) => {
    meltingRaw(item.item, item.namespace);
  });
  
  // Resources
  let meltingResources = (item, namespace) => {
    melting(namespace + ":" + item, "kubejs:molten_" + item, 90);
    melting(namespace + ":" + item + "_block", "kubejs:molten_" + item, 810);
  };

  let resources = [
    { item: "diamond", namespace: "minecraft" },
    { item: "redstone", namespace: "minecraft" },
    { item: "sulfur", namespace: "thermal" },
    { item: "ender_pearl", namespace: "minecraft" },
    { item: "porkchop", namespace: "minecraft" },
  ];

  resources.forEach((item) => {
    meltingResources(item.item, item.namespace);
  });

  // Dust
  let meltingDust = (item, namespace) => {
    melting(namespace + ":" + item + "_dust", "kubejs:molten_" + item, 90);
    melting(namespace + ":" + item + "_dust", "thermal:" + item, 90);
  };

  let dust = [
    { item: "glowstone", namespace: "minecraft" },
  ];

  dust.forEach((item) => {
    meltingDust(item.item, item.namespace);
  });

  // Offtop
  melting("minecraft:quartz", "kubejs:molten_nether_quartz", 40);

  melting("create:polished_rose_quartz", "thermal:redstone", 30);

  melting("minecraft:netherite_ingot", "kubejs:molten_netherite", 90);
  melting("createdeco:netherite_nugget", "kubejs:molten_netherite", 10);

  // Melting



  // Alloying

  event.remove({ output: "#forge:ingots/steel", type: "create:mixing" });
  event.remove({ output: "#forge:ingots/steel", type: "minecraft:blasting" });
  event.remove({ output: "#forge:ingots/brass", type: "create:mixing" });

  let mixingAlloying = (input1, input2, output1, amount1, amount2, amount3) => {
        event.custom({
            type: "create:mixing",
            heatRequirement: "heated",
            ingredients: [
              {
                amount: amount1,
                fluid: "kubejs:" + "molten_" + input1,
              },
              {
                amount: amount2,
                fluid: "kubejs:" + "molten_" + input2,
              },
            ],
            results: [
              {
                amount: amount3,
                fluid: "kubejs:" + "molten_" + output1,
              },
            ],
          });
    };


  let alloys = [
    { input1: "copper", input2: "zinc", output1: "brass", amount1: 90, amount2: 90, amount3: 180 },
    { input1: "iron", input2: "nickel", output1: "invar", amount1: 180, amount2: 90, amount3: 270 },
    { input1: "copper", input2: "nickel", output1: "constantan", amount1: 90, amount2: 90, amount3: 180 },
    { input1: "silver", input2: "gold", output1: "electrum", amount1: 90, amount2: 90, amount3: 180 },
  ];

  alloys.forEach((item) => {
    mixingAlloying(item.input1, item.input2, item.output1, item.amount1, item.amount2, item.amount3 );
  });

  // Alloying



  // Hard Alloying

  let mixingHardAlloying = (input1, input2, input3, output1, amount1, amount2, amount3, amount4) => {
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
          {
            amount: amount1,
            fluid: "kubejs:" + "molten_" + input1,
          },
          {
            amount: amount2,
            fluid: "kubejs:" + "molten_" + input2,
          },
          {
            amount: amount3,
            fluid: "kubejs:" + "molten_" + input3,
          },
        ],
        results: [
          {
            amount: amount4,
            fluid: "kubejs:" + "molten_" + output1,
          },
        ],
      });
  };

  let hardalloys = [
    { input1: "ender_pearl", input2: "diamond", input3: "lead", output1: "enderium", amount1: 180, amount2: 90, amount3: 270, amount4: 180 },
    { input1: "glowstone", input2: "silver", input3: "tin", output1: "lumium", amount1: 180, amount2: 90, amount3: 270, amount4: 180 },
    { input1: "silver", input2: "copper", input3: "redstone", output1: "signalum", amount1: 90, amount2: 270, amount3: 360, amount4: 360 },
  ];

  hardalloys.forEach((item) => {
    mixingHardAlloying(item.input1, item.input2, item.input3, item.output1, item.amount1, item.amount2, item.amount3, item.amount4 );
  });

  // Hard Alloying



  //  Steel
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:iron_ingot",
      },
      {
        item: "minecraft:iron_ingot",
      },
      {
        item: "minecraft:iron_ingot",
      },
    ],
    results: [
      {
        amount: 180,
        fluid: "createbigcannons:molten_steel",
      },
    ],
  });

  // Bronze
  event.remove({ output: "#forge:ingots/bronze", type: "create:mixing" });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 270,
        fluid: "kubejs:molten_copper",
      },
      {
        amount: 90,
        fluid: "kubejs:molten_tin",
      },
    ],
    results: [
      {
        amount: 360,
        fluid: "createbigcannons:molten_bronze",
      },
    ],
  });














});
