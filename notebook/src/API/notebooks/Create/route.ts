import * as Express from 'express';
import createNoteBook from './controller';

const router = Express.Router();

router.post('/newNotebook', createNoteBook);

export default router;