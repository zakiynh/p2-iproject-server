const user = require('./user.json');
const thread = require('./thread.json');
const comment = require('./comment.json');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    for (let users of user) {
        await prisma.user.create({
            data: users,
        });
    }
    for (let threads of thread) {
        await prisma.thread.create({
            data: threads,
        });
    }
    for (let comments of comment) {
        await prisma.comment.create({
            data: comments,
        });
    }
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally( () => {
    prisma.$disconnect()
})