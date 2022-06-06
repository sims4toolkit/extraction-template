const eventTimes = {};

function getTimeSince(event) {
  return ((performance.now() - eventTimes[event]) / 60).toFixed(2) + "s";
}

function percentComplete(...args) {
  return (((args[0] + (args[2] / args[3])) / args[1]) * 100).toFixed(2) + "%"
}

async function eventListener(event, ...args) {
  switch (event) {
    case "index-stbl-start":
      eventTimes[event] = performance.now();
      return console.log("Indexing STBLs...");
    case "index-stbl-end":
      return console.log("STBLs indexed in ", getTimeSince("index-stbl-start"));
    case "index-sim-start":
      eventTimes[event] = performance.now();
      return console.log("Indexing simulation files...");
    case "index-sim-end":
      return console.log("Simulation files indexed in ", getTimeSince("index-sim-start"));
    case "mapping-start":
      eventTimes[event] = performance.now();
      return console.log("Mapping comments...");
    case "mapping-end":
      return console.log("Comments mapped in ", getTimeSince("mapping-start"));
    case "extract-tuning-start":
      eventTimes[event] = performance.now();
      return console.log("Extracting tuning...");
    case "tuning-written":
      process.stdout.write(`\r\x1b[K | Progress: ${percentComplete(...args)}`);
      return;
    case "extract-tuning-end":
      return console.log("\nTuning extracted in ", getTimeSince("extract-tuning-start"));
    case "extract-simdata-start":
      eventTimes[event] = performance.now();
      return console.log("\nExtracting SimData...");
    case "simdata-written":
      process.stdout.write(`\r\x1b[K | Progress: ${percentComplete(...args)}`);
      return;
    case "extract-simdata-end":
      return console.log("SimData extracted in ", getTimeSince("extract-simdata-start"));
  }
}

module.exports = {
  eventListener
};
