export default {
  plantLines: {
    poplars: {
      quantity: 12,
      lightPart: {
        fill: '#008b68',
        minHeight: 15,
        maxHeight: 30,
        pointsBetween: 40,
        fluctX: 0.33,
        fluctY: 1,
        fluctCX: 0.2,
      },

      darkPart: {
        fill: '#37765b',
        minHeight: 5,
        maxHeight: 20,
        pointsBetween: 60,
        fluctX: 0.33,
        fluctY: 1,
        fluctCX: 1,
      }
    },

    willows: {
      quantity: 12,
      lightPart: {
        fill: '#008b68',
        minHeight: 10,
        maxHeight: 20,
        pointsBetween: 30,
        fluctX: 0.5,
        fluctY: 1,
        fluctCX: 1,
      },

      darkPart: {
        fill: '#37765b',
        minHeight: 4,
        maxHeight: 15,
        pointsBetween: 60,
        fluctX: 0.25,
        fluctY: 1,
        fluctCX: 1,
      }
    },

    gardenTrees: {
      quantity: 16,
      lightPart: {
        fill: '#008b68',
        minHeight: 4,
        maxHeight: 12,
        pointsBetween: 30,
        fluctX: 0.25,
        fluctY: 1,
        fluctCX: 0.25,
      },

      darkPart: {
        fill: '#37765b',
        minHeight: 2,
        maxHeight: 8,
        pointsBetween: 60,
        fluctX: 0.25,
        fluctY: 1,
        fluctCX: 0.25,
      }
    },

    grapes: {
      quantity: 20,
      lightPart: {
        minHeight: 4,
        maxHeight: 10,
        pointsBetween: 30,
        fluctX: 0.5,
        fluctY: 0.75,
        fluctCX: 0.5,
      },

      darkPart: {
        minHeight: 2,
        maxHeight: 4,
        pointsBetween: 60,
        fluctX: 0.25,
        fluctY: 1,
        fluctCX: 0.5,
      }
    },

    bed: {
      quantity: 32,
      lightPart: {
        minHeight: 1,
        maxHeight: 4,
        pointsBetween: 20,
        fluctX: 0.5,
        fluctY: 1,
        fluctCX: 0.1,
      },

      darkPart: {
        minHeight: 1,
        maxHeight: 2,
        pointsBetween: 40,
        fluctX: 0.25,
        fluctY: 1,
        fluctCX: 0.1,
      }
    },

    furrow: {
      quantity: 60,
      lightPart: {
        minHeight: 0,
        maxHeight: 1,
        pointsBetween: 20,
        fluctX: 0.5,
        fluctY: 1,
        fluctCX: 0,
      },
    },
    grass: {
      quantity: 60,
      lightPart: {
        minHeight: 0,
        maxHeight: 1,
        pointsBetween: 20,
        fluctX: 0.5,
        fluctY: 1,
        fluctCX: 0,
      },
    }
  }
  ,
  fields: {
    '#777A7E': {
      grass: [
        '#998675',
        '#778675'
      ],
      furrow: [
        '#998675',
        '#778675'
      ],
      bed: [
        '#998675',
        '#778675'
      ]
    },

    '#39A487': {
      grapes: [
        '#39B54A'
      ]
    },

    '#999569': {
      grass: [
        '#AA9775',
        '#77737E'
      ],
      furrow: [
        '#998675',
        '#778675'
      ],
      bed: [
        '#998675',
        '#778675'
      ]

    },

    '#8CC63F': {
      grapes: [
        '#39B54A'
      ],
      gardenTrees: [
        '#39B54A'
      ]
    },

    '#8CA499': {
      grapes: [
        '#39B56E'
      ],
      gardenTrees: [
        '#008b68'
      ]
    }
  }
}
