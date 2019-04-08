import React from 'react'
import App, {Container} from 'next/app'
import Link from 'next/link'
import Router from 'next/router'
import routerEvents from 'next-router-events'


export default class MyApp extends App {

  constructor(props){
    super(props)

    this.state = {
      progress: false,
      isCancelled: false
    }

    routerEvents.on('routeChangeStart', (url) => {
      !this.isCancelled && this.setState({progress: true})
    })
    routerEvents.on('routeChangeComplete', () => {
          !this.isCancelled && this.setState({progress: false})
    })
    routerEvents.on('routeChangeError', () => {
      console.log('error')
    })
  }

  componentWillUnmount() {
      this.isCancelled = true;
  }

  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
          {this.state.progress ? <div id="progress" className="meter animate"><span></span></div> : ''}

        <Component {...pageProps} />
        <style jsx>
            {`
                .meter > span {
                    display: block;
                    height: 100%;
                    width: 100%;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    background-color: #4618B1;
                    background-image: linear-gradient(
                      center bottom,
                      #4618B1 37%,
                      rgb(84,240,84) 69%
                    );
                    box-shadow: 
                      inset 0 2px 9px  rgba(255,255,255,0.3),
                      inset 0 -2px 6px rgba(0,0,0,0.4);
                    position: relative;
                    overflow: hidden;
                  }
                  
                  .meter > span:after {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; bottom: 0; right: 0;
                    background-image: linear-gradient(
                      -45deg, 
                      rgba(255, 255, 255, .2) 25%, 
                      transparent 25%, 
                      transparent 50%, 
                      rgba(255, 255, 255, .2) 50%, 
                      rgba(255, 255, 255, .2) 75%, 
                      transparent 75%, 
                      transparent
                    );
                    z-index: 1;
                    background-size: 50px 50px;
                    animation: move 2s linear infinite;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    overflow: hidden;
                  }
                  .meter > span:after, .animate > span {
                    animation: move 2s linear infinite;
                  }
                  
                  @keyframes move {
                    0% {
                      background-position: 0 0;
                    }
                    100% {
                      background-position: 50px 50px;
                    }
                  }
                  
                  #progress {
                      position: fixed;
                      z-index: 1;
                      top: 0;
                      left: -6px;
                      width: 101%;
                      height: 3px;
                    
                  }
            `}
        </style>
      </Container>
    )
  }
}