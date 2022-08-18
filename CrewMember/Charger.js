import CrewMember from "./CrewMember.js";
import {CREW_SKILL} from "../constant/constant.js"

class Charger extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.CHARGER);
        this.firstName = firstName;
        this.surName = surName;
    }
}

export default Charger;