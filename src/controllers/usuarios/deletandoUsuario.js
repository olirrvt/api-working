const deletandoUsuarioController = async (req, res) => {
    const usuario = require("../../models/usuarios");
    const id = req.params.id;
    const usuarioExistente = await usuario.findByPk(id);

    if (usuarioExistente) {
        await usuario.destroy({
            where: {
                id: id
            }
        })
    } else {
        return res.json({ message: "Usuário não encontrado!" })
    }
    return res.json({ message: "Usuário deletado com sucesso!", usuario: usuarioExistente });
};

module.exports = deletandoUsuarioController;