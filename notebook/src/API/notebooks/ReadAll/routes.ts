import * as Express from 'express';
import getNoteBooks from './controller';

const router = Express.Router();

router.get('/getNotebooks', getNoteBooks);

export default router;