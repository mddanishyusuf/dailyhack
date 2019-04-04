import {Fragment} from 'react';
import Head from 'next/head';

import Header from './Header';

const Layout = props => {
    console.log(props)
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
            </Head>
            <Header/>
            {props.children}
            <style jsx global>
                {`
                    body {
                        padding: 0 !imporatnt;
                        font-family: 'Questrial', sans-serif;
                        margin: 0;
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