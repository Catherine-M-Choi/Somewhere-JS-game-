class TestLevel {
  constructor() {
    // Canvas size is 1280 x 720
    // forest_tiles.png is 896 × 384; Individual tile is 128 x 128 in source
    // 16 tiles wide and 9 tiles high, with tile size of 80 x 80
    this.cols = 16;
    this.rows = 9;
    this.sourceSize = 128;
    this.outputSize = 80;
    this.tiles = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 16, 6, 6, 7, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 6, 6, 7, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13
      ];
    this.foregroundTiles = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20
      ]

    this.inputRows = 3;
    this.inputCols = 7;
    this.tileAtlas = new Image();
    this.tileAtlas.src = '/src/assets/forest_tiles.png';
  }
  
  getTile(col, row) {
    return this.tiles[row * this.cols + col];
  }
  
  getForegroundTile(col, row) {
    return this.foregroundTiles[row * this.cols + col];
  }

  getStartingPos(tileNum) {
    let row = Math.floor(tileNum / this.inputCols)
    let col = tileNum % this.inputCols
    
    let x_pos = (col - 1) * this.sourceSize
    let y_pos = row * this.sourceSize
    return [x_pos, y_pos]
  }

  renderForeground(ctx) {
    for (let c = 0; c < this.cols; c++) {
      for (let r = 0; r < this.rows; r++) {
        let tile = this.getForegroundTile(c, r);
        if (tile !== 0) { // 0 => empty tile
          let [x_pos,y_pos] = this.getStartingPos(tile)
          ctx.drawImage(
            this.tileAtlas, // image
            x_pos, 
            y_pos,
            this.sourceSize, // source width
            this.sourceSize, // source height
            c * this.outputSize,  // target x
            r * this.outputSize, // target y
            this.outputSize, // target width
            this.outputSize // target height
          );

          console.log((tile - 1) * this.sourceSize)
        }
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < this.cols; c++) {
      for (let r = 0; r < this.rows; r++) {
        let tile = this.getTile(c, r);
        if (tile !== 0) { // 0 => empty tile
          // Example of ctx.drawImage syntax:
          // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
          let [x_pos,y_pos] = this.getStartingPos(tile)
          ctx.drawImage(
            this.tileAtlas, // image
            x_pos, 
            y_pos,
            this.sourceSize, // source width
            this.sourceSize, // source height
            c * this.outputSize,  // target x
            r * this.outputSize, // target y
            this.outputSize, // target width
            this.outputSize // target height
          );
        }
      }
    }
  }
}

module.exports = TestLevel;