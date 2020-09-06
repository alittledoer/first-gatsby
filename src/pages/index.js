import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CountryFirst from "../components/countryfirst"

const motivationVideo = {
  title: "Vande Matarm",
  clipSrc: "3N4SRohMoEg"
}

const IndexPage = () => (
  <Layout>
    <SEO title="India First" />
    <h3>vande mātaram vande mātaram <br />
    sujalāṃ suphalāṃ, malayajaśītalām <br />
    śasyaśyāmalāṃ mātaram <br />
    vande mātaram</h3>
    <CountryFirst data={motivationVideo} />
  </Layout>
)

export default IndexPage
