const machines = [
    { id: "1", brand: "Dell", model: "Inspiron 5502", processor: "Intel Core i5", price: 750 },
    { id: "2", brand: "HP", model: "Pavilion Gaming", processor: "AMD Ryzen 5", price: 950 },
    { id: "3", brand: "Apple", model: "MacBook Pro", processor: "Apple M2", price: 1300 },
];

export async function machinesCtr(fastify, options) {
    // Route to get all machines
    fastify.get("/machines", async (request, reply) => {
        try {
            return reply.send({ success: true, data: machines });
        } catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({ success: false, error: "Internal Server Error" });
        }
    });

    // Route to get a single machine by ID
    fastify.get("/machines/:id", async (request, reply) => {
        const { id } = request.params;

        try {
            const machine = machines.find((m) => m.id === id);

            if (!machine) {
                return reply.status(404).send({ success: false, error: "Machine not found" });
            }

            return reply.send({ success: true, data: machine });
        } catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({ success: false, error: "Internal Server Error" });
        }
    });
}

// module.exports = machinesCtr;
