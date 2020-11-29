

export default {
    port: parseInt(process.env.PORT as string, 10),

    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },

    api: {
        prefix: "/api"
    }

}