import CrewMember from "./CrewMember.js";
import {CREW_SKILL} from "../constant/constant.js"

class DriverMechanic extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.DRIVERMECHANIC);
        this.firstName = firstName;
        this.surName = surName;
    }
}

export default DriverMechanic;