import React from 'react'

export default function Newsletter() {
  return (
        <div className=" py-12 px-4">
  <div className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
    <div className="md:w-1/2 mb-4 md:mb-0">
      <h2 className="text-2xl font-bold mb-2">우리에게 연락하고 싶으신가요?</h2>
      <p className="mb-4">뉴스레터를 구독하고 최신 소식을 받아보세요.</p>
    </div>
    <div className="md:w-1/2 flex flex-col items-end">
      <div className="flex w-full max-w-md">
        <input type="email" placeholder="이메일 주소를 입력하세요" 
               className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-l-lg focus:outline-none focus:border-green-500"/>
        <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-r-lg hover:bg-green-700 focus:outline-none">
          구독하기
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600">우리는 귀하의 개인정보를 소중히 생각합니다. <a href="#" className="text-green-500 hover:underline">개인정보 취급방침</a>을 확인하세요.</p>
    </div>
  </div>
</div>

  )
}
