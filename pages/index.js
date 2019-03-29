import React, {Fragment, useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import HackCard from '../components/HackCard';

function HackComponent(props){
    return (
       <div className="main-container">
           {props.dailyhacks.map(hack => (
               <div key={hack.id} className="hack-list">
                    <HackCard single_issue={hack}/>
               </div>
           ))}
           <style jsx>{`
               .main-container {
                   width: 80%;
                   margin: 0px auto;
                   font-family: 'Questrial', sans-serif;
               }
               .hack-list {

               }
               p {
                   line-height: 1.8
               }
           `}</style>
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