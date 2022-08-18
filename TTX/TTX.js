class TTX { // interface
    constructor(speed, maxSpeed, armor, visibility, hp) {
        this.speed = speed // km\h
        this.maxSpeed = maxSpeed;
        this.armor = armor; // mm
        this.visibility = visibility // (dont visible)0..1(visible)
        this.hp = hp;
    }
}

export default TTX;