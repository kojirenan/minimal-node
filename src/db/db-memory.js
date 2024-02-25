export default class User {
    #users = [];

    list() {
        return this.#users;
    }

    create(users) {
        this.#users.push(users);
    }

    put(id, users) {
        const index = this.#users.findIndex(user => user.id == id);
        this.#users[index] = users;
    }

    delete(id) {
        this.#users = this.#users.filter(user => user.id != id);
    }
}
