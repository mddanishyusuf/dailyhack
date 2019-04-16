import {useState, useEffect} from 'react';
import axios from 'axios';
import Router from 'next/router'

import {GITHUB_SEARCH_ENDPOIINT, GLITCH_ENDPOINT} from '../config/global'

function SearchInput(props){

    const [searchQuery, setSearchQuery] = useState(props.query)

    const setQuery = (e) => {
        setSearchQuery(e.target.value)
    }

    const searchIssues = (e) => {
        e.preventDefault()
        var q = searchQuery.trim().split(' ').join('+')
        Router.push(`/search/${q}`)
    }

    return(
        <div>
            <div className="search-issues">
                <form onSubmit={searchIssues.bind()}>
                    <input type="text" onChange={setQuery.bind()} value={searchQuery} placeholder="🔍 Let's find some tricks from past"/>
                </form>
            </div>
            <style jsx>
                {`
                    .search-issues {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .search-issues input {
                        padding: 5px 10px;
                        min-width: 300px;
                        font-size: 1rem;
                        border: 2px solid #707070;
                        -webkit-text-decoration: none;
                        text-decoration: none;
                        border-radius: 4px;
                        font-family: 'Questrial', sans-serif;
                    }
                `}
            </style>
        </div>
    )
}

export default SearchInput;