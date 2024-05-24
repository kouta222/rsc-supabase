'use client'

import sendBlog from '@/app/service/sendBlog'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FormInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [contentValue, setContentValue] = useState('')

  //   sever action使う
  const handleSubmit = () => {
    const newValues = {
      id: uuidv4(),
      tittle: inputValue,
      content: contentValue,
      created_at: new Date().toISOString(),
    }

    sendBlog(newValues)
    setInputValue('')
    setContentValue('')
  }

  return (
    <div>
      <p>title</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-black"
      />
      <p>content</p>
      <input
        type="text"
        value={contentValue}
        onChange={(e) => setContentValue(e.target.value)}
        className="border-2 border-black"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormInput
