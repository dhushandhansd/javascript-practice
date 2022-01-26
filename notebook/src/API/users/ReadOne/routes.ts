import * as Express from 'express';
import {readOneUser} from './controller';

const router = Express.Router();

router.get('/getUser', readOneUser);

export default router;
