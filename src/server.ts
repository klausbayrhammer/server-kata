import * as fastify from 'fastify'
import {createBike, getAllBikes} from "./controller"
import parseBike from "./parse-bike"
import {Bike} from "./bike.interface"

const server: fastify.FastifyInstance = fastify({})

export async function start(): Promise<string> {
    server.get('/bikes/', async () => {
        return getAllBikes()
    })

    server.post('/bike/', async (request, reply) => {
        let bike: Bike
        try {
            bike = parseBike(request.body)
        } catch (e) {
            return reply.status(400).send()
        }
        createBike(bike)
        reply.status(200).send()
    })

    return server.listen(3000)
}

export function stop(): Promise<void> {
    return server.close()
}
