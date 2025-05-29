import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE -> HTTP Methods

// http://localhost:3333/hello

app.get('/hello', async () => {
  // const transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Test Transaction',
  //     amount: 1000,
  //   })
  //   .returning('*')

  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

app.listen({ port: env.PORT }).then(() => {
  console.log('Http server running!')
})
