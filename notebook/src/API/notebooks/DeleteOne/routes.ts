import * as Express from 'express';
import deleteNoteBook from './controller';

const router = Express.Router();

router.delete('/deleteAllnotebook', deleteNoteBook);

export default router;