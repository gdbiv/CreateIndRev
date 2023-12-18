// priority: 0

StartupEvents.registry('block', event => {
  event.create('pig_tuff')
  .displayName('Pig tuff')
  .soundType('stone')
  .hardness(0.5)
  .resistance(1)
  //.tagBlock('minecraft:mineable/shovel')
  .requiresTool(false)
})