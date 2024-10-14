const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({error: 'Access denied'});
    }

    try {
        const verifed = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verifed;
        next();
    } catch (err) {
        res.statues(400).json({ error: 'Invalid token'});
    }

};

module.exports = authenticateToken;