import * as Express from 'express';
import getNoteBook from './controller';

const router = Express.Router();

router.get('/getNotebook', getNoteBook);

export default router;