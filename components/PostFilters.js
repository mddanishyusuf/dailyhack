import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'

import {GLITCH_ENDPOINT} from '../config/global'
import SearchInput from './SearchInput'

function PostFilters(){

    const [tags, setTags] = useState([])

    useEffect(()=>{
        axios.get(GLITCH_ENDPOINT + '/tags').then(res=>{
            setTags(res.data)
        })
    },[])
    return(
        <div>
            <SearchInput query=""/>
            <ul className="post-filtters">
            {tags.map((tag, key)=>{
                if(tag.name !== 'dailyhack'){
                    return(
                        <li key={key}><Link href={`/tag/${tag.name}`}><a>#{tag.name}</a></Link></li>
                    )
                }
            })}
            </ul>
            <style jsx>
                {`
                    .search-issues {
                        text-align: center;
                    }

                    .search-issues input {
                        padding: 5px 10px;
                        min-width: 200px;
                    }

                    .post-filtters {
                        text-align: center;
                    }

                    .post-filtters {
                        padding:0;
                        margin:0 auto;
                        list-style-type: none;
                        margin-bottom: 40px;
                        width: 60%;
                    }

                    .post-filtters li{
                        padding:0;
                        margin:0;
                        display: inline-block;
                        padding: 3px 10px;
                        color:#4618B1;
                        font-size: 0.9rem;
                    }
                `}
            </style>
        </div>
    )
}

export default PostFilters;