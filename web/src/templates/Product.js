import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from "../components/seo"

const ProductPage = ({ data }) => {
  const { t } = useTranslation("product")
  return (
    <Layout>
      <SEO title={data.sanityProduct.name.translate} />
      <Container>
      <h1>{t("welcome", { productName: data.sanityProduct.name.translate })}</h1>
      </Container>

    </Layout>
  )
}

export const query = graphql`
  query Product($product: String, $language: String) {
    sanityProduct(id: { eq: $product }) {
      name {
        translate(language: $language)
      }
    }
  }
`

export default ProductPage
