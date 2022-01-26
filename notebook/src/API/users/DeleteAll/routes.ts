import * as Express from 'express';
import deleteAll from './controller';

const router = Express.Router();

router.delete('/deleteAll', deleteAll);

export default router;
