const { hash } = require("bcrypt");

const inserindoUsuarioController = async (req, res) => {
    try {
        let db = require("../../connection/db");
        let usuario = require('../../models/usuarios');
    
        await db.sync();
    
        const { nome, email, senha, cep, cpf, rg } = req.body;
        const passwordHash = await hash(senha, 8);
        const newUser = await usuario.create({
            nome, email, senha: passwordHash, cep, cpf, rg,logado: 1
        });
        return res.json({ message: "Usuário cadastrado com sucesso!", usuario: newUser });
    } catch(err) {
        return res.json({ message: "Ocorreu um erro interno!" })
    }
    }


module.exports = inserindoUsuarioController;