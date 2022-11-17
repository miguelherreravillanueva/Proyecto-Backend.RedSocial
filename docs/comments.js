module.exports = {
    paths: {
      "/createComment/:_idks": {
        post: {
          tags: {
            Comment: "Post comments",
          },
          description: "Post comments",
          operationId: "postcomments",
          parameters: [],
          responses: {
            200: {
              description: "Comments were obtained",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/comment",
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  