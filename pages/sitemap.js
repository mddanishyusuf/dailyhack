import React, {Fragment, useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router';
import getSlug from 'speakingurl'
import Link from 'next/link';
import {DAILYHACK_GITHUB_API} from '../config/global'

import Layout from '../components/Layout';

const SiteMapList = withRouter(props=>{
    return (
       <div className="main-container">
       <h3>Sitemap</h3>
       <ol>
           {props.dailyhacks.map(hack => (
               <li key={hack.id}><Link as={`/post/${[getSlug(hack.title),hack.number].join('-')}`} href={`/post?number=${hack.number}&slug=${[getSlug(hack.title)]}`}><a>{hack.title}</a></Link></li>
           ))}
           </ol>
           <style jsx>{`
               .main-container {
                    padding: 10px;
                }   
               @media screen and (min-width: 700px) {
                    .main-container {
                        width: 80%;
                        margin: 0px auto;
                    }   
               }            
           `}</style>
        </div>
    )
})

function DailyHackHome(props){
    return(
        <Fragment>
            <Layout title="Daily Hack: Sitemap" description="An community of makers, developers and geeks where they share there daily hack they use in their developments." image="/static/images/daily-hack-image.png" pageUrl="https://dailyhack.xyz/sitemap" {...props}>
                
                <SiteMapList {...props}/>
            </Layout>
        </Fragment>
    )
}

DailyHackHome.getInitialProps = async function(context){

    const url = DAILYHACK_GITHUB_API + '/issues/1/100'
    const result = await fetch(url)
    const data = await result.json()
    return {
        dailyhacks: data.issues
    }
}

export default DailyHackHome