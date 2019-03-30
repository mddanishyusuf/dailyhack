import {Fragment} from 'react';
import Layout from '../components/Layout';

function Contributors(props){
    return(
        <Fragment>
            <Layout title="Daily Hack: A community of Makers and Geeks" {...props}>
                We are makers
            </Layout>
        </Fragment>
    )
}

export default Contributors;