import * as Express from 'express';
import {getUsers} from './controller';

const router = Express.Router();

router.get('/getUsers', getUsers);

export default router;