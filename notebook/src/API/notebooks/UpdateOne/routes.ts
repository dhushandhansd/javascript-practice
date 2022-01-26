import * as Express from 'express';
import updateNotebook from './controller';

const router = Express.Router();

router.get('/updateNotebook', updateNotebook);

export default router;