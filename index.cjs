const path = require("path");
const { StringTableLocale } = require("@s4tk/models/enums");
const { extractFiles } = require("@s4tk/extraction");
const { eventListener } = require("./logging.cjs");

// TODO: Ensure these path(s) are correct for your system, these ones are for my
// MacBook. Windows paths should include the drive and use \\ instead of /.
// Windows also does *not* have an equivalent to "The Sims 4 Packs", you should
// only have two paths (one to your game, and one to SDX)
const srcDirs = [
  "/Applications/The Sims 4 Packs", // Packs not included in The Sims 4.app
  "/Applications/The Sims 4.app/Contents", // Base Game and most packs
  "/Users/YOURNAME/Documents/Electronic Arts/The Sims 4/content", // SDX
];

// TODO: Ensure this will output where you want it. By default, it will be in a
// folder called "out" within this project
const outDir = path.join(__dirname, "out");

// Just for logging/time keeping
console.log("Beginning extract...");
const start = performance.now();

extractFiles(srcDirs, outDir, {
  eventListener, // comment out to disable logs, it will speed up extraction
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
const sDisplay = Math.floor(finalSeconds - mDisplay * 60);
console.log(`Extraction complete in ${mDisplay}m${sDisplay}s`);
