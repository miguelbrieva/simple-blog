import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 16, 2019"
          title="Writing Resilient Components"
          excerpt="When people start learning React, they often ask for a style guide. While it’s a good idea to have some consistent rules applied across a project, a lot of them are arbitrary — and so React doesn’t have a strong opinion about them."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
