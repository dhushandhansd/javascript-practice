import * as Express from 'express';
import { createUser } from "./controller";

const router = Express.Router();

router.post('/newUser', createUser);

router.get('/new', (req,res) => {
    res.send('New User Creation');
})

export default router;