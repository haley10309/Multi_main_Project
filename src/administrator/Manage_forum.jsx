/* Manage_forum.jsx */

import React, { useState } from 'react';
import './Manage_forum.scss';

const Manage_forum = () => {
    // 포럼 데이터
    const [forums, setForums] = useState([
        { id: 1, name: '포럼1', sections: ['뉴스', '질문', 'Debug', '스터디'], createdDate: '2024.04.15' },
        { id: 2, name: '포럼2', sections: ['섹션1', '섹션2'], createdDate: '2024.04.16' }
    ]);

    // 선택된 포럼과 섹션
    const [selectedForum, setSelectedForum] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    // 검색어 상태
    const [searchTerm, setSearchTerm] = useState('');

    // 팝업 상태
    const [popupOpen, setPopupOpen] = useState(false);

    // 선택된 섹션 관리
    const [newSections, setNewSections] = useState([]);

    // 포럼 이름 변경
    const handleForumNameChange = (event) => {
        const newName = event.target.value;
        setSelectedForum(prevForum => ({ ...prevForum, name: newName }));
    };

    // 섹션 삭제
    const handleSectionDelete = (sectionName) => {
        setNewSections(newSections.filter(section => section !== sectionName));
    };

    // 팝업 닫기
    const closePopup = () => {
        setPopupOpen(false);
    };

    // 저장(반영) 버튼 클릭
    const handleSaveChanges = () => {
        // 포럼 이름 변경 반영
        const updatedForums = forums.map(forum => {
            if (forum.id === selectedForum.id) {
                return { ...forum, name: selectedForum.name, sections: newSections };
            }
            return forum;
        });
        setForums(updatedForums);

        // 저장 후 팝업 닫기
        closePopup();
    };

    // 포럼 검색 기능
    const handleSearch = () => {
        // 검색 기능 구현
        console.log("Search term:", searchTerm);
    };

    // 포럼 이름 변경 버튼 클릭
    const handleForumNameChangeClick = () => {
        const updatedForums = forums.map(forum => {
            if (forum.id === selectedForum.id) {
                return { ...forum, name: selectedForum.name };
            }
            return forum;
        });
        setForums(updatedForums);
    };

    // 섹션 추가 버튼 클릭
    const handleSectionAdd = () => {
        if (selectedSection && !newSections.includes(selectedSection)) {
            setNewSections([...newSections, selectedSection]);
        }
    };

    return (
        <div>
            <h1>포럼관리</h1>
            {/* 포럼 검색창 */}
            <div>
             <h3>포럼검색</h3>
            <div>
            <input 
            type="text" 
            placeholder="포럼 이름 검색" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>검색</button>
        </div>
        </div>
            {/* 포럼 표(엑셀) */}
            <table>
            <thead>
            <tr>
            <th>포럼 이름</th>
            <th>섹션</th>
            <th>생성일</th>
            <th>관리</th>
            </tr>
            </thead>
            <tbody>
        {forums.map(forum => (
            <tr key={forum.id}>
            <td>{forum.name}</td>
            <td>{forum.sections.join(', ')}</td>
            <td>{forum.createdDate}</td>
            <td><button onClick={() => { setSelectedForum(forum); setPopupOpen(true); }}>관리</button></td>
            </tr>
            ))}
        </tbody>
        </table>
            {/* 섹션 관리 팝업 */}
            {popupOpen && selectedForum && (
            <div className="popup">
            <div className="popup-inner">
             <h1>섹션관리</h1>
             <div>반영일자: {new Date().toLocaleDateString()}</div>
             <div>포럼: 
              <input type="text" value={selectedForum.name} onChange={handleForumNameChange} />
              <button onClick={handleForumNameChangeClick}>변경</button>
             </div>
             <div>섹션(기존): {selectedForum.sections.join(', ')}</div>
             <div>섹션(변경 후):
              {selectedForum.sections.map(section => (
               <div key={section}>
               {section} 
               <button onClick={() => handleSectionDelete(section)}>X</button>
             </div>
               ))}
             <input type="text" placeholder="입력내용 추가" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} />
             <button onClick={handleSectionAdd}>추가</button>
             </div>
             <div className="btn-group">
             <button onClick={closePopup}>취소</button>
             <button onClick={handleSaveChanges}>저장</button>
            </div>
            </div>
            </div>
            )}
        </div>
    ); 
};

export default Manage_forum;