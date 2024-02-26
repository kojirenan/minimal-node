import sql from './db.js';

export default class User {
    async list() {
        const users = await sql`SELECT * FROM users`;
        return users;
    }

    async create(users) {
        const { name, email, age } = users;
        await sql`INSERT INTO users (name, email, age) VALUES (${name}, ${email}, ${age})`;
    }

    async put(id, users) {
        const { name, email, age } = users;
        await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${id}`;
    }

    async delete(id) {
        await sql`DELETE FROM users WHERE id = ${id}`;
    }
}
