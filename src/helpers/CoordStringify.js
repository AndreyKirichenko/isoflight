class CoordStringify {
  static funcs = {
    'M': CoordStringify.getM,
    'L': CoordStringify.getL,
    'C': CoordStringify.getC,
    'Z': CoordStringify.getZ,
  };

  static getString(coords = []) {
    return coords.reduce((sum, coord) => {
        return `${sum} ${CoordStringify.funcs[coord.type](coord)}`;
      }
    ,
      ''
    );
  }

  static getM(coord) {
    return `M ${coord.x}, ${coord.y} `;
  }

  static getL(coord) {
    return `L ${coord.x}, ${coord.y} `;
  }

  static getC(coord) {
    return `C ${coord.c1x}, ${coord.c1y} 
              ${coord.c2x}, ${coord.c2y} 
              ${coord.x}, ${coord.y} `;
  }

  static getZ() {
    return 'Z';
  }
}

export default CoordStringify;
