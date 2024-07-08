// 

import jwt from 'jsonwebtoken';

export const userAuthorized = (req, res, next) => {
    const token = req.headers.authorization;
    let data = null;

    req.session = {
        user: null
    }

    try {
        data = jwt.verify(token, process.env.JWT_SECRET);
        req.session.user = data;
    } catch { }

    next();
}