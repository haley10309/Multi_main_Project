/* Manage_forum.jsx */

import React, { useState } from 'react';
import './Manage_forum.scss';

const Manage_forum = () => {
    // 상태 정의
    const [forum_select, setForum_select] = useState([]);
    const [forum_data, setForum_data] = useState([]);

    // 추가, 삭제, 이동, 선택 액션 함수 정의
    const handleAddForum = () => {
        // 새 포럼 추가 로직
    };

    const handleDeleteForum = () => {
        // 포럼 삭제 로직
    };

    const handleMoveForum = () => {
        // 포럼 이동 로직
    };

    const handleSelectForum = (forumId) => {
        // 포럼 선택 로직
    };

    return (
        <div className="manage-category-container">
         {/* 포럼 목록 */}
        <ul className="forum-list">
        {forum_data.map((forum) => (
        <li key={forum.id}>
         {/* 포럼 이름과 체크박스 */}
        <label>
        <input
         type="checkbox"
         checked={forum_select.includes(forum.id)}
         onChange={() => handleSelectForum(forum.id)}
         />
         {forum.name}
        </label>
        </li>
        ))}
        </ul>

         {/* 포럼 액션 버튼 */}
         <div className="forum-actions">
         <button onClick={handleAddForum}>추가</button>
         <button onClick={handleDeleteForum}>삭제</button>
         <button onClick={handleMoveForum}>이동</button>
        </div>
        </div>
    );
};

export default Manage_forum;