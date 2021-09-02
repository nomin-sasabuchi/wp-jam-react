import { Section } from '@/components/molecules/outer/Section';
import axios from 'axios'
import React, { useState, useEffect } from 'react'


export const Contact = () => {
  const [formData, setFormData] = useState({
    yourname: "",
    text: ""
  });
  //値が変更された時に実行
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //コンバートする
  const convertJsontoUrlencoded = (obj) => {
    let str = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
      }
    }
    return str.join("&");
  }
  //送信ボタンが実行された時に実行
  const handleSubmit = () => {
    const formDataConvert = convertJsontoUrlencoded(formData)
    const USER = process.env.USER
    const PASSWORD = process.env.APPLICATION_PASSWORD
    // Base64に変換
    const TOKEN = window.btoa(`${USER}:${PASSWORD}`)
    const axiosConfig = {
      headers: {
        'Authorization': `Basic ${TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }
    axios.post(' http://localhost:8080/wp-json/contact-form-7/v1/contact-forms/5/feedback/', formDataConvert, axiosConfig)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Section text="お問い合わせ" imgPath="/top/ttl-contact.svg" bgColor="bg-gray">
      <form onSubmit={handleSubmit}>
        <dl className="flex">
          <dt className="mr-[1rem]">
            名前
          </dt>
          <dd>
            <input type="text" name="yourname" value={formData.yourname} onChange={handleChange} className="bg-white" />
          </dd>
        </dl>
        <button type="submit" className="text-white bg-black p-[1rem] ml-[5rem] mt-[3rem]">送信</button>
      </form>
    </Section>
  )
}
