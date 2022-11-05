const pegandoUsuarioController = async (req, res) => {

        const usuario = require("../../models/usuarios")
        const usuarioExistente = await usuario.findAll()
        if (usuarioExistente != "") {
            return res.json({ usuarioExistente })
        } else {
            return res.json({ message: "Nenhum usuário foi encontrado!" })
        }
    
}

const pegandoUsuarioIdController = async (req, res) => {
    try {
        const usuario = require("../../models/usuarios");
        const id = req.params.id;
        const usuarios = await usuario.findByPk(id);
        if (usuarios) {
            return res.json({ Usuario: usuarios })
        } else {
            return res.json({ message: "Usuário não encontrado!" })
        }
    } catch(err) {
        return res.json({ message: "Ocorreu um erro interno!" })
    }
}

module.exports = { pegandoUsuarioController, pegandoUsuarioIdController }