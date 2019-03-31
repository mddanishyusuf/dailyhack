import {Fragment} from 'react';
import Head from 'next/head';

import Header from './Header';

const Layout = props => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>{props.title}</title>
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

export default Layout;