import express from 'express';
import User from './db/db-postgres.js';

const router = express.Router();
const dbUser = new User();

router.get('/users', async (req, res) => {
    const users = await dbUser.list();
    return res.send(users);
});

router.post('/users', async (req, res) => {
    const { id, name, age, email } = req.body;

    await dbUser.create({
        id,
        name,
        age,
        email,
    });

    return res.status(201).send();
});

router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { id, name, age, email } = req.body;

    await dbUser.put(userId, {
        id,
        name,
        age,
        email,
    });

    return res.status(204).send();
});

router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    await dbUser.delete(userId);

    return res.status(204).send();
});

export default router;
