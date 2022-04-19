const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Controller {
    static async fetchThread(req, res, next) {
        try {
            const getData = await prisma.thread.findMany({
                include: { comment: true }
            })
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }

    static async createThread(req, res, next) {
        const { title, content, imgUrl } = req.body;
        const {id} = req.user;
        try {
            if (!title || !content || !imgUrl) {
                throw {
                    name: "Invalid Input",
                    message: "Please fill all the fields"
                }
            }
            const thread = await prisma.thread.create({
                data: {
                    title,
                    content,
                    imgUrl,
                }
            })
            res.status(201).json({
                message: "Thread Created",
                thread
            })
        } catch (error) {
            next(error)
        }
    }

    static async detailThread(req, res, next) {
        const { id } = req.params;
        try {
            const getDetail = await prisma.thread.findUnique({
                where: {
                    id: +id
                },
                include: { comment: true }
            })
            res.status(200).json(getDetail)
        } catch (error) {
            next(error)
        }
    }

    static async deleteThread(req, res, next) {
        const { id } = req.params;
        try {
            const findThread = await prisma.thread.findUnique({
                where: {
                    id: +id
                }
            })
            if (!findThread) {
                throw {
                    name: "Not Found",
                    message: "Thread Not Found"
                }
            }
            await prisma.thread.delete({
                where: {
                    id: +id
                }
            })
            res.status(200).json({
                message: "Thread Deleted",
                data: findThread
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller