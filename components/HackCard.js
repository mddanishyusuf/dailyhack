import Markdown from 'markdown-to-jsx';
import getSlug from 'speakingurl'
import Link from 'next/link';
import { Tag, Heart, MessageSquare, Twitter, Facebook } from 'react-feather';
import moment from 'moment'

const HyperLink = ({ children, ...props }) => (
    <a {...props} href={props.href} target="_blank">{children}</a>
);

const HackCard = (props) => {
    const issue = props.single_issue
    return (
        <div className="hack-card-container">
            <div className="hack-card">
                <div className="hack-card-meta">
                    <img src={issue.user.avatar_url} className="author-picture" />
                    <div className="post-details">
                        <div className="author-name">{issue.user.login}</div>
                        <div className="created-at">{moment(issue.created_at).fromNow()}</div>
                    </div>
                </div>
                <div className="hack-card-content">
                    <div className="main-content">
                        {props.router.asPath !== '/' ? <h2>{issue.title}</h2> : <Link as={`/post/${[getSlug(issue.title),issue.number].join('-')}`} href={`/post?number=${issue.number}&slug=${[getSlug(issue.title)]}`}><a><h2>{issue.title}</h2></a></Link>}
                        <Markdown
                        className="post-body"
                        options={{
                        overrides: {
                                a: {
                                    component: HyperLink
                                },
                            },
                        }}
                        >{issue.body}</Markdown>
                    </div>
                    <div className="card-footer">
                        <div className="heart footer-meta">
                            <ul>
                            <Tag size={18} color={'#4618B1'}/><span>
                                {issue.labels !== undefined ? issue.labels.map(label => {
                                    return(
                                        <li key={label.id}><Link href={`/tag/${label.name}`}><a>#{label.name}</a></Link></li>
                                    )
                                }): ''}
                            </span>
                            </ul>
                            
                        </div>
                        <div className="any-comments footer-meta">
                        <Link as={`/post/${[getSlug(issue.title),issue.number].join('-')}`} href={`/post?number=${issue.number}&slug=${[getSlug(issue.title)]}`}><a><MessageSquare size={18} color={'#4618B1'}/><span>{issue.comments === 0 ? 'comment?' : issue.comments}</span></a></Link>
                            <span>Share:</span> 
                            <a href={`https://twitter.com/intent/tweet/?text=${encodeURI(issue.title)}&amp;url=https://dailyhack.xyz/post/${[getSlug(issue.title),issue.number].join('-')}`} target="_blank" rel="noopener noreferrer"><Twitter size={18} color={'#4618B1'}/></a>
                            <a href={`https://facebook.com/sharer/sharer.php?u=https://dailyhack.xyz/post/${[getSlug(issue.title),issue.number].join('-')}`} target="_blank" rel="noopener noreferrer"><Facebook size={18} color={'#4618B1'}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                   

                    .hack-card-meta {
                        line-height: 1.4;
                        font-size: 0.8rem;
                    }

                    @media screen and (min-width: 700px) {
                        .hack-card-meta img {
                            margin-bottom: 15px;
                        }
                    }

                    @media screen and (max-width: 700px) {
                        .hack-card-meta {
                            display: grid;
                            grid-template-columns: 60px auto;
                            margin-bottom: 10px;
                        }
                    }

                    .hack-card-meta img {
                        display: block;
                        width: 40px;
                        height: 40px;
                        background-color: red;
                        border-radius: 50% 50% 40% 40% / 60% 60% 20% 30%;
                        border: 3px solid #d8d8d8
                    }

                    .hack-card-meta .author-name {
                        color: #885DF1
                    }

                    .hack-card-content {
                        line-height: 1.6;
                        margin-bottom: 40px;
                        border: 1px solid #d8d8d8;
                        border-radius: 4px;
                    }

                    .main-content {
                        padding: 15px;
                        font-size: 0.95rem;
                    }

                    .post-body pre {
                        background-color: #f6f8fa;
                        border-radius: 3px;
                        font-size: 85%;
                        line-height: 1.45;
                        overflow: auto;
                        padding: 16px;
                    }

                    .post-body img {
                        max-height: 250px;
                        max-width: 100%;
                        width: auto;
                    }

                    .post-body p code, .post-body ol li code {
                        background-color: rgba(27,31,35,.05);
                        border-radius: 3px;
                        font-size: 85%;
                        margin: 0;
                        padding: .2em .4em;
                    }

                    .post-body a {
                        color: #4618B1 !important;
                        text-decoration: underline !important;
                     }

                    .hack-card-content h2 {
                        margin: 0;
                    }

                    .hack-card-content a {
                        font-weight: 500;
                        margin-top: 0;
                        line-height: 1.2;
                        color: #202124;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .hack-card-content h1 {
                        font-size: 13px;
                        margin: 0;
                    }

                    .hack-card-content img {
                        max-width: 100%;
                    }

                    .card-footer {
                        display: grid;
                        grid-template-columns: auto 180px;
                        font-size: 12px;
                        padding: 10px 15px;
                        background-color: #f6f8fa;
                        border-bottom: 1px solid #d1d5da;
                        border-top-left-radius: 3px;
                        border-top-right-radius: 3px;
                        color: #586069;
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .footer-meta {
                        -moz-box-align: center;
                        align-items: center;
                        display: flex;
                    }

                    .footer-meta ul {
                        display: flex;
                        padding: 0;
                        margin: 0;
                    }
                    
                    .footer-meta ul li {
                        display: inline-block;
                        padding: 0px 5px;
                    }
                    
                    .any-comments a, .any-comments span{
                        padding-right: 5px;
                    }

                    @media screen and (min-width: 700px){
                        .hack-card-container .hack-card {
                            display: grid;
                            grid-template-columns: 150px auto;
                        }
                    }

                    @media screen and (max-width: 700px) {
                        
                    }
                `}
            </style>
        </div>
    )
}
export default HackCard
