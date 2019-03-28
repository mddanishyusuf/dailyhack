import React, {useState, useEffect} from 'react';

function Home(){
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = count
    })

    return(
        <div>
            Hello, {count}
            <button onClick={()=> setCount(count+1)}></button>
        </div>
    )
}

export default Home