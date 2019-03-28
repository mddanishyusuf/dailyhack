import {Fragment} from 'react';
import Head from 'next/head'

import Header from './Header';

const Layout = props => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <Header />
        {props.children}
    </div>
)

export default Layout;