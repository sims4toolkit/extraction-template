const eventTimes = {};

function getTimeSince(event) {
  return ((performance.now() - eventTimes[event]) / 1000).toFixed(4) + "s";
}

function percentComplete(...args) {
  return (((args[0] + (args[2] / args[3])) / args[1]) * 100).toFixed(2) + "%"
}

let throttler = 0;
const throttlerThreshold = 1000;

async function eventListener(event, ...args) {
  switch (event) {
    case "tuning-written":
      // fallthrough
    case "simdata-written":
      throttler++;
      throttler %= throttlerThreshold;
      if ((throttler % throttlerThreshold === 0) || args[2] === args[3])
        process.stdout.write(`\r\x1b[K | Progress: ${percentComplete(...args)}`);
      return;
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
      throttler = 0;
      eventTimes[event] = performance.now();
      return console.log("Extracting tuning...");
    case "extract-tuning-end":
      return console.log("\nTuning extracted in ", getTimeSince("extract-tuning-start"));
    case "extract-simdata-start":
      throttler = 0;
      eventTimes[event] = performance.now();
      return console.log("Extracting SimData...");
    case "extract-simdata-end":
      return console.log("\nSimData extracted in ", getTimeSince("extract-simdata-start"));
  }
}

module.exports = {
  eventListener
};
