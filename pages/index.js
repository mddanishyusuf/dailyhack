import React, {Fragment, useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import HackCard from '../components/HackCard';
import PaginationBox from '../components/PaginationBox';

function HackComponent(props){
    return (
       <div className="main-container">
           {props.dailyhacks.map(hack => (
               <div key={hack.id}>
                    <HackCard single_issue={hack}/>
               </div>
           ))}
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
}

function DailyHackHome(props){
    return(
        <Fragment>
            <Layout title="Daily Hack: A community of Makers and Geeks" description="An community of makers, developers and geeks where they share there daily hack they use in their developments." image="/static/images/daily-hack-image.png" pageUrl="https://dailyhack.xyz" {...props}>
                <HackComponent {...props}/>
                <PaginationBox {...props}/>
            </Layout>
        </Fragment>
    )
}

DailyHackHome.getInitialProps = async function(context){
    var page_number;
    var per_page = 10
    if(context.query.page_number === undefined){
        page_number = 1
    }else{
        page_number = context.query.page_number
    }
    const url = process.env.DAILYHACK_GITHUB_API + '/' + page_number + '/' + per_page
    const result = await fetch(url)
    const data = await result.json()
    return {
        dailyhacks: data.issues,
        page_number: context.query.page_number,
        total_issues: data.total_issues,
        active_page: page_number
    }
}

export default DailyHackHome