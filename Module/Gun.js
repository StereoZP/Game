import Module from "./Module.js";
import {MODULE_TYPES} from "../constant/constant.js";

class Gun extends Module {
    constructor(name, damage, penetration, barrelAmount) {
        super(name, MODULE_TYPES.GUN);

        this.damage = damage;
        this.penetration = penetration;
        this.barrelAmount = barrelAmount;
    }

    set barrelAmount(amount) {
        if (amount > 2) {
            throw new Error('A gun cannot have more than two barrel')
        }
        this._barrelAmount = amount;
    }

    get barrelAmount() {
        return this._barrelAmount;
    }
}

export default Gun;