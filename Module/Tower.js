import Module from "./Module.js";
import {MODULE_TYPES} from "../constant/constant.js";

class Tower extends Module {
    constructor(name, strenght) {
        super(name, MODULE_TYPES.TOWER);
        this.strenght = strenght;
    }
}

export default Tower;