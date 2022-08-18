import CrewMember from "./CrewMember.js";
import {CREW_SKILL} from "../constant/constant.js";

class Gunlayer extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.GUNLAYER);
        this.firstName = firstName;
        this.surName = surName;
    }
}

export default Gunlayer;