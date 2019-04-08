import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import HackCard from '../components/HackCard';
import CommentBox from '../components/CommentBox'

const SinglePost = withRouter(props => {
    return(
        <Layout title={props.single_issue.title} image={`https://screenshot-v2.now.sh/dailyhack.xyz/post/${props.slug}`} description={props.single_issue.body.trim().substr(0,154)} pageUrl={`https://dailyhack.mddanishyusuf.now.sh/post/${props.slug}`} {...props}>
            <div className="single-post">
                <HackCard {...props}/>
                <CommentBox {...props}/>
            </div>
            <style>
                {`
                    .single-post {
                        padding: 10px;
                    } 
                    @media screen and (min-width: 700px) {
                         .single-post {
                             width: 80%;
                             margin: 0px auto;
                         }   
                    }   
                `}
            </style>
        </Layout>
    )
})

SinglePost.getInitialProps = async function(context){
    const result = await fetch(`${process.env.DAILYHACK_GITHUB_API}/${context.query.number}`)
    const issue = await result.json()
    return {
        single_issue: issue,
        slug: `${context.query.slug}-${context.query.number}`
    }
}

export default SinglePost;