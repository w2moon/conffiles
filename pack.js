var wl = require("./tools/wl")
var PATHS = [
   "../lovigame_ejs",
   "../lovigame_admin",
   "../enochsrc/wltool/saveserver"
];

for(var i=0;i<PATHS.length;++i){
    wl.zip(PATHS[i]);
}