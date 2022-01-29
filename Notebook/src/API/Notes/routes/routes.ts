import {createNotes, deleteNote, readAllNote, readOneNote, updateNote, deleteAll} from '../controller/controller';

import * as Express from 'express';
import {Router} from 'express';

const router:Router = Express.Router();

router.post('/new', createNotes);
router.get('/read/:noteBookId', readOneNote);
router.get('/readAll', readAllNote);
router.put('/update/:noteBookId', updateNote);
router.delete('/delete/:noteBookId', deleteNote);
router.delete('/deleteAll', deleteAll);

export default router;