import Tank from "../TTX/Tank.js"

class MiddleTank extends Tank {
    constructor(maxSpeed, armor, visibility, hp) {
        super('Middle', maxSpeed, armor, visibility, hp, 0, 0)
    }
}

export default MiddleTank;