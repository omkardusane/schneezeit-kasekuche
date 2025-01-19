// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })
const fastify = require('fastify')({ logger: true })

fastify.get('/', function handler (request, reply) {
  return { hello: 'world' }
})

  fastify.listen({ port: 3000 }).then().catch((err)=>{
    fastify.log.error(err)
    process.exit(1)
  
  })
