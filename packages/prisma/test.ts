import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main () {
    const bogusers = await prisma.bloguser.findMany();
    console.log("users: ",bogusers);
}


main();