import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.get('/users/:id', async (req, res) => {
   const id = parseInt(req.params.id)
   const user = await prisma.User.findUnique({
      where: { id }
   })
   res.send(user)
})

app.get('/users', async (req, res) => {
   const users = await prisma.User.findMany({})
   res.send(users)
})

app.listen(3000, () => console.log(`App listening at http://localhost:3000`))