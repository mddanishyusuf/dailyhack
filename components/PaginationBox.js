function PaginationBox(props){
    const paginationArray = Array.from(Array(props.total_issues).keys())
    const activePage = props.active_page
    return(
        <div className="pagination">
            <ul>
                {paginationArray.map(number => {
                    return(
                        <li key={number}>{number+1}</li>
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
                        padding: 5px;
                    }

                `}
            </style>
        </div>
    )
}

export default PaginationBox;