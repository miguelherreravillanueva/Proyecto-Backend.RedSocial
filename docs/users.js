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
      "/users/loginUser": {
        post: {                
          tags: {
            Users: " - Login User",
          },
          description: "Login user",
          operationId: "loginUser",
          parameters: [],
          requestBody: {
            content: {
                "application/json": {
                schema: {
                  $ref: "#/components/schemas/loginUser",
                },
              },
            },
          },
          responses: {
            200: { description: "User successfully logged" },
            500: { description: "Server error" },
          },
        },
      },
      "/users/logoutUser": {
        delete: {
            security: [
              {
                ApiKeyAuth: [],
              },
            ],
            tags: {
                Users: " - Logout User",
              },
          description: "Logout user",
          operationId: "logoutUser",
          parameters: [],
          responses: {
            200: { description: "User successfully disconnected" },
            500: { description: "Server error" },
          },
        },
      },
    },
  };
  