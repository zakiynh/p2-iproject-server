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
        const findUser = await prisma.user.findUnique({
            where: {
                email: payload.email
            }
        })
        if (!findUser) {
            throw {
                name: "Unauthorized",
                message: "Need to Login First"
            }
        }
        req.user = {
            id: findUser.id,
            email: findUser.email
        };
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = auth;