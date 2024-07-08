// 

import jwt from 'jsonwebtoken';

export const userAuthorized = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) {
        return res.status(401).send("No tiene permiso para acceder a este recurso")
    }
    token = token.replace("Bearer ", "").trim()

    req.session = {
        user: null
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.session.user = data;
    } catch(error) {
        console.log(error);
        return res.status(401).send("No tiene permiso para acceder a este recurso")
    }

    next();
}

