import * as fastify from 'fastify'

const server: fastify.FastifyInstance = fastify({})

export async function start() {
    server.get('/bikes/', async (request, reply) => {
        return 'Bikes'
    })

    const port = 3000
    await server.listen(port)
    console.log(`server listening on ${port}`)
}

export function stop() {
    return server.close()
}
