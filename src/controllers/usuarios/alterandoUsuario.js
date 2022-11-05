const { hash } = require("bcrypt");

const editandoUsuarioController = async (req, res) => {

        let usuario = require("../../models/usuarios");
        const id = req.params.id;
        const { nome, email, senha, cep, cpf, rg } = req.body;
        const senhacripto = senha;
        if (senha) {
            await hash(senhacripto, 8)   
        }
        const usuarioExistente = usuario.findByPk(id);
        await usuario.update({
            nome: nome || usuarioExistente.nome,
            email: email || usuarioExistente.email,
            senha: senhacripto || usuarioExistente.senha,
            cep: cep || usuarioExistente.cep,
            cpf: cpf || usuarioExistente.cpf,
            rg: rg || usuarioExistente.rg
        }, { where: { id: id } });
        const usuarioAtualizado = await usuario.findByPk(id);
        return res.json({ message: "Usuário Atualizado!", usuario: usuarioAtualizado })
    
};

module.exports = editandoUsuarioController;