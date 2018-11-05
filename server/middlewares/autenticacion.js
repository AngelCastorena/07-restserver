const jwt = require('jsonwebtoken');

//=======================
// Verificar token
//=======================
let verificaToken = (req, res, next) => {
    let token = req.get('token'); //nombre del token de la conexion
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no valido"
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    })

}

//=======================
// Verifica adminrole
//=======================
let verificaAdmin_Role = (req, res, next) => {

    if (req.usuario.role != "ADMIN_ROLE") {
        return res.json({
            ok: false,
            err: {
                message: "El usuario no es admin"
            }
        })
    }

    next();

};


module.exports = {
    verificaToken,
    verificaAdmin_Role
}