import express from 'express';
import EmprestimoController from '../controllers/EmprestimoController.js'
import checkAuth from '../helpers/auth.js';

const router = express.Router()

router.get('/add/:id', checkAuth, checkAuth, EmprestimoController.createEmprestimo);
router.post('/add/', checkAuth, checkAuth, EmprestimoController.createEmprestimoSave);

router.get('/remove/:id', checkAuth, checkAuth, EmprestimoController.removeEmprestimo);
router.post('/remove/', checkAuth, checkAuth, EmprestimoController.removeEmprestimoSave);




export default router;