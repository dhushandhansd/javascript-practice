import * as Express from 'express';
import deleteNoteBooks from './controller';

const router = Express.Router();

router.delete('/deleteAllnotebook', deleteNoteBooks);

export default router;