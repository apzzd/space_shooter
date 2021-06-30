import pop from "../pop/index.js"; 

const { TileMap, Texture, math } = pop;

class Level extends TileMap {
    constructor(w, h) {

        const texture = new Texture("res/tiles.png")
        const tileSize = 32
        const mapW = Math.floor(w/tileSize)
        const mapH = Math.floor(h/tileSize)
        const level = []
        let tileval

        for (let y = 0; y < mapH; y++) {
            for (let x = 0; x < mapW ; x++) {
                if (x == 0  || x == mapW - 1) {
                    tileval = { x:1, y: 1 }
                } else if ( y == 0) {
                    tileval = { x: 4, y: 1 }
                } else if ( y == mapH - 1) {
                    tileval = { x: 2, y: 1 }
                } else {
                    tileval = { x: math.rand(1, 4), y: 0 }
                    if (math.randOneIn(5)) {
                        tileval = { x: 1, y: 1}
                    }
                }
                
                level.push(tileval)
            }
        }

        // let rand
        // for (let y = 0; y < mapH; y++) {
        //     for (let x = 0; x < mapW ; x++) {
        //         rand = math.randOneIn(50)
        //         if (rand == 1) {
        //             level.push({x: 1, y: 1})
        //         }
        //     }
        // }


        super (level, mapW, mapH, tileSize, tileSize, texture)
        this.blank = {x: 0, y: 0}
        this.lastTile = null 
        this.bounds = {
            left: tileSize,
            right: w - tileSize * 2,
            top: tileSize,
            bottom: h - tileSize * 2
        }
    }
    checkGround(pos) {
        const { blank, lastTile } = this
        const tile = this.tileAtPixelPos(pos)
        if (lastTile === tile) {
            return "checked"
        }
        this.lastTile = tile
        if (this.frame !== blank) {
            this.setFrameAtPixelPos(pos, {x: 0, y: math.rand(0, 2)})
            return "solid"
        }
        return "cleared"

    }
    
}

export default Level;