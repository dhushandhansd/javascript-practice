import {createNotebook, deleteNotebook, readAllNotebook, readOneNotebook, updateNotebook, deleteAllNotebooks} from '../controller/controller';

import * as Express from 'express';
import {Router} from 'express';

const router:Router = Express.Router();

router.post('/new', createNotebook);
router.get('/read/:noteBookId', readOneNotebook);
router.get('/readAll', readAllNotebook);
router.put('/update/:noteBookId', updateNotebook);
router.delete('/delete/:noteBookId', deleteNotebook);
router.delete('/deleteAll', deleteAllNotebooks);

export default router;