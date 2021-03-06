const groundObjects = {
  plantLines: {
    poplars: {
      quantity: 12,

      lightShape: {
        minHeight: 15,
        maxHeight: 30,
        pointsBetween: 40,
        flX: 0.33,
        flY: 1,
        flCX: 0.2,
      },

      shadowShape: {
        minHeight: 5,
        maxHeight: 20,
        pointsBetween: 60,
        flX: 0.33,
        flY: 1,
        flCX: 1,
      }
    },

    willows: {
      quantity: 12,

      lightShape: {
        minHeight: 10,
        maxHeight: 20,
        pointsBetween: 30,
        flX: 0.5,
        flY: 1,
        flCX: 1,
      },

      shadowShape: {
        minHeight: 4,
        maxHeight: 15,
        pointsBetween: 60,
        flX: 0.25,
        flY: 1,
        flCX: 1,
      }
    },

    gardenTrees: {
      quantity: 16,

      lightShape: {
        minHeight: 4,
        maxHeight: 12,
        pointsBetween: 30,
        flX: 0.25,
        flY: 1,
        flCX: 0.25,
      },

      shadowShape: {
        minHeight: 2,
        maxHeight: 8,
        pointsBetween: 60,
        flX: 0.25,
        flY: 1,
        flCX: 0.25,
      }
    },

    grapes: {
      quantity: 20,

      lightShape: {
        minHeight: 4,
        maxHeight: 10,
        pointsBetween: 30,
        flX: 0.5,
        flY: 0.75,
        flCX: 0.5,
      },

      shadowShape: {
        minHeight: 2,
        maxHeight: 4,
        pointsBetween: 60,
        flX: 0.25,
        flY: 1,
        flCX: 0.5,
      }
    },

    bed: {
      quantity: 30,

      lightShape: {
        minHeight: 2,
        maxHeight: 5,
        pointsBetween: 20,
        flX: 0.5,
        flY: 1,
        flCX: 0.1,
      },

      shadowShape: {
        minHeight: 1,
        maxHeight: 4,
        pointsBetween: 40,
        flX: 0.25,
        flY: 1,
        flCX: 0.1,
      }
    },

    furrow: {
      quantity: 0,

      lightShape: {
        minHeight: 2,
        maxHeight: 3,
        pointsBetween: 20,
        flX: 0.5,
        flY: 1,
        flCX: 0,
      },
    }
  }
};

export default groundObjects;

