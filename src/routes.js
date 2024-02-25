import express from 'express';
import User from './db/db-memory.js';

const router = express.Router();
const dbUser = new User();

router.get('/users', (req, res) => {
    const users = dbUser.list();
    return res.send(users);
});

router.post('/users', (req, res) => {
    const { id, name, age, email } = req.body;

    dbUser.create({
        id,
        name,
        age,
        email,
    });

    return res.status(201).send();
});

router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { id, name, age, email } = req.body;

    dbUser.put(userId, {
        id,
        name,
        age,
        email,
    });

    return res.status(204).send();
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    dbUser.delete(userId);

    return res.status(204).send();
});

export default router;
