import express from 'express';
import { create } from 'express-handlebars';
import connection from './db/connection.js';
import session from 'express-session';
import FileStoreFactory from 'session-file-store';
import path from 'path';
import os from 'os';
import flash from 'express-flash';

import Tought from './models/Toughts.js';
import User from './models/User.js';
import Emprestimo from './models/Emprestimo.js';

import toughtsRoute from './routes/toughtsRouter.js';
import authsRoute from './routes/authsRoutes.js';
import emprestimoRoute from './routes/emprestimoRoutes.js'
import ToughtController from './controllers/ToughtController.js';
import AuthController from './controllers/AuthController.js';

const hbs = create({ partialsDir: ['views/partials'] }); // Configura o Handlebars
const port = 3030; // Definição da porta
const app = express(); // Invocação do express
const FileStore = FileStoreFactory(session); // Definição para salvar arquivos de sessão

app.engine('handlebars', hbs.engine);   // Definição da template engine
app.set('view engine', 'handlebars');   // Definição da propriedade de view engine
app.use(express.static('public'));      // Definicão de arquivos estaticos

// Onde o express vai salvar as sessões
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: path.join(os.tmpdir(), 'session')
        }),
        cookie: {
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        }
        
    }),
);

app.use(flash()); // Flash massages

// Configurar a sessão na resposta
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }
    next();
});

app.use(express.urlencoded({ extended: true }));    // Definição para leitura do que vem no corpo da requisição
app.use(express.json());    // Definição para leitura de arquivos JSON

// Routes
app.use('/toughts', toughtsRoute);
app.use('/emprestimo', emprestimoRoute)
app.use('/', authsRoute);
app.get('/', ToughtController.showToughts);

connection
    //.sync({force: true})
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}!`);
        });
}).catch((Error) => console.log(Error));
