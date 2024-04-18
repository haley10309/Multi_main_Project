/* Posting.jsx */

import './Posting.scss';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Posting = () => {
//  const SERVER_URL = 'http://localhost:3000'; // 서버 주소
//  const { forum_select } = useParams(); // 선택
    // 상태 변수 설정
    const [forum, setForum] = useState('');
    const [forum_edit, setForum_edit] = useState(false); //Forum 옆 돋보기 누르면 수정 
    const [section, setSection] = useState('');
    const [section_list, setSection_list] = useState(['전체','뉴스', '질문', 'Debug', 'Study']);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [hashtag_Ex, setHashtag_Ex] = useState([]); // 해시태그 자동완성
    const [hashtag_list, setHashtag_list] = useState([]); // 해시태그 목록을 배열로 저장
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
        setHashtag_Ex([]);
        setHashtag_list([]);
        setLink('');
        setPhotoPopup(false);
    };

    /* Forum */
    // 포럼 input 요소에 대한 참조 생성
    const forumInputRef = useRef(null);

    // 포럼 입력 상태에서 돋보기 아이콘 클릭 시 실행되는 함수
    const handleSearchIconClick = () => {
        setForum_edit(true); // 수정 상태로 설정
    // 포럼 input에 포커스를 설정하여 사용자가 직접 입력할 수 있도록 함
        if (forumInputRef.current) {
            forumInputRef.current.focus();
        }
    };

    // 포럼 입력 상태가 변경될 때 실행되는 함수
    useEffect(() => {
        // 포럼 입력 상태가 비활성화되면서 포럼 내용이 변경된 경우
        if (!forum_edit && forumInputRef.current && forum !== forumInputRef.current.value) {
            setForum(forumInputRef.current.value); // 포럼 내용을 업데이트
        }
    }, [forum_edit]);

    // 포럼 입력 상태에서 수정을 완료하고 수정 반영할 때 실행되는 함수
    const handleEditForumSubmit = () => {
        alert("수정완료");
        setForum_edit(false); // 수정 상태 비활성화
    };

    /* HashTag */  
    // 입력값과 유사한 해시태그를 반환하는 함수
    const fetchHashtagRelated = (input) => {
    const hashtag_sample = ['react', 'javascript', 'programming', 'webdevelopment', 'coding', 'frontend', 'backend'];
    const hashtag_related = hashtag_sample.filter(tag => tag.includes(input)); // 입력값과 유사한 해시태그를 찾음
        setHashtag_Ex(hashtag_related); // 상태 업데이트
/*   // [예시] API를 통해 연관 검색어를 가져오는 함수
        fetch(`https://api.example.com/tags?query=${input}`)
            .then(response => response.json())
            .then(data => setHashtag_Ex(data))
            .catch(error => console.error('Error fetching related hashtags:', error)); */
    };

    // 입력란에 값이 변경될 때 호출되는 함수
    const handleInputChange = (e) => {
    const inputValue = e.target.value;
        setHashtag(inputValue); // 입력값 업데이트
        // 콤마를 기준으로 입력값을 분리하여 배열에 저장 (다중선택)
        const hashtagsArray = inputValue.split(',').map(tag => tag.trim());
        setHashtag_list(hashtagsArray); // 해시태그 배열 업데이트
        fetchHashtagRelated(inputValue); // 연관 검색어 요청
    };

    // 클릭한 해시태그를 선택하고, 연관 검색어를 초기화하는 함수
    const handleHashtagClick = (tag) => {
        setHashtag(tag); // 클릭한 해시태그를 선택
        setHashtag_Ex(''); // 선택한 해시태그 후 연관 검색어 초기화
    };

    // 해시태그 추가 함수
    const hashtag_add = () => {
    if (hashtag.trim() !== '') {
        setHashtag_list([...hashtag_list, hashtag]); // 새로운 해시태그를 배열에 추가
        setHashtag(''); // 입력란 초기화
        }
    };

    // 해시태그 삭제 함수
    const hashtag_remove = (tag) => {
    const newList = hashtag_list.filter(item => item !== tag); // 선택한 해시태그를 제외한 새로운 배열 생성
    setHashtag_list(newList); // 변경된 배열로 해시태그 목록 업데이트
    };

    // 해시태그 목록 표시
    const hashtaglist_render = () => {
    return (
        <div className="hashtagList">
         {hashtag_list.map((tag, index) => (
        <div 
         key={index} 
         className="hashtagItem">
        <span>{tag}</span>
        <button 
         onClick={() => hashtag_remove(index)}>XXX</button> 
        </div>
        ))}
        </div>
        );
    };

    // 선택 가능한 연관 해시태그 목록을 렌더링하는 함수
    const hashtagEx_render = () => {
    return (
        <ul className="hashtag_related">
        {hashtag_Ex.map(tag => (
        <li 
         key={tag} 
         onClick={() => handleHashtagClick(tag)}>{tag}</li>
        ))}
        </ul>
        );
    };

    /* Photo */
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
            <form onSubmit={handleSubmit}>
            <div className="posting_forum">
            <label
             For="forum">포럼 </label>
            {forum_edit ? (
            <span
             className="searchIconWrapper">
            <input
             type="text"
             id="forum"
             placeholder="Forum"
             value={forum}
             onChange={(e) => setForum(e.target.value)} // 수정된 포럼 내용 반영
             onBlur={handleEditForumSubmit} // 수정 상태에서 포커스가 빠져나갈 때 수정 반영
             ref={forumInputRef} // 포럼 input 요소에 대한 참조
            />
            <span
             className="searchIcon" 
             onClick={handleEditForumSubmit}><SearchIcon /></span>
            </span>
            ) : (
            <span
             className="searchIconWrapper">
            <input
             type="text"
             value={forum || '포럼을 선택하세요'}
             readOnly
            />
            <span
             className="searchIcon" 
             onClick={handleSearchIconClick}><SearchIcon /></span>
            </span>
             )}
            </div>
            <div className="posting_section">
            <label 
             For="section">분야 </label>
            <select
             id="section" 
             value={section} 
             onChange={e => setSection(e.target.value)}>
             {section_list.map(sectionlist => (
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
            <label 
             For="content">내용 </label>
            <textarea 
             id="content"
             className="posting_content_textarea"
             style={{ resize: "none" }}
             placeholder="Content" 
             value={content} 
             onChange={e => setContent(e.target.value)} />
            </div>
            <div className="posting_hashtag">
            <label 
             For="hashtag">태그</label>
            <input
             type="text"
             id="hashtag"
             placeholder="Hashtag"
             value={hashtag}
             onChange={handleInputChange}
            />
            {hashtaglist_render()}
            {/* [예시] 연관 검색어 표시 */}
            {hashtag_Ex.length > 0 && (
            <ul 
             className="hashtag_related">
            {hashtag_Ex.map(tag => (
            <li 
             key={tag} 
             onClick={() => setHashtag(tag)}>{tag}</li>
            ))}
            </ul>
            )}
            </div>
            <div className="posting_link">
            <label 
             For="link">링크 </label>
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