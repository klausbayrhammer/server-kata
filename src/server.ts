import * as fastify from 'fastify'
import {getAllBikes} from "./controller"

const server: fastify.FastifyInstance = fastify({})

export async function start(): Promise<string> {
    server.get('/bikes/', async () => {
        return getAllBikes()
    })

    return server.listen(3000)
}

export function stop(): Promise<void> {
    return server.close()
}
