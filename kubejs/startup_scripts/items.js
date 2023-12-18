// priority: 0

StartupEvents.registry("item", (event) => {
  let item = (name) => {
    let id = name.toLowerCase().replace(/ /g, "_");
    event.create(id).texture(`indrev:item/${id}`).displayName(name);
  };
  item("Steel rod");
  item("Unfinished processor");
});
