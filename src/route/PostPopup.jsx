import React from 'react';

const FilePopupPost = ({ onClose }) => {
    return (
        <div className="popup">
            <h3>파일첨부</h3>
            {/* 파일 추가 입력 필드 */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const TagPopupPost = ({ onClose }) => {
    return (
        <div className="popup">
            <h3>태그입력</h3>
            {/* 태그 추가 입력 필드 */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const LinkPopupPost = ({ onClose }) => {
    return (
        <div className="popup">
            <h3>링크추가</h3>
            {/* 링크 추가 입력 필드 */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export { FilePopupPost, TagPopupPost, LinkPopupPost };