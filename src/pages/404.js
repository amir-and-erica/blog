import React from 'react'
import Head from '../layouts/head'
export default () => (
  <div style={{textAlign:'center'}}>
    <Head
      url="https://blog.bythebay.cool/404"
      title="Error page"
      headline="You've reached a page that doesn't exist!"
      description="404!"
    />
    <h1>Sorry! Page not found.</h1>
    You just hit a route that doesn&#39;t exist. Head back to <a href="https://blog.bythebay.cool/">https://blog.bythebay.cool/</a> to continue exploring.
  </div>
)
