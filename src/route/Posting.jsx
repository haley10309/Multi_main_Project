/* Posting.jsx */

import './Posting.scss';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import axios from 'axios';


const Posting = () => { 
    // 상태 변수 설정
    const [forum, setForum] = useState('');
    const [forum_edit, setForum_edit] = useState(false); //Forum 옆 돋보기 누르면 수정 
    const [section, setSection] = useState('');
    const [section_list, setSection_list] = useState(['전체','뉴스', '질문', 'Debug', 'Study']);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hashtag_ex, setHashtag_ex] = useState(['react', 'javascript', 'programming', 'webdevelopment', 'coding', 'frontend', 'backend', 'java']);
    const [hashtag_input, setHashtag_input] = useState(''); // 해시태그 입력값 상태
    const [hashtag_select, setHashtag_select] = useState([]); // 선택된 해시태그 목록 상태
    const [link, setLink] = useState('');
    const [photoPopup, setPhotoPopup] = useState(false); // 팝업 설정(닫힌 값, True가 호출되면 팝업 열림)
    const [photoSelect, setPhotoSelect] = useState([]); // 사진 파일 다중 업로드 상태 변수
    const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false); // 사진 업로드 팝업을 열기 위한 상태 변수

    // 글 작성 완료 시 실행되는 함수
    const handleSubmit = () => {
    };

    // 글 작성 취소 시 실행되는 함수
    const handleCancel = () => {
        setForum('');
        setSection('');
        setTitle('');
        setContent('');
        setHashtag_input('');
        setHashtag_ex([]);
        setHashtag_select([]);
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
    const hashtag_sample = ['react', 'javascript', 'programming', 'webdevelopment', 'coding', 'frontend', 'backend', 'java'];
    const hashtag_related = hashtag_sample.filter(tag => tag.includes(input)); // 입력값과 유사한 해시태그를 찾음
        setHashtag_ex(hashtag_related); // 상태 업데이트
/*   // [예시] API를 통해 연관 검색어를 가져오는 함수
        fetch(`https://api.example.com/tags?query=${input}`)
            .then(response => response.json())
            .then(data => setHashtag_Ex(data))
            .catch(error => console.error('Error fetching related hashtags:', error)); */
    };

    // 입력란에 값이 변경될 때 호출되는 함수
    const handleInputChange = (e) => {
    const inputValue = e.target.value;
        setHashtag_input(inputValue); // 입력 상자 업데이트

     // 입력 값에 따라 제안 목록 필터링
    const filteredHashtags = hashtag_ex.filter(tag =>
        tag.toLowerCase().includes(inputValue.toLowerCase()));
        setHashtag_ex(filteredHashtags);

        // 입력값이 변경될 때마다 유사한 해시태그를 가져오도록 함
        fetchHashtagRelated(inputValue);
    };

    // 클릭한 해시태그를 선택하고, 입력란 안으로 추가하는 함수
    const handleHashtagClick = (tagText) => {
    // 이미 선택된 해시태그인지 확인
    if (!hashtag_select.some(tag => tag.text === tagText)) {
        // 새로 클릭한 해시태그를 추가
        const newTag = { id: Date.now(), text: tagText }; // 고유한 식별자와 텍스트를 가진 해시태그 객체 생성
        const updatedHashtags = [...hashtag_select, newTag];
        setHashtag_select(updatedHashtags); // 선택된 해시태그 목록 업데이트

        // 입력 상자를 업데이트하여 선택된 해시태그를 추가
        const updatedInput = updatedHashtags.map(tag => tag.text).join(', '); // 쉼표와 공백을 사용하여 해시태그들을 연결
        setHashtag_input(updatedInput);
        }
    };


    // Enter 키를 눌렀을 때 선택된 해시태그 목록에 추가하는 이벤트 핸들러
    const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const value = e.target.value.trim();
        if (value !== '') {
            handleHashtagClick(value);
            setHashtag_input(''); // 입력란 초기화
            }
        }   
    };

    // 해시태그 선택 삭제 함수
    const handleRemoveHashtag = (tagId) => {
    // 선택된 해시태그 목록에서 해당 식별자를 가진 해시태그를 제거
    const updatedHashtags = hashtag_select.filter(item => item.id !== tagId);
        setHashtag_select(updatedHashtags);

    // 입력 상자에는 선택된 해시태그만 남도록 업데이트
    const updatedInput = updatedHashtags.map(tag => tag.text).join(', '); // 쉼표와 공백을 사용하여 해시태그들을 연결
        setHashtag_input(updatedInput);
    };

    // 선택된 해시태그 목록 렌더링 함수
    const renderSelectedHashtags = () => {
    return (
        <div className="selected_hashtags">
            {hashtag_select.map(tag => (
                <span key={tag.id} className="selected_hashtag">
                    {tag.text}
                    <button onClick={() => handleRemoveHashtag(tag.id)}>X</button>
                </span>
            ))}
        </div>
        );
    };

    /* Photo */
    // 사진 업로드 팝업 열기 이벤트 핸들러
    const openPhotoUploadPopup = () => {
        setIsPhotoUploadOpen(true);
    };

    // 사진 업로드 완료 시 실행되는 함수
        const handlePhotoUpload = (e) => {
    // 최대 10장까지 업로드 가능한지 확인
    if (photoSelect.length > 10) {
        alert("최대 10장까지 업로드 가능합니다.");
        return;
    }

    // 업로드 후 상태 초기화
    setPhotoPopup(false); // 팝업 닫기

    // 예시:
    // axios.post('upload_url', formData)
    //   .then(response => {
    //     // 업로드된 파일에 대한 정보를 상태에 추가
    //     const uploadedPhotos = [...photoSelect, ...response.data];
    //     setPhotoSelect(uploadedPhotos);
    //     // 팝업 닫기
    //     setPhotoPopup(false);
    //   })
    //   .catch(error => {
    //     console.error('Error uploading photos:', error);
    //     // 업로드 중에 오류가 발생한 경우에 대한 처리
    //   });
    };

    // 사진 파일 선택 시 실행되는 함수
    const handlePhotoSelect = (e) => {
        // 선택한 파일들을 상태에 추가
        setPhotoSelect(Array.from(e.target.files));
    if (photoSelect.length + e.target.files.length > 10) {
        // 최대 10장까지만 업로드할 수 있도록 제한
        alert("최대 10장까지 업로드할 수 있습니다.");
        return;
        }
        setPhotoSelect([...photoSelect, ...e.target.files]);
    };

    // 사진 팝업 취소 시 실행되는 함수
    const handlePhotoCancel = () => {
    // 팝업 닫기만 하고 선택한 사진 초기화는 하지 않음
    setPhotoPopup(false);
    };

    // 사진 업로드 팝업 내에 있는 사진 삭제 함수
    const handleDeletePhoto = (index) => {
    const updatedPhotoSelect = [...photoSelect];
        updatedPhotoSelect.splice(index, 1); // 선택한 인덱스의 사진을 제거
        setPhotoSelect(updatedPhotoSelect); // 상태 업데이트
    };

    // 사진 업로드 팝업 내의 각 사진 컴포넌트
    const renderPhotoItem = (photo, index) => (
    <div key={index} className="photo_item">
      <img
        src={URL.createObjectURL(photo)}
        alt={`Photo ${index}`}
      />
      <button onClick={() => handleDeletePhoto(index)}>X</button>
    </div>
  );

    // 업로드된 각 사진을 나타내는 컴포넌트
    const renderUploadedPhotos = () => {
    return (
        <div className="uploaded-photos">
        {photoSelect.map((photo, index) => (
        <img
            key={index}
            src={URL.createObjectURL(photo)}
            alt={`Uploaded Photo ${index}`}
            style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }}
        />
        ))}
        </div>
        );
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
            <div className="hashtag_wrapper">
            <input
             type="text"
             id="hashtag"
             placeholder="Hashtag"
             value={hashtag_input}
             onChange={handleInputChange}
             onKeyDown={handleKeyDown} 
            />
            {hashtag_select.map((tag, index) => (
            <span 
             key={tag.id} 
             className="selected_hashtag">
            {tag.text}
            <button onClick={() => handleRemoveHashtag(tag.id)}>X</button>
            </span>
            ))}
            </div>
             {hashtag_ex.length > 0 && (
            <ul className="hashtag_related">
             {hashtag_ex.map(tag => (
            <li 
             key={tag} 
             onClick={() => handleHashtagClick(tag)}>{tag}</li>
            ))}
            </ul>
            )}
            </div>
            <div className="posting_link">
            <label 
             For="link">링크 </label>
            <Link 
            component="input" 
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
             onClick={openPhotoUploadPopup} // 사진 첨부 팝업 열기
            >
            사진첨부
            </button>
            </div>
            {/* 사진 업로드 팝업 */}
            {isPhotoUploadOpen && (
            <div className="photo_popup">
            <h2>업로드</h2>
            {/* 선택된 사진들 표시 */}
            <div className="selected_photos">
            {photoSelect.map((photo, index) => renderPhotoItem(photo, index))}
            </div>
            <input type="file" onChange={handlePhotoSelect} multiple />
            <button onClick={handlePhotoUpload}>올리기</button>
            <button onClick={handlePhotoCancel}>삭제</button>
            <button onClick={handlePhotoCancel}>취소</button>
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