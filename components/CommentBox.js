import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment'

const Comments = function(props){
    const {comments} = props;

    return (
        <div className="comments-list">
            <div className="no-comments">Do you have any comment on this tricks? then let the author know about that. <a href={comments[0].html_url} target="_blank">comment here</a></div>
            {
                comments.length > 0
                ?   
                    <div className="list">
                        {comments.map((comment, key)=> {
                            return(
                                <div className="comment-body" key={key}>
                                    <div className="comment-head">
                                        <div className="commenter-pic">
                                            <img src={comment.user.avatar_url} />
                                        </div>
                                        <div className="comment-meta">
                                            <div className="commenter-name">{comment.user.login}</div>
                                            <div className="comment-date">{moment(comment.created_at).fromNow()}</div>
                                        </div>
                                    </div>
                                    <div className="comment-text">{comment.body}</div>
                                </div>
                            )
                        })}
                    </div>
                : 'This post have comments'
            }
            <style jsx> 
                {`
                    .comment-body .comment-head .commenter-pic img{
                        width: 25px;
                        height: 25px;
                        background-color: red;
                        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                        border: 3px solid #d8d8d8
                    }
                    .comment-body .comment-head {
                        display: grid;
                        grid-template-columns: 40px auto;
                    }
                    .comment-body .comment-head .comment-meta {
                        font-size: 13px;
                    }

                    .comment-text {
                        font-size: 14px;
                        line-height: 1.6;
                        margin-bottom: 40px;
                        border: 1px solid #d8d8d8;
                        border-radius: 4px;
                        padding: 6px 18px;
                        margin-top: 10px;
                        background-color: #f1f8ff;
                        border-bottom-color: #c0d3eb;
                        display: inline-block;
                        border-radius: 10% 10% 10% 10% / 14% 14% 12% 12%;
                    }
                    .no-comments {
                        font-size: 14px;
                        margin-bottom: 20px
                    }
                `}
            </style>
        </div>
    )
}

const CommentBox = function(props){

    const [comments, setComments] = useState([])

    useEffect(()=> {
        axios.get(`https://api.github.com/repos/mddanishyusuf/dailyhack/issues/${props.single_issue.number}/comments`).then(res=>{
            setComments(res.data)
        })
    },[])

    return (
        <div className="comment-box">
            <div/>
            <div className="comments">
                {
                    comments.length > 0
                    ? <Comments comments={comments} />
                    : <div className="no-comments">Do you have any comment on this tricks? then let the author know about that. <a href={`https://github.com/mddanishyusuf/dailyhack/issues/${props.single_issue.number}`}>comment here</a></div>
                }
            </div>
            <style jsx>
                {`
                    .comment-box {
                        display: grid;
                        grid-template-columns: 150px auto;
                    }
                    .no-comments {
                        font-size: 14px;
                        margin-bottom: 20px
                    }
                `}
            </style>
        </div>
    )
}

export default CommentBox;