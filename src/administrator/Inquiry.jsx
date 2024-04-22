/* Inquiry.jsx */

import React, { useState } from 'react';
import './Inquiry.scss';

const Inquiry = () => {
    // 가상의 문의 데이터
    const [inquiries, setInquiries] = useState([
        { id: 1, date: '2024-04-22', userId: 'user123', title: '문의 제목 1', status: '미답변' },
        { id: 2, date: '2024-04-21', userId: 'user456', title: '문의 제목 2', status: '미답변' },
    ]);

    // 체크박스 선택 상태 관리
    const [selectedInquiries, setSelectedInquiries] = useState([]);

    // 답변 팝업 상태 관리
    const [replyPopup, setReplyPopup] = useState(false);

    // 선택한 문의들을 처리하는 함수
    const handleAction = (action) => {
        // 선택된 문의들을 처리하는 로직 추가
        console.log("Perform action:", action, "on selected inquiries:", selectedInquiries);
    };

    // 답변 팝업을 열고 닫는 함수
    const toggleReplyPopup = () => {
    if (selectedInquiries.length === 0) {
        alert("답변할 문의를 선택해주세요.");
    } else {
        setReplyPopup(!replyPopup);
    }   
    };

    return (
        <div>
         <h1>문의사항</h1>
         <table>
         <thead>
         <tr>
          <th>선택</th>
          <th>문의번호</th>
          <th>문의일자</th>
          <th>문의자ID</th>
          <th>문의제목</th>
          <th>답변상태</th>
        </tr>
        </thead>
        <tbody>
         {inquiries.map(inquiry => (
        <tr key={inquiry.id}>
        <td><input type="checkbox" onChange={() => {
           // 체크박스 변경 시 선택된 문의 목록 업데이트
          if (selectedInquiries.includes(inquiry.id)) {
            setSelectedInquiries(selectedInquiries.filter(item => item !== inquiry.id));
          } else {
            setSelectedInquiries([...selectedInquiries, inquiry.id]);
          }
          }} />
        </td>
          <td>{inquiry.id}</td>
          <td>{inquiry.date}</td>
          <td>{inquiry.userId}</td>
          <td>{inquiry.title}</td>
          <td>{inquiry.status}</td>
        </tr>
        ))}
        </tbody>
        </table>
        <div>
         <button onClick={() => handleAction('수정')}>수정</button>
         <button onClick={() => handleAction('일괄완료')}>일괄완료</button>
         <button onClick={() => handleAction('보류')}>보류</button>
         <button onClick={toggleReplyPopup}>답변</button>
        </div>


         {/* 답변 팝업 */}
         {selectedInquiries.length > 0 && replyPopup && (
        <div className="inquiry_popup">
        <div className="inquiry_popup-inner">
        <h2>문의</h2>
         {/* 선택된 문의가 있을 때만 문의 정보를 표시 */}
         {inquiries.find(inquiry => inquiry.id === selectedInquiries[0]) && (
        <div>
         <div>ID: {inquiries.find(inquiry => inquiry.id === selectedInquiries[0]).userId}</div>
         <div>문의사유: </div>
         <div>문의제목: {inquiries.find(inquiry => inquiry.id === selectedInquiries[0]).title}</div>
         <div>
            회신내용: 
            <textarea
            style={{ resize: "none" }}
            rows="4"
            cols="50"
            placeholder="답변 내용을 입력하세요"
            />
         </div>
        </div>
        )}
        <div className="btn-group">
        <button onClick={toggleReplyPopup}>취소</button>
        <button>회신</button>
        </div>
        </div>
        </div>
        )}
        </div>
    );
};

export default Inquiry;
