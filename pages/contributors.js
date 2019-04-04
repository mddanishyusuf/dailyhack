import {Fragment} from 'react';
import Layout from '../components/Layout';

function Contributors(props){
    console.log(props)
    return(
        <Fragment>
            <Layout title="Daily Hack: A community of Makers and Geeks" {...props}>
                We are makers
            </Layout>
        </Fragment>
    )
}

Contributors.getInitialProps = async function(){
    const result = await fetch(`${process.env.DAILYHACK_GITHUB_API}/contributors`)
    const data = await result.json()

    return {
        contributors: data
    }
}

export default Contributors;