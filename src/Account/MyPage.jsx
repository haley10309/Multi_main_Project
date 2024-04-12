import React from 'react';
import './Account.scss';

function MyPage(props) {
    return (
        <div className='home_body'>
        <div className="profile">
                <div className="profile-header">
                    <div className="avatar"></div>
                    <div className="nickname">Nickname</div>
                    <div className="settings-icon"></div>
                </div>
                <nav className="navigation">
                    <ul>
                        <div className="nav-item active">내 게시물</div>
                        <div className="nav-item">내가 쓴 댓글</div>
                        <div className="nav-item">좋아요 한 게시물</div>
                        <div className="nav-item">저장한 게시물</div>
                    </ul>
                </nav>
                <div className="content">
                    <div className="post-card">
                        <div className="post-avatar"></div>
                        <div className="post-details">
                            <div className="post-nickname">Nickname</div>
                            <div className="post-content">Contents</div>
                            <div className="post-image"></div>
                            <div className="post-interactions">
                                <div className="hashtags"> #hashtags </div>
                                <div className="likes"> 👍 3.2K </div>
                                <div className="comments"> 💬 </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the .post-card for each post */}
                </div>
            </div>
    </div>
    );
}

export default MyPage;