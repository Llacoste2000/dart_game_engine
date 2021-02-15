"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aroundtheworld_1 = require("./gamemodes/aroundtheworld");
const player_1 = require("./player");
let player1 = new player_1.Player("louis", "louis@louis.com", 0, 0);
let player2 = new player_1.Player("marvin", "marvin@marvin.com", 0, 0);
let player3 = new player_1.Player("julien", "julien@julien.com", 0, 0);
let atw = new aroundtheworld_1.AroundTheWorld([player1]);
atw.init();
