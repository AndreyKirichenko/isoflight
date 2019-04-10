import BiomPresetData from "../services/BiomPresetData";

self.addEventListener("message", getNewBiomPresetData);

function getNewBiomPresetData(event) {
  let { x, y, scale } = event.data;
  const data = BiomPresetData.getRandomBiomPreset(scale);
  this.postMessage({ x, y, data });
}
