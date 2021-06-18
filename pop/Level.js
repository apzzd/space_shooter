import Texture from "./Texture.js";
import TileMap from "../pop/Tilemap.js";

const texture = new Texture("res/tilemap.js")

class Level extends TileMap {
    constructor(w, h) {
        //tilemap setup

        super (level, mapW, mapH, tileSize, tileSize, texture)
    }
}

export default Level;