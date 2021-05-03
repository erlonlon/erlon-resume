import React from 'react'
import App from 'next/app'
import '../css/styles.css'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp