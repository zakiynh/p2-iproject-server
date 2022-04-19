const { verify, verifyPayload } = require('../helpers/jwt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function auth(req, res, next) {
    const { access_token } = req.headers;
    try {
        if (!access_token) {
            throw {
                name: "Invalid Token",
                message: "Need to Login First"
            }            
        }
        const payload = verifyPayload(access_token);
        const user = await prisma.user.findUnique({
            where: {
                id: payload.id,
                email: payload.email
            }
        })
        if (!user)
            throw {
                name: "Unauthorized",
                message: "Need to Login First"
            }
        req.user = user;
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = auth;