import React, {Fragment, useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

import Layout from '../components/Layout';
import HackCard from '../components/HackCard';
import PaginationBox from '../components/PaginationBox';
import {GITHUB_ENDPOIINT_LOCAL, PER_PAGE} from '../config/global'

function HackComponent(props){
    return (
       <div className="main-container">
           {props.issues.map(hack => (
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

function DailyTagPage(props){

    const [issues, setIssues] = useState(props.dailyhacks)
    const [loadingCount, setLoadingCount] = useState(true)
    const [page, setPage] = useState(2)

    const loadMoreTagIssues = () => {
        const url = `${GITHUB_ENDPOIINT_LOCAL}/issues?labels=${props.tag_name}&page=${page}&per_page=${PER_PAGE}`

        axios.get(url).then((res)=>{
            if(res.data.length > 0){
                setIssues([...issues, ...res.data])
                setPage(page+1)
            }else{
                setLoadingCount(false)
            }
        })
    }

    return(
        <Fragment>
            <Layout title={`DailyHack: ${props.tag_name} tricks`} description="An community of makers, developers and geeks where they share there daily hack they use in their developments." image="/static/images/daily-hack-image.png" pageUrl="https://dailyhack.xyz" {...props}>
                <HackComponent issues={issues}/>
                <div className="load-more-issues">
                    {loadingCount
                        ? <span onClick={loadMoreTagIssues}>Load More</span>
                        : <div>That's all. You have any hack then add <a href="https://github.com/mddanishyusuf/dailyhack/issues" target="_blank" rel="noopener noreferrer">here</a></div>
                    }
                </div>
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

DailyTagPage.getInitialProps = async function(context){
    var tag_name = context.query.tag_name;
    const url = GITHUB_ENDPOIINT_LOCAL + '/issues?labels='+tag_name+'&page=1&per_page=10'
    const result = await fetch(url)
    const data = await result.json()
    return {
        dailyhacks: data,
        tag_name
    }
}

export default DailyTagPage