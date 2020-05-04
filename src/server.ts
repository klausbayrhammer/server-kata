import * as fastify from 'fastify'
import registerRoutes from "./routes"

const server: fastify.FastifyInstance = fastify({})

export async function start(): Promise<string> {
    registerRoutes(server)
    return server.listen(3000)
}

export function stop(): Promise<void> {
    return server.close()
}
