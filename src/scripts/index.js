import songs from "../Assets/musics/*.mp3";
import Player from "./player.js";

Object.keys(songs);

const map = {};

let aux = 1;

for (var key of Object.keys(songs)) {
    map[`.item-${aux}`] = songs[key];
    aux ++;
    // asociar map['.item-${aux}'] con la cancion songs[key]
}


// Crea un objeto Player y pasa el objeto map
const player = new Player(map)







