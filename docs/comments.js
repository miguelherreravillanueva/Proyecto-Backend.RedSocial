// module.exports = {
//     paths: {
//       "/comments/createComment/{_id}": {
//         post: {
//             security: [{
//                 ApiKeyAuth: [ ]
//             }],      
//           tags: {
//             Comments: " - Create Comment",
//           },
//           description: "Post comments",
//           operationId: "postComments",
//           parameters: [
//             {
//               name: "_id",
//               in: "path",
//               schema: {
//                 $ref: "#/components/schemas/_id",
//               },
//               description: "Comment's ID",
//             },
//           ],
//           responses: {
//             200: { description: "Comment successfully created" },
//             500: { description: "Server error" },
//           },
//         },
//       },
//     },
//   };
  