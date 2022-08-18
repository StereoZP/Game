class User {
    constructor(username, login, password, currency, tanks) {

        this.username = username;
        this.login = login;
        this.password = password;
        this.currency = currency
        this.tanks = tanks || [];
    }

    addCurrency() {
        this.currency = this.user.money + this.currency;
        return this.currency;
    }

    ready() {
        if (this.username.length === 0) {
            throw new Error('Username is incorrect');
        }
    }

    setTanks(tanks) {
        this.tanks = tanks;
        this.tanks.forEach((tank) => tank.user = this)
        return this.tanks;
    }

}

export default User;