# Template for Using @s4tk/extraction

## Overview

This project is a simple setup for using @s4tk/extraction.

## How to Use

### Step 1: Install Node.js and npm

Go to [nodejs.org](https://nodejs.org/en/download/) to download Node.js for your operating system if you haven't already. It is recommended that you install the LTS version. Your Node.js download will include npm, there is no additional download necessary.

Note that installing Node.js and npm might take a little while.

### Step 2: Download or clone this project

Click the green "Code" button near the top of this page, and either download the project as a ZIP or clone it to your machine. If downloading a ZIP, be sure to unzip the project before continuing.

### Step 3: Set up your workspace

You can use any IDE you want for this project, or forgo an IDE completely and just use your command line. I highly recommend using [Visual Studio Code](https://code.visualstudio.com/) for this, and will provide help for it in the following steps.

Once you've chosen your IDE, open the `extraction-template` folder in it.

Then, open your command line (in VS Code, you can press `ctrl` + `shift` + \` on both macOS and Windows). Then, ensure that you are in the correct folder. You'll know you're in the correct folder if you see "extraction-template" immediately before the "%" on macOS or ">" on Windows.

### Step 4: Install dependencies

In your command line, type `npm i` to install @s4tk/extraction as a dependency. If this goes well, you should see something like the following:

```
added 118 packages, and audited 119 packages in 18s

13 packages are looking for funding
  run npm fund for details

found 0 vulnerabilities
```

### Step 5: Configure your settings

In `index.cjs`, set the path(s) to your game's files. I've included the paths to my own game on both macOS and Windows, but yours may differ. Also, set where you want to output your tuning - by default, it will output to a folder called "out" within this project.

You may also configure any additional settings you want. These settings are pre-filled with defaults in index.cjs, but you can read more about them and what they do [here](https://sims4toolkit.com/#/docs/extraction/latest/types/ExtractionOptions).

### Step 6: Run the code

Type `npm start` into your console, and the extraction will begin.

## Disclaimers

Sims 4 Toolkit (S4TK) is a collection of creator-made modding tools for [The Sims 4](https://www.ea.com/games/the-sims). "The Sims" is a registered trademark of [Electronic Arts, Inc](https://www.ea.com/). (EA). Sims 4 Toolkit is not affiliated with or endorsed by EA.

All S4TK software is currently considered to be in its pre-release stage. Use at your own risk, knowing that breaking changes are likely to happen.

## Documentation

Visit [sims4toolkit.com/#/docs/extraction](https://sims4toolkit.com/#/docs/extraction) for the most up-to-date documentation on the @s4tk/extraction package.
