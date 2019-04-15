import React, {Fragment, useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

import Layout from '../components/Layout';
import HackCard from '../components/HackCard';
import PaginationBox from '../components/PaginationBox';
import SearchInput from '../components/SearchInput'
import {GITHUB_ENDPOIINT_LOCAL, PER_PAGE, GITHUB_SEARCH_ENDPOIINT} from '../config/global'

function HackComponent(props){
    return (
       <div className="main-container">
           {props.issues.length > 0 ? props.issues.map(hack => (
               <div key={hack.id}>
                    <HackCard single_issue={hack}/>
               </div>
           )): 'No Result Found.'}
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

function SearchPage(props){

    const [issues, setIssues] = useState(props.dailyhacks)
    const inputQ = props.keywords.split('+').join(' ')
    return(
        <Fragment>
            <Layout title={`Search: ${props.keywords}`} description="An community of makers, developers and geeks where they share there daily hack they use in their developments." image="/static/images/daily-hack-image.png" pageUrl="https://dailyhack.xyz" {...props}>
                <SearchInput query={inputQ}/>
                <HackComponent issues={issues}/>
                <style jsx>
                    {`
                        .load-more-issues{
                            text-align: center;
                            margin-bottom: 40px;
                        }

                        .load-more-issues span {
                            cursor: pointer;
                            padding: 5px 20px;
                            border: 1px solid #333;
                            border-radius: 30% 40% 25% 45% / 40% 45% 30% 40%;
                        }
                    `}
                </style>
            </Layout>
        </Fragment>
    )
}

SearchPage.getInitialProps = async function(context){
    var keywords = context.query.keywords;
    const url = `${GITHUB_SEARCH_ENDPOIINT}?q=${keywords}+repo:mddanishyusuf/dailyhack`
    const result = await fetch(url)
    const data = await result.json()
    return {
        dailyhacks: data.items,
        keywords
    }
}

export default SearchPage