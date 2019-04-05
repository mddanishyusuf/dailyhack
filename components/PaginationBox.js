import Link from 'next/link'

function PaginationBox(props){
    const activePage = props.active_page
    const numberOfPages = Math.ceil(props.total_issues / 10)
    const paginationArray = Array.from(Array(numberOfPages).keys())
    return(
        <div className="pagination">
        {activePage}
            <ul>
                {paginationArray.map(number => {
                    return(
                        <li key={number}>
                            {number+1 === parseInt(activePage) ? <span>{number+1}</span> : <Link as={`/page/${number+1}`} href={`/page?page_number=${number+1}`}><a>{number+1}</a></Link>}
                        </li>
                        
                    )
                })}
            </ul>
            <style jsx>
                {`
                    .pagination ul{
                        padding: 0;
                        margin: 20px 0px 100px 0px;
                        text-align: center;
                        list-style-type: none;
                    }

                    .pagination ul li {
                        display: inline-block;
                    }

                    .pagination ul li a, .pagination ul li span{
                        padding: 5px;
                        border: 1px solid #333;
                        border-radius: 50% 40% 45% 50% / 40% 50% 55% 40%;
                        padding: 5px 10px;
                        margin: 3px;
                    }

                    .pagination ul li span{
                        background-color: #4618B1;
                        color: #fff;
                    }

                `}
            </style>
        </div>
    )
}

export default PaginationBox;