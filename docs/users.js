module.exports = {
    paths: {
      "/users/createUser": {
        post: {                
          tags: {
            Users: " - Create User",
          },
          description: "Create a new user (name, password & email are required)",
          operationId: "createUser",
          parameters: [],
          requestBody: {
            content: {
                "application/json": {
                schema: {
                  $ref: "#/components/schemas/createUser",
                },
              },
            },
          },
          responses: {
            200: { description: "User successfully created" },
            500: { description: "Server error" },
          },
        },
      },
    },
  };
  