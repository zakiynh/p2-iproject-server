const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Controller {
    static async addComment(req, res, next) {
        const { comment } = req.body;
        const { id } = req.user;
        const { threadId } = req.params;
        try {
            if (!comment) {
                throw {
                    name: "Invalid Input",
                    message: "Please fill all the fields"
                }
            }
            const commentData = await prisma.comment.create({
                data: {
                    comment,
                    userId: +id,
                    threadId: +threadId
                }
            })
            res.status(201).json({
                message: "Comment Created",
                commentData
            })
        } catch (error) {
            next(error)
        }
    }

    static async deleteComment(req, res, next) {
        const { commentId } = req.params;
        try {
            const findComment = await prisma.comment.findUnique({
                where: {
                    id: +commentId
                }
            })
            if (!findComment) throw {
                name: "Not Found",
                message: "Comment not found"
            }
            await prisma.comment.delete({
                where: {
                    id: +commentId
                }
            })
            res.status(200).json({
                message: "Comment Deleted",
                data: findComment
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller;