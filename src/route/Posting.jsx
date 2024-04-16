/* Posting.jsx */

import React, { useState, useEffect } from 'react';
import './Posting.scss';

const Posting = () => {
    // 상태 변수 설정
    const [forum, setForum] = useState('');
    const [section, setSection] = useState('');
    const [sectionList, setSectionList] = useState(['전체','뉴스', '질문', 'Debug', 'Study']);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [hashtagEx, setHashtagEx] = useState('');
    const [link, setLink] = useState('');
    const [photoPopup, setPhotoPopup] = useState(false); // 팝업 설정(닫힌 값, True가 호출되면 팝업 열림)
    const [photoSelect, setPhotoSelect] = useState([]); // 사진 파일 다중 업로드 상태 변수

    // 글 작성 완료 시 실행되는 함수
    const handleSubmit = () => {
    };

    // 글 작성 취소 시 실행되는 함수
    const handleCancel = () => {
        setForum('');
        setSection('');
        setTitle('');
        setContent('');
        setHashtag('');
        setHashtagEx('');
        setLink('');
        setPhotoPopup(false);
    };

    // [예시] API를 통해 연관 검색어를 가져오는 함수
    const fetchRelatedTags = (input) => {
        fetch(`https://api.example.com/tags?query=${input}`)
            .then(response => response.json())
            .then(data => setHashtagEx(data))
            .catch(error => console.error('Error fetching related tags:', error));
    };

    // [예시] 입력란에 입력이 발생할 때 연관 검색어를 요청하는 함수
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setHashtag(inputValue); // 입력값 업데이트
        fetchRelatedTags(inputValue); // 연관 검색어 요청
    };

    // 사진 추가 완료 시 실행되는 함수
    const handlePhotoUpload = () => {
        // 선택한 사진을 업로드하는 로직 추가 필요
        console.log(photoSelect);
        // 업로드 후 상태 초기화
        setPhotoSelect([]);
        setPhotoPopup(false);
    };

    // 사진 파일 선택 시 실행되는 함수
    const handlePhotoSelect = (e) => {
        // 선택한 파일들을 상태에 추가
        setPhotoSelect(Array.from(e.target.files));
    };

    // 사진 팝업 취소 시 실행되는 함수
    const handlePhotoCancel = () => {
        // 팝업 닫기 및 선택한 사진 초기화
        setPhotoSelect([]);
        setPhotoPopup(false);
    };


    return (
        <div className='posting_body'>
            <h1>System.out.println(“”);</h1>
            {/* form(데이터 입력 받기), onSubmit(폼 제출시 실행) */}
            <form 
             onSubmit={handleSubmit}>
            <div className="posting_forum">
            <label 
             For="forum">포럼 </label>
            <input 
             type="text" 
             id="forum"
             placeholder="Forum" 
             value={forum} 
             onChange={e => setForum(e.target.value)} />
            </div>
            <div className="posting_section">
            <label 
             For="section">분야 </label>
            <select
             id="section" 
             value={section} 
             onChange={e => setSection(e.target.value)}>
             {sectionList.map(sectionlist => (
            <option 
             key={sectionlist} 
             value={sectionlist}>{sectionlist}</option>
             ))}
            </select>
            </div>
            <div className="posting_title">
            <label 
             For="title">제목 </label>
            <input 
             type="text" 
             id="title"
             placeholder="Title" 
             value={title} 
             onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="posting_content">
            <label For="content">내용 </label>
            <textarea 
             id="content"
             className="posting_content_textarea"
             style={{ resize: "none" }}
             placeholder="Content" 
             value={content} 
             onChange={e => setContent(e.target.value)} />
            </div>
            <div className="posting_hashtag">
            <label For="hashtag">태그 </label>
            <input 
             type="text" 
             id="hashtag"
             placeholder="Hashtag" 
             value={hashtag} 
             onChange={handleInputChange} // 입력값이 변경될 때 연관 검색어 요청 함수 호출
            />
            {/* [예시] 연관 검색어 표시 */}
            {hashtagEx.length > 0 && (
            <ul className="relatedTags">
            {hashtagEx.map(tag => (
            <li key={tag} onClick={() => setHashtag(tag)}>{tag}</li>
            ))}
            </ul>
            )}
            </div>
            <div className="posting_link">
            <label For="link">링크 </label>
            <input 
             type="text" 
             id="link"
             placeholder="Link" 
             value={link} 
             onChange={e => setLink(e.target.value)} />
            </div>
            <div className="posting_Photo">
            <label For="addPhoto">사진 </label>
            <input 
             id="addPhoto" 
             type="file" 
             style={{ display: "none" }} 
             onChange={handlePhotoSelect} 
             multiple // 다중 파일 업로드 가능하도록 설정
             />
            <button 
             type="button" 
             onClick={() => setPhotoPopup(true)}>업로드</button>
            </div>
            {/* 사진 업로드 팝업 */}
            {photoPopup && (
            <div className="photo_popup">
            <h2>업로드</h2>
            <input 
             type="file" 
             onChange={handlePhotoSelect} 
             multiple />
            <button 
             onClick={handlePhotoUpload}>올리기</button>
            <button 
             onClick={handlePhotoCancel}>삭제</button>
            <button 
             onClick={handlePhotoCancel}>취소</button>
            </div>
            )}
            <div className="posting_buttons">
            <button 
             type="button" 
             onClick={handleCancel}>Cancel</button>
            <button 
             type="submit"
             onClick={handleSubmit}>Post</button>
            </div>
            </form>
        </div>
    );
};

export default Posting;