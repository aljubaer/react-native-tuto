import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secretkey';

const JWT_OPTS = {
    issuer: 'myapp'
}

const createToken = (user) => {
    if (!user && !user._id) {
        return null;
    }

    const payload = {
        id: user._id
    }

    return jwt.sign(payload, JWT_SECRET, JWT_OPTS);
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET, JWT_OPTS);
}

const getTokenFromHeaders = (req) => {
    const token = req.headers.authorization;

    if (token) {
        const arr = token.split(' ');

        if (token) {
            try {
                return verifyToken(token);
            } catch (error) {
                return null;
            }
        }
    }
    return null;
}

export const AuthServices = {
    createToken,
    verifyToken,
    getTokenFromHeaders
}