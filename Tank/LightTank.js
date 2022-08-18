import Tank from "../TTX/Tank.js"

class LightTank extends Tank {
    constructor(maxSpeed, armor, visibility, hp) {
        super('Light', maxSpeed, armor, visibility, hp, 0, 0)
    }
}

export default LightTank;