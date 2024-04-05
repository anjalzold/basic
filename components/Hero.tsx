import React from "react";

export default function Hero() {
  return (
      <section className='bg-gray-800 text-white min-h-screen flex flex-col justify-center'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-10'>
            <span className='inline-block bg-green-500 text-white px-3 py-1 rounded-full uppercase font-semibold text-sm'>
              New
            </span>
            <h1 className='mt-5 text-4xl font-bold'>히어로 섹션 제목</h1>
            <p className='mt-5 text-gray-400 max-w-md mx-auto'>
              이곳은 귀하의 웹사이트나 서비스에 대한 간단한 설명을 넣는
              공간입니다. 주요 메시지를 효과적으로 전달하세요.
            </p>
          </div>
          <div className='text-center'>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4'>
              버튼 1
            </button>
            <button className='bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>
              버튼 2
            </button>
          </div>
        </div>
      </section>
  );
}
