import * as fastify from "fastify"
import {createBike, getAllBikes} from "./controller"
import parseBike from "./parse-bike"
import {Bike} from "./bike.interface"

export default function registerRoutes(server: fastify.FastifyInstance): void {
    server.get("/bikes/", async () => {
        return getAllBikes()
    })

    server.post("/bike/", async (request, reply) => {
        let bike: Bike
        try {
            bike = parseBike(request.body)
        } catch (e) {
            return reply.status(400).send()
        }
        createBike(bike)
        reply.status(200).send()
    })
}
