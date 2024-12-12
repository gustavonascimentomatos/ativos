import express from 'express';
import EmprestimoController from '../controllers/EmprestimoController.js'
import checkAuth from '../helpers/auth.js';

const router = express.Router()

router.get('/add/:id', checkAuth, checkAuth, EmprestimoController.createEmprestimo);
router.post('/add/', checkAuth, checkAuth, EmprestimoController.createEmprestimoSave);




export default router;