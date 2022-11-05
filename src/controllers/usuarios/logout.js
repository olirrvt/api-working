const logoutUserController = async (req, res) => {

    const usuario = require("../../models/usuarios");
    const id = req.params.id;
    const usuarioExistente = await usuario.findByPk(id);
    await usuario.update({
        nome: usuarioExistente.nome,
        email: usuarioExistente.email,
        senha: usuarioExistente.senha,
        logado: 0
    }, { where: { id: id } })
    const usuarioDeslogado = await usuario.findByPk(id);
    return res.json({ message: "Usuário deslogado com sucesso!", usuario: usuarioDeslogado})
}

module.exports = logoutUserController