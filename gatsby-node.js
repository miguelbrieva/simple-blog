// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
<<<<<<< HEAD
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
=======
//         nodes {
//           frontmatter {
//             slug
//           }
//           id
>>>>>>> b5904a9edc71ac2c860dafcde0d99541476fb951
//         }
//       }
//     }
//   `

//   // Create paginated pages for posts
<<<<<<< HEAD
//   const postPerPage = 3
=======

//   const postPerPage = 3

>>>>>>> b5904a9edc71ac2c860dafcde0d99541476fb951
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPages }).forEach((_, index) => {
//     actions.createPages({
//       path: index === 0 ? `/` : `/${index + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: index * postPerPage,
//         numPages,
//         currentPage: index + 1,
//       },
//     })
//   })

//   // Create single blog posts
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost`),
//       context: { id },
//     })
//   })
// }
