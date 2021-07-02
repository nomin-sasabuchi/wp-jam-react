import { Section } from '@/components/molecules/outer/Section';
import axios from 'axios'
import React, { useState } from 'react'


export const Contact = () => {
  // const data = async () => {
  //   const USER = process.env.WPUSER
  //   const PASSWORD = process.env.APPLICATION_PASSWORD
  //   const data = await axios.get('http://localhost:8080/wp-json/contact-form-7/v1/contact-forms', {
  //     auth: { username: USER, password: PASSWORD }
  //   })
  // }
  const [inputNameText, setInputNameText] = useState("");

  //値が変更された時に実行
  const handleChange = (event) => setInputNameText(event.target.value)

  //送信ボタンが実行された時に実行
  const handleSubmit = () => {
    // alert("送信ボタンが実行された時に実行");
    console.log(inputNameText)
  }
  return (
    <Section text="お問い合わせ" imgPath="/top/ttl-contact.svg" bgColor="bg-gray">
      <form onSubmit={handleSubmit}>
        <dl className="flex">
          <dt className="mr-[1rem]">
            名前
        </dt>
          <dd>
            <input type="text" name="yourName" value={inputNameText} onChange={handleChange} className="bg-white" />
          </dd>
        </dl>
        <button type="submit" className="text-white bg-black p-[1rem] ml-[5rem] mt-[3rem]">送信</button>
      </form>
    </Section>
  )
}
