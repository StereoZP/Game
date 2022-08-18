import Tank from "../TTX/Tank.js"

class HeavyTank extends Tank {
    constructor(maxSpeed, armor, visibility, hp) {
        super('Heavy', maxSpeed, armor, visibility, hp, 0, 0)
    }
}

export default HeavyTank;