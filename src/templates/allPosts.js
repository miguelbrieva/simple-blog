import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"
import { H1, P } from "../elements"

const allPost = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `${currentPage + 1}`
  const posts = data.allMdx.edges

  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAling="center" margin="0 0 1rem 0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </H1>
        <P color="dark2" textAlign="cneter">
          Tempora ad magnam praesentium blanditiis illo vero molestiae, unde
          recusandae veniam ducimus nam! Doloremque tempora eius dicta minus
          earum eligendi dolore dolorem.
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPost

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`
