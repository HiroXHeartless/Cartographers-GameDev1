var res = {
    HelloWorld_png : "res/HelloWorld.png",
	Close_png: "res/close.png",
	boat_png : "res/sprite_boat.png",
	popup_png : "res/popup_resize.png",
	map_png: "res/bg_map.png",
	map_large_png: "res/bg_map_large.png",
	spritesheet: "res/sprites.png",
	land_marker_png: "res/land_marker.png",
	spr_storm: "res/storm.png",
	plist_storm: "res/storm.plist",
	json_text: "res/json_text.json"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
