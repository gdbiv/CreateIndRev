ServerEvents.recipes(event => {
	// Nickel
	event.recipes.createoreexcavation
		.drilling('thermal:raw_nickel', '{"text": "Nickel vein"}', 15, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('forge:is_overworld')
		.stress(256)
		.id("nickel_vein");

	// Lead
	event.recipes.createoreexcavation
		.drilling('thermal:raw_lead', '{"text": "Lead vein"}', 15, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('forge:is_overworld')
		.stress(256)
		.id("lead_vein");

	// Tin
	event.recipes.createoreexcavation
		.drilling('thermal:raw_tin', '{"text": "Tin vein"}', 15, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('forge:is_overworld')
		.stress(256)
		.id("tin_vein");

	// Silver
	event.recipes.createoreexcavation
		.drilling('thermal:raw_silver', '{"text": "Silver vein"}', 15, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('forge:is_overworld')
		.stress(256)
		.id("silver_vein");

	// Desh
	event.recipes.createoreexcavation
		.drilling('ad_astra:raw_desh', '{"text": "Desh vein"}', 50, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('createoreexcavation:moon')
		.stress(256)
		.id("desh_vein");

	// Ostrum 
	event.recipes.createoreexcavation
		.drilling('ad_astra:raw_ostrum', '{"text": "Ostrum vein"}', 50, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('createoreexcavation:mars')
		.stress(256)
		.id("ostrum_vein");

	// Calorite
	event.recipes.createoreexcavation
		.drilling('ad_astra:raw_calorite', '{"text": "Calorite vein"}', 50, 600)
		.veinSize(3, 8.5)
		.biomeWhitelist('createoreexcavation:venus')
		.stress(256)
		.id("calorite_vein");
});
