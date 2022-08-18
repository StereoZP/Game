import Module from "./Module.js";
import {MODULE_TYPES} from "../constant/constant.js";

class Engine extends Module {
    constructor(name, power) {
        super(name, MODULE_TYPES.ENGINE);
        this.power = power;
    }
}

export default Engine;