const groundObjects = {
  plantLines: {
    poplars: {
      quantity: 12,

      light: {
        minHeight: 15,
        maxHeight: 30,
        pointsBetween: 40,
        flX: 0.33,
        flY: 1,
        flCX: 0.2,
      },

      shadow: {
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

      light: {
        minHeight: 10,
        maxHeight: 20,
        pointsBetween: 30,
        flX: 0.5,
        flY: 1,
        flCX: 1,
      },

      shadow: {
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

      light: {
        minHeight: 4,
        maxHeight: 12,
        pointsBetween: 30,
        flX: 0.25,
        flY: 1,
        flCX: 0.25,
      },

      shadow: {
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

      light: {
        minHeight: 4,
        maxHeight: 10,
        pointsBetween: 30,
        flX: 0.5,
        flY: 0.75,
        flCX: 0.5,
      },

      shadow: {
        minHeight: 2,
        maxHeight: 4,
        pointsBetween: 60,
        flX: 0.25,
        flY: 1,
        flCX: 0.5,
      }
    },

    bed: {
      quantity: 32,

      light: {
        minHeight: 1,
        maxHeight: 4,
        pointsBetween: 20,
        flX: 0.5,
        flY: 1,
        flCX: 0.1,
      },

      shadow: {
        minHeight: 1,
        maxHeight: 2,
        pointsBetween: 40,
        flX: 0.25,
        flY: 1,
        flCX: 0.1,
      }
    },

    furrow: {
      quantity: 60,

      light: {
        minHeight: 0,
        maxHeight: 1,
        pointsBetween: 20,
        flX: 0.5,
        flY: 1,
        flCX: 0,
      },
    },
    grass: {
      quantity: 60,

      light: {
        minHeight: 0,
        maxHeight: 1,
        pointsBetween: 20,
        flX: 0.5,
        flY: 1,
        flCX: 0,
      },
    }
  }
};

export default groundObjects;
