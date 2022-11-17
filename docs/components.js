module.exports = {
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
        schemas: {
            comment: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "comment identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    body: {
                        type: 'string',
                        description: "comment's title",
                        example: "make an excellent readme"
                    },
                    userId: {
                        type: 'objectId',
                        description: "user identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                }
            },
            post: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "post identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    body: {
                        type: 'string',
                        description: "post's title",
                        example: "make an excellent readme"
                    },
                    userId: {
                        type: 'objectId',
                        description: "user identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    commentId: {
                        type: 'array',
                        items:
                          {  $ref: '#/components/schemas/_id'}
                    },
                }
            }
        }
    }
}
