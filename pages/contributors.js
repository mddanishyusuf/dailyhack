import {Fragment} from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

function ContributorCard(props) {
    return (
        <div className="contributor-page">
            <div className="conti-list">
                <div className="heading">   
                    <h1>Contributors.</h1>
                    <small>{props.contributors.length} Members</small>
                    <p>These are the makers, geeks, developers. If you have any hack then your welcome to the community.</p>
                    <a href="https://github.com/mddanishyusuf/dailyhack/issues" target="_blank">Join Community</a>
                </div>
                {props.contributors.map(cont => (
                    <div className="user-card">
                        <div className="user-meta">
                            <div className="picture">
                                <img src={cont.user.avatar_url}/>
                            </div>
                            <div className="user-info">
                                <div className="name">{cont.user.login}</div>
                                <div className="tricks-count">{cont.issues.length} {cont.issues.length === 1 ? 'trick' : 'tricks'}</div>
                                <div className="profile-url"><a href={`https://github.com/${cont.user.login}`} target="_blank">{`https://github.com/${cont.user.login}`}</a></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .contributor-page {
                        width: 80%;
                        margin: 0px auto;
                    }

                    .conti-list {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .heading {
                        padding-right: 24px;
                        margin-bottom: 60px;
                    }

                    .heading h1{
                        padding: 0;
                        margin: 0
                    }

                    .heading p{
                        width: 80%;
                        line-height: 1.4rem;
                    }

                    .heading a {
                        padding: 5px 10px;
                        border: 2px solid #707070;
                        text-decoration: none;
                        border-radius: 4px;
                        background-color: #C37501AD;
                    }

                    .tricks-count, .profile-url {
                        font-size: 13px;
                    }

                    .profile-url a {
                        color: #4618B1;
                        text-decoration: none;
                    }

                    .conti-list .user-card {
                        margin-bottom: 40px;
                    }

                    .user-meta {
                        display: flex;
                        vertical-align: middle;
                        align-items: center;
                    }

                    .user-meta .picture img {
                        width: 100px;
                        height: 100px;
                        border-radius:  52% 55% 77% 67% / 54% 84% 41% 72%;
                        border: 3px solid #4618B1
                    }

                    .user-info {
                        padding-left: 10px;
                    }

                    .user-info div {
                        padding: 3px 0;
                    }

                    .user-info .name {
                        font-weight: 600;
                    }

                `}
            </style>
        </div>
    )
}

function Contributors(props){
    return(
        <Fragment>
            <Layout title="Contributors of Dailyhack and there Tricks" description="List of all the contributors with no of tricks they add with there GitHub Profile" image={`https://screenshot-v2.now.sh/dailyhack.xyz/contributors`} pageUrl="https://dailyhack.xyz/contributors" {...props}>
                <ContributorCard {...props}/>
            </Layout>
        </Fragment>
    )
}

Contributors.getInitialProps = async function(){
    const url = process.env.DAILYHACK_GITHUB_API + '/contributors'
    const result = await fetch(url)
    const data = await result.json()

    return {
        contributors: data
    }
}

export default Contributors;
