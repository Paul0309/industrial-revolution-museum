"use client";
import { motion } from "framer-motion";

export default function References() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20 md:py-28">
      
      {/* 1. framer-motion으로 애니메이션 및 레이아웃 적용 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="max-w-5xl mx-auto" // 2. 콘텐츠 최대 너비 및 중앙 정렬
      >
        
        {/* 3. 페이지 제목 추가 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          References
        </h1>
        <p className="text-lg text-slate-400 mb-12 text-center">
          Works Cited for this Museum
        </p>

        {/* 4. iframe을 감싸는 '프레임' 디자인 */}
        <div className="overflow-hidden rounded-xl shadow-2xl border border-slate-500 bg-slate-800">
          
          {/* (선택 사항) 가짜 브라우저 창 헤더로 꾸미기 */}
          <div className="h-10 bg-slate-800 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* 5. iframe 스타일 개선 */}
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vQrgc4F4TBNJ0jKJSwzixTIHOx0Pb13kdCFHBLuzpezLXExP8TMCJUnqljwMuSocCs6o-xQjams5CnH/pub?embedded=true"
            style={{
              width: "100%",
              // 1500px 고정 대신, 뷰포트 높이에 맞게 조절
              height: "calc(100vh - 250px)", 
              minHeight: "600px", // 최소 높이 보장
              border: "none", // div에 테두리가 있으니 iframe 테두리는 제거
            }}
            title="References Document" // 웹 접근성을 위한 title 속성
          />
        </div>
        
        {/* 6. (선택 사항) 원본 링크 제공 */}
        <p className="text-sm text-slate-600 mt-6 text-center">
          If the document is not shown clearly,{' '}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQrgc4F4TBNJ0jKJSwzixTIHOx0Pb13kdCFHBLuzpezLXExP8TMCJUnqljwMuSocCs6o-xQjams5CnH/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Open in New tab
          </a>
        </p>
        
      </motion.div>
    </main>
  );
}
