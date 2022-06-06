const path = require("path");
const { StringTableLocale } = require("@s4tk/models/enums");
const { extractFiles } = require("@s4tk/extraction");
const { eventListener } = require("./logging.cjs");

// TODO: Ensure these path(s) are correct for your system
const srcDirs = [
  // "D:\\Origin\\The Sims 4", // windows
  "/Applications/The Sims 4 Packs", // macOS
  "/Applications/The Sims 4.app/Contents", // macOS
];

// TODO: Ensure this will output where you want it. By default, it will be in a
// folder called "out" within this project
const outDir = path.join(__dirname, "out");

// Just for logging/time keeping
console.log("Beginning extract...");
const start = performance.now();

extractFiles(srcDirs, outDir, {
  // eventListener, // uncomment this if you want detailed logs, but note that it WILL slow down your extract significantly
  extractSimData: true,
  extractTuning: true,
  namingConvention: "s4s",
  restoreComments: true,
  stringManifest: false,
  targetLocale: StringTableLocale.English,
  tuningManifest: false,
  usePrimarySubfolders: true,
  useSecondarySubfolders: true,
});

const finalSeconds = (performance.now() - start) / 1000;
const mDisplay = Math.floor(finalSeconds / 60);
const sDisplay = finalSeconds - (mDisplay * 60);
console.log(`Extraction complete in ${mDisplay}m${sDisplay}s`);
