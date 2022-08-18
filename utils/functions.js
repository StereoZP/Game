import {RANDOM_FACTOR} from "../constant/constant.js";
import User from "../User/User.js"
import MiddleTank from "../Tank/MiddleTank.js"
import HeavyTank from "../Tank/HeavyTank.js"
import Gun from "../Module/Gun.js";
import Engine from "../Module/Engine.js";
import Tower from "../Module/Tower.js";
import Captain from "../CrewMember/Captain.js";
import Gunlayer from "../CrewMember/Gunlayer.js";
import Charger from "../CrewMember/Charger.js";
import DriverMechanic from "../CrewMember/DriverMechanic.js";


export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomValue(value) {
    const randomValue = value - (value * (1 - RANDOM_FACTOR))
    const minLimitValue = value - randomValue
    const maxLimitValue = value + randomValue
    return getRandomArbitrary(minLimitValue, maxLimitValue)
}

export function prepareUsers() {
    const stereoZP = new User('stereoZP', 'stereoZP@mail.com', '1234', 0, 0);
    return [stereoZP].map((user) => {
        user.setTanks(prepareTanks())
        return user;
    });
}

export function prepareTanks(user) {
    const progetto = new MiddleTank(60, 100, 0.5, 1500);
    const d25t = new Gun('D-25T', 390, 105, 1);
    const jz = new Engine('JZ', 360);
    const steal20 = new Tower('Steal-20', 500);
    const firstCrew = new Captain('Ivan', 'Ivanov');
    const secondCrew = new Gunlayer('Vasiliy', 'Vasiliev');
    const thirdCrew = new Charger('Petr', 'Petrov');
    const fourthCrew = new DriverMechanic('Alex', 'Alexandrov');
    progetto.setModule(d25t);
    progetto.setModule(jz);
    progetto.setModule(steal20);
    progetto.setCrew(firstCrew);
    progetto.setCrew(secondCrew);
    progetto.setCrew(thirdCrew);
    progetto.setCrew(fourthCrew);
    progetto.setUser(user);
    const yoh = new HeavyTank(40, 110, 0.7, 1650);
    const yohGun = new Gun('YH-25E', 290, 120);
    yoh.setModule(yohGun);
    return [progetto, yoh].map((tank) => {
        tank.ready()
        return tank;
    });
}