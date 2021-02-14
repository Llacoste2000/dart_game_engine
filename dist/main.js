"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const _301_1 = require("./gamemodes/301");
let player1 = new player_1.Player("louis", "louis@louis.com", 0, 0);
let player2 = new player_1.Player("marvin", "marvin@marvin.com", 0, 0);
let player3 = new player_1.Player("julien", "julien@julien.com", 0, 0);
let tho = new _301_1.ThreeHundredOne([player1]);
tho.init();
