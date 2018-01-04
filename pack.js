var wl = require("./tools/wl")
var PATHS = [
   "../lovigame_ejs",
   "../lovigame_admin" 
];

for(var i=0;i<PATHS.length;++i){
    wl.zip(PATHS[i]);
}