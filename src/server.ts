import fastify from 'fastify'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE -> HTTP Methods

// http://localhost:3333/hello

app.get('/hello', () => {
  return 'Hello World!'
})

app.listen({ port: 3333 }).then(() => {
  console.log('Http server running!')
})
