const container = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
};

function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit !== "kg") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
    return newManifest;
  } else {
    return newManifest;
  }
}

function validateManifest(manifest) {
  let errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (manifest.containerId === null || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errors.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (manifest.weight === null || manifest.weight <= 0 || typeof manifest.weight !== "number" || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (typeof manifest.unit === "string" && (manifest.unit !== "lb" && manifest.unit !== "kg")) {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const normalized = normalizeUnits(manifest);
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
console.log(validateManifest({}));
console.log(validateManifest({ containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
console.log(validateManifest({ containerId: 3.50 }));
console.log(validateManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }));

processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false });