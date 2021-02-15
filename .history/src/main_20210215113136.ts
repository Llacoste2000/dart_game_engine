import { AroundTheWorld } from "./gamemodes/aroundtheworld";
import { Player } from "./player";
import { Cricket } from "./gamemodes/cricket";

let player1 = new Player("louis", "louis@louis.com", 0, 0);
let player2 = new Player("marvin", "marvin@marvin.com", 0, 0);
let player3 = new Player("julien", "julien@julien.com", 0, 0);

let atw = new AroundTheWorld([player1]);

atw.init();
