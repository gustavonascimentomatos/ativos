import { where } from 'sequelize';
import Toughts from '../models/Toughts.js';
import User from '../models/User.js';
import { Op } from 'sequelize';
import Emprestimo from '../models/Emprestimo.js';
import { raw } from 'mysql2';
class ToughtController {
    static async showToughts(req, res) {
        let search = ''; 
        if (req.query.search) {
            search = req.query.search;
        }
        let order = 'DESC';
        if (req.query.order === 'old') {
            order = 'ASC';
        } else {
            order = 'DESC';
        }
        const toughtsData = await Toughts.findAll({
            where: {
                [Op.or]: [
                    { patrimonio: { [Op.like]: `%${search}%` } },
                    { localizacao: { [Op.like]: `%${search}%` } }
                ]
            },
            order: [['createdAt', order]]
        });
        
        const toughts = toughtsData.map((result) => result.get({ plain: true }));
        let toughtsQty = toughts.length;
        if (toughtsQty === 0) {
            toughtsQty = false;
        }
        res.render('toughts/home', { toughts, search, toughtsQty });
    }

    static async dashboard(req, res) {
        const userId = req.session.userid;
        const user = await User.findOne({
            where: { 
                id: userId 
            },
            plain: true
        });
        if (!user) {
            res.redirect('/login');
        }

        const toughtsData = await Toughts.findAll();
        const toughts = toughtsData.map((result) => result.get({ plain: true }));

        let emptyToughts = false;
        if (toughts.length === 0) {
            emptyToughts = true;
        }
        res.render('toughts/dashboard', { toughts, emptyToughts });
    }

    static async createTought(req, res) {
        const usersData = await User.findAll();
        const users = usersData.map((result) => result.get({ plain: true }));
        res.render('toughts/create', {users});
    }


    static async createUser(req, res) {
        res.render('toughts/createuser');
    }

    static async createUserSave(req, res){
        const { name, email } = req.body;

        const user = { name, email }

        try {
            await User.create(user);
            req.flash('message', 'Equipamento criado com sucesso!');
            res.redirect('/toughts/dashboard')
        } catch (error) {
            console.log(error);
        };

    }

    static async createToughtSave(req, res){
        const tought = {
            patrimonio: req.body.patrimonio,
            marca: req.body.marca,
            modelo: req.body.modelo,
            serial: req.body.serial,
            localizacao: req.body.localizacao,
            observacao: req.body.observacao,
            emprestado: false
        }
        try {
            await Toughts.create(tought);
            req.flash('message', 'Equipamento criado com sucesso!');
            req.session.save(() => {
                res.redirect('/toughts/dashboard'); 
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async removeTought(req, res) {
        const id = req.body.id;
        try {
            await Toughts.destroy({ where: { id} });
            req.session.save(() => {
                res.redirect('/toughts/dashboard'); 
            });
        } catch (error) {
            console.log(error); 
        }
    }

    static async updateTouht(req, res) {
        const id = req.params.id;
        const tought = await Toughts.findOne({ where: { id }, raw: true });

        const usersData = await User.findAll();
        const users = usersData.map((result) => result.get({ plain: true }));
        res.render('toughts/edit', { tought, users, id}); 
    }

    static async updateTouhtSave(req, res) {
        const id = req.body.id;
        const tought = {
            patrimonio: req.body.patrimonio,
            marca: req.body.marca,
            modelo: req.body.modelo,
            serial: req.body.serial,
            localizacao: req.body.localizacao,
            observacao: req.body.observacao,
        }
        try {
            await Toughts.update(tought, { where: { id } });
            req.flash('message', 'Equipamento atualizado com sucesso!');
            req.session.save(() => {
                res.redirect('/toughts/dashboard'); 
            });
        } catch (error) {
            console.log(error);
        }
    }

/*    
    static async showProduto(req, res) {
        const id = req.params.id;


        const tought = await Toughts.findOne({ raw: true, where: { id } });
        const emprestimo =  await Emprestimo.findAll({ raw: true, where: {ToughtId: id} })
        const users =  await User.findAll()

        const emprestimoComUsuario = emprestimo.map(item => {
            const user = users.find(u => u.id === item.userId);
            return {
              ...item,
              userName: user ? user.name : 'Usuário não encontrado'
            };
          })

        res.render('toughts/produto', { tought, emprestimo: emprestimoComUsuario })

    }

*/

    static async showProduto(req, res) {
        const id = req.params.id;
    
        try {

            const tought = await Toughts.findOne({ raw: true, where: { id } });
            const emprestimo = await Emprestimo.findAll({ raw: true, where: { ToughtId: id } });
    
            const users = await User.findAll({ raw: true });
    
            console.log(emprestimo)
            console.log(users)
            // Criando o mapeamento dos empréstimos com os nomes dos usuários
            const emprestimoComUsuario = emprestimo.map(item => {
                const user = users.find(u => u.id === item.UserId);
                return {
                    ...item,
                    userName: user ? user.name : 'Usuário não encontrado'
                };
            });
    
            res.render('toughts/produto', { tought, emprestimo: emprestimoComUsuario });
        } catch (error) {
            console.error(error);
        }
    }
    


}

export default ToughtController;
