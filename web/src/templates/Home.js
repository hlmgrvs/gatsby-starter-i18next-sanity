import React from "react"
import {graphql, Link} from "gatsby"

import Layout from '../containers/layout'
import Container from '../components/container'

import Image from "../components/image"
import SEO from "../components/seo"
import {useTranslation} from "react-i18next"

export const query = graphql`
query Homepage($language: String) {
  allSanityProduct {
    edges {
      node {
        slug {
          translate(language: $language)
        }
        name {
          translate(language: $language)
        }
      }
    }
  }
  site: sanitySiteSettings(_id: {}) {
    title
    description
    keywords
  }
}
`
const IndexPage = props => {
    const {t, i18n} = useTranslation("home")
    const site = (props.data || {}).site
    return (
        <Layout alternateLink={props.alternateLinks}>
            <SEO title={t("homeTitle")} description={site.description} keywords={site.keywords} />
            <Container>
            <h1>{t("hi")}</h1>
            <p>{t("welcome")}</p>
            <p>{t("navigateTo")}</p>
            <ul>
                {props.data.allSanityProduct.edges.map((edge, i) => (
                    <li key={i}>
                        <Link
                            
                            to={`/${i18n.language}/${t("common:productSlug")}/${
                                edge.node.slug.translate
                            }`}
                        >
                            {t("productTitle", {productName: edge.node.name.translate})}
                        </Link>

                    </li>
                ))}
            </ul>

            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <Image/>
            </div>

            </Container>
        </Layout>
    )

}

export default IndexPage
