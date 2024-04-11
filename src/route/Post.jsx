import React, { useState } from 'react';
import './Post.scss';
import { FilePopupPost, TagPopupPost, LinkPopupPost } from './PostPopup';

const Post = () => {
    //상태 변수 설정
    const [forum, setForum] = useState('');
    const [section, setSection] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState([]); //배열 설정
    const [tag, setTag] = useState([]); //배열 설정
    const [link, setLink] = useState([]); //배열 설정
    const [popupFile, setPopupFile] = useState(false); //팝업 설정(닫힌 값, True가 호출되면 팝업 열림)
    const [popupTag, setPopupTag] = useState(false); //팝업 설정(닫힌 값, True가 호출되면 팝업 열림)
    const [popupLink, setPopupLink] = useState(false); //팝업 설정(닫힌 값, True가 호출되면 팝업 열림)

    // 글 작성 완료 시 실행되는 함수
    const handleSubmit = () => {
    };

    // 글 작성 취소 시 실행되는 함수
    const handleCancel = () => {
        setForum('');
        setSection('');
        setTitle('');
        setText('');
        setFile([]);
        setTag([]);
        setLink([]);
    };

    return (
        <div className='post_body'>
            <h2>글쓰기</h2>
            <form onSubmit={handleSubmit}> {/* form(데이터 입력 받기), onSubmit(폼 제출시 실행) */}
                <input type="text" placeholder="Forum" value={forum} onChange={e => setForum(e.target.value)} />
                <input type="text" placeholder="Section" value={section} onChange={e => setSection(e.target.value)} />
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <textarea placeholder="Text" value={text} onChange={e => setText(e.target.value)} />
                {/* 파일, 태그, 링크 입력 필드(팝업 시)*/}
                <button type="button" onClick={() => setPopupFile(true)}>+File</button>
                <button type="button" onClick={() => setPopupTag(true)}>+Tag</button>
                <button type="button" onClick={() => setPopupLink(true)}>+Link</button>
                <button type="submit">Post</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
            
            {/* 파일 추가 팝업 */}
            {popupFile && (
                <FilePopupPost onClose={() => setPopupFile(false)} />
            )}
            {/* 태그 추가 팝업 */}
            {popupTag && (
                <TagPopupPost onClose={() => setPopupTag(false)} />
            )}
            {/* 링크 추가 팝업 */}
            {popupLink && (
                <LinkPopupPost onClose={() => setPopupLink(false)} />
            )}
        </div>
    );
};

export default Post;