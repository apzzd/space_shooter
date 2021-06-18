import pop from "../pop/index.js";

const { TileMap, Texture, math } = pop;

class Level extends TileMap {
    constructor(w, h) {

        const texture = new Texture("res/tiles.png")
        const tileSize = 32
        const mapW = Math.floor(w/tileSize)
        const mapH = Math.floor(h/tileSize)
        
        const level = []
        for (let y = 0; y < mapH; y++) {
            for (let x = 0; x < mapW; x++) {
                level.push({
                    x: math.rand(5),
                    y: math.rand(2)
                })
            }
        }
        super (level, mapW, mapH, tileSize, tileSize, texture)
    }
}

export default Level;