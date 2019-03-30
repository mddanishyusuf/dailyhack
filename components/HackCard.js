import Markdown from 'markdown-to-jsx';
import getSlug from 'speakingurl'
import Link from 'next/link';
import { Tag, Heart, MessageSquare } from 'react-feather';
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
                    <br/>
                    <div className="author-name">{issue.user.login}</div>
                    <div className="created-at">{moment(issue.created_at).fromNow()}</div>
                </div>
                <div className="hack-card-content">
                    <div className="main-content">
                        <Link as={`/post/${[getSlug(issue.title),issue.number].join('-')}`} href={`/post?number=${issue.number}&slug=${[getSlug(issue.title)]}`}><a><h2>{issue.title}</h2></a></Link>
                        <Markdown
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
                                        <li key={label.id}>#{label.name}</li>
                                    )
                                }): ''}
                            </span>
                            </ul>
                        </div>
                        {/* <div className="heart footer-meta">
                            <Heart size={18} color={'#4618B1'}/><span>25</span>
                        </div> */}
                        <div className="any-comments footer-meta">
                            <MessageSquare size={18} color={'#4618B1'}/><a href={issue.html_url} target="_blank"><span>{issue.comments === 0 ? 'any comments?' : issue.comments}</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .hack-card-container .hack-card {
                        display: grid;
                        grid-template-columns: 150px auto;
                    }

                    .hack-card-meta {
                        line-height: 1.4;
                        font-size: 0.8rem;
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
                        background-color: #fbf5f3;
                    }

                    .main-content {
                        padding: 15px;
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
                        grid-template-columns: auto 150px;
                        font-size: 12px;
                        background-color: #fff;
                        padding: 10px 15px;
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

                    .card-footer .any-comments{
                    }
                `}
            </style>
        </div>
    )
}
export default HackCard