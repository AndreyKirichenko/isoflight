import BiomPreset from '../services/BiomPreset';

self.addEventListener('message', getNewBiomPresetData);

function getNewBiomPresetData(event) {
  let { x, y, scale, key } = event.data;

  const biomPreset = new BiomPreset(x, y, scale);

  this.postMessage({ key, biomPreset });
}
