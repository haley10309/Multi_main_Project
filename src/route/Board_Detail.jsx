import React from 'react';
import './Board_Detail.scss';

import { useLocation } from "react-router-dom";

const Board_Detail = () => {
    // const location = useLocation();
    // const forumName = location.state.forum_name;
    return (
        <div className='home_body'>
            {/* {forumName} */}
            <div className="post-detail">
               <div className="post-card">
                  <div className="post-header">
                     <div className="post-avatar"></div>
                     <div className="post-info">
                         <div className="post-forumname">ForumName</div>
                         <div className="post-nickname">Nickname</div>
                     </div>
                     <div className="post-time">2분 전</div>
                     <div className="post-more-options">...</div>
                 </div>
        <div className="post-content">포스팅내용내용내용</div>
        <div className="hashtags">#hashtags</div>
        <div className="post-image">Photo</div>
        <div className="post-interactions">
          <div className="post-likes-up">⬆</div>
          <div className="post-likes">3.2k</div>
          <div className="post-likes-down">⬇</div>
          <div className="post-comments">💬 3.2K</div>
        </div>
      </div>
      <div className="comment-input">
        <input type="text" placeholder="Add a comment..." />
        <button className="btn-cancel">취소</button>
        <button className="btn-submit">작성</button>
      </div>
      {/* Repeat the .comment-item for each comment */}
      <div className="comment-item">
        <div className="comment-avatar"></div>
        <div className="comment-body">
          <div className="comment-header">
            <div className="comment-nickname">Nickname</div>
            <div className="comment-time">1분 전</div>
          </div>
          <div className="comment-content">댓글댓글댓글</div>
          <div className="comment-interactions">
            <div className="comment-likes">⬆ 10K ⬇</div>
            <div className="comment-reply">💬 답글</div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Board_Detail;
