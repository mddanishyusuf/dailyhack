import React, {Fragment, useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import getSlug from 'speakingurl'

import Layout from '../components/Layout';

function HackComponent(props){
    return (
       <div>
           {props.dailyhacks.map(hack => (
               <div key={hack.id}>
                    <Link as={`/post/${[getSlug(hack.title),hack.number].join('-')}`} href={`/post?number=${hack.number}&slug=${[getSlug(hack.title)]}`}><a>{hack.title}</a></Link>
               </div>
           ))}
        </div>
    )
}

function DailyHackHome(props){
    return(
        <Fragment>
            <Layout title="Daily Hack: Share your daily hack with others">
                <HackComponent {...props}/>
            </Layout>
        </Fragment>
    )
}

DailyHackHome.getInitialProps = async function(){
    const result = await fetch(process.env.DAILYHACK_GITHUB_API)
    const issues = await result.json()
    return {
        dailyhacks: issues
    }
}

export default DailyHackHome