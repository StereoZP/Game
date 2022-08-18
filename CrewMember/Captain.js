import CrewMember from "./CrewMember.js";
import {CREW_SKILL} from "../constant/constant.js"


class Captain extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.CAPTAIN);
        this.firstName = firstName;
        this.surName = surName;
    }
}

export default Captain;