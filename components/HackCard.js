import Markdown from 'markdown-to-jsx';
import getSlug from 'speakingurl'
import Link from 'next/link';
import { Eye, Heart, MessageSquare } from 'react-feather';
import moment from 'moment'

const HackCard = (props) => {
    const issue = props.single_issue
    return (
        <div className="hack-card-container">
            <div className="hack-card">
                <div className="hack-card-meta">
                    <img src={issue.user.avatar_url} className="author-picture" />
                    <div className="author-name">{issue.user.login}</div>
                    <div className="created-at">{moment(issue.created_at).fromNow()}</div>
                </div>
                <div className="hack-card-content">
                    <div className="main-content">
                        <Link as={`/post/${[getSlug(issue.title),issue.number].join('-')}`} href={`/post?number=${issue.number}&slug=${[getSlug(issue.title)]}`}><a><h2>{issue.title}</h2></a></Link>
                        <Markdown>{issue.body}</Markdown>
                    </div>
                    <div className="card-footer">
                        <div className="views">
                            <Eye size={14}/>1.5k
                        </div>
                        <div className="heart">
                            <Heart size={14}/>25
                        </div>
                        <div className="any-comments">
                            <MessageSquare size={14}/>any comments?
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
                        font-size: 0.9rem;
                    }

                    .hack-card-meta img {
                        width: 40px;
                        border-radius: 50%;
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
                        grid-template-columns: 60px 60px auto;
                        font-size: 12px;
                        background-color: #fff;
                        padding: 10px 15px;
                    }

                    .card-footer .any-comments {
                        text-align: right;
                    }
                `}
            </style>
        </div>
    )
}
export default HackCard