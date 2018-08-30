import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>My name is John Asalu</p>
    <p>And it's nice to meet you too</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
