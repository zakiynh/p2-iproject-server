const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { passHash, comparePassword } = require('../helpers/bcrypts');
const { signPayload } = require('../helpers/jwt');

class Controller {
    static async signup(req, res, next) {
        const { username, email, password } = req.body;
        try {
            if(!username || !email || !password) {
                throw {
                    name: "Invalid Input",
                    message: "Please fill all the fields"
                }
            }
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: passHash(password, 10)
                }
            })
            res.status(201).json({
                user,
                message: "User Created",
            })
        } catch (error) {
            next(error)
        }
    }

    static async signin(req, res, next) {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                throw {
                    name: "Invalid Input",
                    message: "Please fill all the fields"
                }
            }
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            if (!user)
                throw {
                    name: "Unauthorized",
                    message: "Invalid email/password"
                }
            const isMatch = comparePassword(password, user.password);
            if(!isMatch)
                throw {
                    name: "Unauthorized",
                    message: "Invalid email/password"
                }
            const payload = {
                id: user.id,
                email: user.email
            }
            const token = signPayload(payload);
            const userData = {
                id: user.id,
                username: user.username,
                email: user.email,
                access_token: token
            }
            res.status(200).json({
                userData,
                message: "Login Success"
            })

        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = Controller;