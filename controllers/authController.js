const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { passHash, comparePassword } = require('../helpers/bcrypts');
const { signPayload } = require('../helpers/jwt');
const nodemailer = require('nodemailer');

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
            // let transporter = nodemailer.createTransport({
            //     service: "hotmail",
            //     auth: {
            //         user: "jaki0207@outlook.com",
            //         pass: "apa2apa22"
            //     }
            // });
            // if (username, email, password) {
            //     let info = await transporter.sendMail({
            //         from: 'jaki0207@outlook.com', // sender address
            //         to: customerEmail, // list of receivers
            //         subject: "Registration Information", // Subject line
            //         text: "WELCOME TO THE THREAD", // plain text body
            //         html: `${temp}
            //         <h1 style="color:#4D4C7D">Enjoy Your Journet</h1>
            //         `, // html body
            //     });
            //     console.log(info, "success send email");
            // }
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