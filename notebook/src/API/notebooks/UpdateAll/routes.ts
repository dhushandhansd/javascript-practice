import * as Express from 'express';
import updateNotebooks from './controller';

const router = Express.Router();

router.get('/updateNotebooks', updateNotebooks);

export default router;