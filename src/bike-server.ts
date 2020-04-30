import * as fastify from 'fastify'
import {getAllBikes} from "./bike-controller"

const server: fastify.FastifyInstance = fastify({})

export async function start() {
    server.get('/bikes/', async () => {
        return getAllBikes()
    })

    return server.listen(3000)
}

export function stop() {
    return server.close()
}
