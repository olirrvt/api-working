const { compare } = require("bcrypt");

const loginUserController = async (req, res) => {

    const usuario = require("../../models/usuarios");
    const { email, senha } = req.body;


    const usuarioExistente = await usuario.findOne({
        where: { email: email }
    });
    // Procura o email

    if (!usuarioExistente) {
        return res.json({ message: "Verifique seus dados e tente novamente!" })
    };
    // Compara o email

    console.log(usuarioExistente.dataValues);
    const senhaValida = await compare(senha, usuarioExistente.dataValues.senha);

    if(!senhaValida) {
        return res.json({ message: "Verifique seus dados e tente novamente!" })
    }
    // Compara a senha criptografada

    await usuario.update({
        id: usuarioExistente.id,
        nome: usuarioExistente.nome,
        email: usuarioExistente.email,
        senha: usuarioExistente.senha,
        logado: 1
    }, { where: { id: usuarioExistente.id } });
    // Muda o status de logado

    const usuarioLogado = await usuario.findOne({ where: { id: usuarioExistente.dataValues.id } });
    return res.json({ message: "Login efetuado com sucesso!", usuario: usuarioLogado })
}

module.exports = loginUserController;