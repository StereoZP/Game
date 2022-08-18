import {prepareTanks} from "./utils/functions.js";
import {prepareUsers} from "./utils/functions.js";

const arrayOfUsers = prepareUsers();
const stereo = arrayOfUsers[0];
const arrayOfTanks = prepareTanks(stereo);
const prg = arrayOfTanks[0];
const yoh = arrayOfTanks[1];

console.log(prg);
console.log(yoh);
console.log(stereo);
