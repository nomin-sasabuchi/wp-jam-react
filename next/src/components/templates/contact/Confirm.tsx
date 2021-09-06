import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Confirm = (props) => {
  const { values } = props;
  const router = useRouter();

  //コンバートする
  const convertJsontoUrlencoded = (obj) => {
    const str = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return str.join('&');
  };
  //送信ボタンが実行された時に実行
  const sendSubmit = () => {
    const formDataConvert = convertJsontoUrlencoded(values);
    const USER = process.env.USER;
    const PASSWORD = process.env.APPLICATION_PASSWORD;
    // Base64に変換
    const TOKEN = window.btoa(`${USER}:${PASSWORD}`);
    const axiosConfig = {
      headers: {
        Authorization: `Basic ${TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    };
    axios
      .post(
        ' http://localhost:8080/wp-json/contact-form-7/v1/contact-forms/5/feedback/',
        formDataConvert,
        axiosConfig,
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    router.push('contact/complete');
  };

  return (
    <>
      <h2>確認画面</h2>
      <div>
        <p>氏名：{values.yourname}</p>
        <div className="mt-[5rem] | flex-center | space-x-[3rem]">
          <button
            className="p-[1rem] | block text-white bg-black"
            onClick={() => router.back()}
          >
            戻るボタン
          </button>
          <button
            className="block text-white bg-yellow p-[1rem]"
            type="button"
            onClick={sendSubmit}
          >
            送信
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirm;
