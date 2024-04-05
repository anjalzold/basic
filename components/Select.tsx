"use client"
import React,{useState} from 'react'

export default function Select({ options, placeholder }: { options: string[], placeholder: string}){
         const [isOpen, setIsOpen] = useState(false);
         const [selectedOption, setSelectedOption] = useState<string | null>(null);
         
    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        console.log("Your pressed" + option);
    };
  return (
    <div className='relative hidden md:block'>
      <button
        className='bg-gray-700 text-white rounded p-2 m-2 w-full text-left flex justify-between items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex-grow'>{selectedOption || placeholder}</span>{" "}
        {/* 텍스트를 감싸고 flex-grow 적용 */}
        <span
          className={`transition duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼ {/* 화살표 아이콘 */}
        </span>
      </button>
      {isOpen && (
        <ul className='absolute z-10 left-2 w-full bg-gray-700 mt-1 rounded'>
          {options.map((option, index) => (
            <li
              key={index}
              className='p-2 hover:bg-gray-600 cursor-pointer'
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
