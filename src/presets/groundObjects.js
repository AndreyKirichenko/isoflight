const groundObjects = {
  plantLines: {
    poplars: {
      quantity: 12,

      lightShape: {
        minHeight: 15,
        maxHeight: 30,
        pointsBetween: 30,
        flX: 0.33,
        flY: 1,
        flCX: 0.2,
      },

      shadowShape: {
        minHeight: 5,
        maxHeight: 15,
        pointsBetween: 30,
        flX: 0.33,
        flY: 1,
        flCX: 0,
      }
    },

    willows: {
      quantity: 12,

      lightShape: {
        minHeight: 10,
        maxHeight: 20,
        pointsBetween: 16,
        flX: 0.5,
        flY: 1,
        flCX: 0,
      },

      shadowShape: {
        minHeight: 4,
        maxHeight: 8,
        pointsBetween: 4,
        flX: 0.25,
        flY: 0.25,
        flCX: 0.5,
      }
    },

    gardenTrees: {
      quantity: 12,

      lightShape: {
        minHeight: 2,
        maxHeight: 10,
        pointsBetween: 12,
        flX: 0.25,
        flY: 1,
        flCX: 0.25,
      },

      shadowShape: {
        minHeight: 2,
        maxHeight: 8,
        pointsBetween: 10,
        flX: 0.25,
        flY: 1,
        flCX: 0.25,
      }
    },

    grapes: {
      quantity: 0,

      lightShape: {
        minHeight: 3,
        maxHeight: 4,
        pointsBetween: 12,
        flX: 0.25,
        flY: 0.25,
        flCX: 0.5,
      }
    },

    bed: {
      quantity: 0,

      lightShape: {
        minHeight: 2,
        maxHeight: 3,
        pointsBetween: 5,
        flX: 0.5,
        flY: 1,
        flCX: 0.1,
      }
    },

    furrow: {
      quantity: 0,

      lightShape: {
        minHeight: 1,
        maxHeight: 2,
        pointsBetween: 3,
        flX: 0.25,
        flY: 0.25,
        flCX: 0,
      },
    }
  }
};

export default groundObjects;
