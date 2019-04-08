import {Fragment} from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta name="title" content={props.title} />
                <meta name="description" content={props.description} />
    
                <meta name="twitter:card" content={props.summary} />
    
                <meta property="og:title" content={props.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={props.pageUrl} />
                <meta property="og:image" content={props.image}/>
                <meta property="og:description" content={props.description} />
    
                <link href="https://fonts.googleapis.com/css?family=Questrial|Poppins:500" rel="stylesheet"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86945790-5"></script>
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-86945790-5');
                     `
                    }}
                />

            </Head>
            <Header/>
            <div className="main">{props.children}</div>
            <Footer />
            <style jsx global>
                {`
                    body {
                        padding: 0 !important;
                        font-family: 'Questrial', sans-serif;
                        margin: 0;
                    }
                    .main {
                        min-height: 700px !important;
                    }
                    p {
                        line-height: 1.8
                    }
                `}
            </style>
        </div>
    )
}

export default Layout;