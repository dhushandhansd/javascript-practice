import * as Express from 'express';
import {deleteOneUser} from './controller';

const router = Express.Router();

router.delete('/deleteUser', deleteOneUser);

export default router;