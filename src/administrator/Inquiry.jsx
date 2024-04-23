/* Inquiry.jsx */

import React, { useState } from 'react';
import './Inquiry.scss';
import { DataGrid } from "@mui/x-data-grid";

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
        console.log("작업 수행:", action, "선택 문의에 대해:", selectedInquiries);
    };

    // 답변 팝업을 열고 닫는 함수
    const toggleReplyPopup = () => {
    // 선택된 문의가 있는지 확인
    if (selectedInquiries.length > 0) {
      // 팝업 상태를 반전시킴
      setReplyPopup(!replyPopup);
      } else {
      alert("답변할 문의를 선택해주세요.");
      }
    };

    // 회신 버튼 클릭 시
    const handleReplySubmit = () => {
        // 회신 처리 로직 추가
        console.log("회신 완료");
    };

    return (
        <div className="inquiry-container">
            <h1>문의사항</h1>
            {/* DataGrid로 문의 목록을 표시 */}
            <div className="datagrid-container" style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={inquiries}
                    columns={[
                        { field: 'id', headerName: '문의번호', width: 130 },
                        { field: 'date', headerName: '문의일자', width: 150 },
                        { field: 'userId', headerName: '문의자ID', width: 150 },
                        { field: 'title', headerName: '문의제목', width: 300 },
                        { field: 'status', headerName: '답변상태', width: 130 },
                    ]}
                    pageSize={5}
                    checkboxSelection // 체크박스 선택 활성화
                    onSelectionModelChange={(newSelection) => {
                        setSelectedInquiries(newSelection.selectionModel);
                        console.log("선택한:", newSelection.selectionModel);
                    }}
                />
            </div>

            {/* 문의 작업 버튼 */}
            <div className="action-buttons">
                <button onClick={() => handleAction('수정')}>수정</button>
                <button onClick={() => handleAction('일괄완료')}>일괄완료</button>
                <button onClick={() => handleAction('보류')}>보류</button>
                <button onClick={toggleReplyPopup}>답변</button>
            </div>

            {/* 답변 팝업 */}
            {selectedInquiries.length > 0 && replyPopup && (
                <div className="inquiry-popup">
                    <div className="popup-inner">
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
                                        style={{ width: '100%', height: '100px', resize: "none" }}
                                        placeholder="답변 내용을 입력하세요"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="btn-group">
                            <button onClick={toggleReplyPopup}>취소</button>
                            <button onClick={handleReplySubmit}>회신</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inquiry;