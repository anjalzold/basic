import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className='bg-gray-800 text-white p-10'>
      <div className='container mx-auto flex items-center'>
        {/* 왼쪽 섹션 */}
        <div className='flex flex-col items-start space-y-4 mr-10'>
          <div className='flex flex-col items-start  space-y-5'>
            <FaInstagram className='text-green-500' />
            <span className='max-w-[400px]'>
              세상을 더 좋은 곳으로 만들기 위해 우아한 계층구조를 구축합니다.
            </span>
          </div>
          {/* 소셜 미디어 아이콘 */}
          <div className='flex  space-x-4'>
            <FaYoutube className='text-red-600' />
            <FaFacebook className='text-blue-600' />
            <FaTwitter className='text-blue-400' />
            <FaInstagram className='text-pink-600' />
          </div>
        </div>
        {/* 오른쪽 섹션 */}
        <div className='flex-grow flex flex-row space-x-5'>
          <div className='flex flex-col space-y-4 flex-grow'>
            <h2 className='text-xl font-bold'>서비스</h2>
            <div className='flex flex-col space-y-2'>
              <span>컨설팅</span>
              <span>개발</span>
              <span>디자인</span>
              <span>마케팅</span>
              <span>교육</span>
            </div>
          </div>
          <div className='flex flex-col space-y-4 flex-grow'>
            <h2 className='text-xl font-bold'>제품</h2>
            <div className='flex flex-col space-y-2'>
              <span>웹 애플리케이션</span>
              <span>모바일 애플리케이션</span>
              <span>데이터 분석</span>
              <span>클라우드 서비스</span>
              <span>AI 솔루션</span>
            </div>
          </div>
          <div className='flex flex-col space-y-4 flex-grow'>
            <h2 className='text-xl font-bold'>지원</h2>
            <div className='flex flex-col space-y-2'>
              <span>FAQ</span>
              <span>고객 지원</span>
              <span>문서</span>
              <span>커뮤니티</span>
              <span>연락처</span>
            </div>
          </div>
          <div className='flex flex-col space-y-4 flex-grow'>
            <h2 className='text-xl font-bold'>회사</h2>
            <div className='flex flex-col space-y-2'>
              <span>회사 소개</span>
              <span>채용 정보</span>
              <span>팀</span>
              <span>블로그</span>
              <span>파트너쉽</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
