import TTX from "./TTX.js";
import {getRandomValue} from "../utils/functions.js";
import Gun from "../Module/Gun.js";
import Engine from "../Module/Engine.js";
import Tower from "../Module/Tower.js";
import Captain from "../CrewMember/Captain.js";
import Gunlayer from "../CrewMember/Gunlayer.js";
import Charger from "../CrewMember/Charger.js";
import DriverMechanic from "../CrewMember/DriverMechanic.js";

class Tank extends TTX { // abstract class Tank implements interface TTX
    constructor(type, maxSpeed, armor, visibility, hp, experience, money, user) {
        super(0, maxSpeed, armor, visibility, hp);

        this.type = type;
        this.crew = [];
        this.modules = [];
        this.isAlive = true;
        this.experience = experience;
        this.money = money;
        this.user = null;
    }

    get gun() {
        return this.modules.find((installingModule) => {
            return installingModule instanceof Gun
        });
    }
    get engine() {
        return this.modules.find((installingModule) => {
            return installingModule instanceof Engine
        });
    }
    get tower() {
        return this.modules.find((installingModule) => {
            return installingModule instanceof Tower
        });
    }

    get captain() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof Captain
        });
    }
    get gunlayer() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof Gunlayer
        });
    }
    get charger() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof Charger
        });
    }
    get driverMechanic() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof DriverMechanic
        });
    }

    setCrew(firstCrew) {
        this.crew.push(firstCrew);
    }
    setModule(installingModule) {

        if (installingModule instanceof Gun && this.gun) {
            throw new Error('A tank cannot have more than two gun')
        }
        this.modules.push(installingModule);
    }
    setUser(user) {
        this.user = user;
    }


    attack(tank) {
        if (this.isAlive) {

            const { armor } = tank;
            const { gun: { damage, penetration } } = this;

            if (getRandomValue(penetration) > getRandomValue(armor)) {
                tank.hp = tank.hp - getRandomValue(damage);
                const remainHp = tank.hp
                if (remainHp < 0) {
                    tank.isAlive = false;
                    tank.experience = tank.experience + getRandomValue(5);
                    tank.money = tank.money + getRandomValue(5);
                    this.experience = this.experience + 2 * (getRandomValue(10));
                    this.money = this.money + 2 * (getRandomValue(10));
                }
                return remainHp;
            }
            return null;
        }
        throw new Error('You are dead!')
    }

    ride(v) {
        if (v > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else {
            this.speed = v;
        }
    }

    ready() {
        if (this.modules.length === 0) {
            throw new Error('Tank is not ready');
        }
        if (this.gun === undefined) {
            throw new Error('Tank is not ready');
        }
    }
}

export default Tank;