import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Social</h1>
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained" href="https://booklog.jp/users/d546f5f695caa343">
          ブクログ
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" href="https://filmarks.com/users/musume00000">
          Filmarks
        </Button>
      </Grid>
    </Grid>
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
