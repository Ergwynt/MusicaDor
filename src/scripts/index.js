import songs from "../Assets/songs/*.mp3";

Object.keys(songs);

const map = {};

let aux = 1;

for (var key of Object.keys(songs)){
    map[`.item-${aux}`] = songs[key];
    aux ++;
    

    // asociar map['.item-${aux}'] con la cancion songs[key]
}
console.log(map);

// Crea un objeto Player y pasa el objeto map

var player = {};

player.map = map;

console.log(player);




