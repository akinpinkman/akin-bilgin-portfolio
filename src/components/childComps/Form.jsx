import { useRef } from "react";
import dotenv from "dotenv";
import emailjs from "@emailjs/browser";

dotenv.config();

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Mesajınız gönderildi!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col items-stretch space-y-4 p-4 gap-2"
    >
      <label>İsim Soyisim</label>
      <input
        type="text"
        name="user_name"
        className="outline outline-offset-2 outline-1 border p-2 rounded-md focus:outline-[#683ab7b5]"
      />
      <label>Mail Adresi</label>
      <input
        type="email"
        name="user_email"
        className="outline outline-offset-2 outline-1 border p-2 rounded-md focus:outline-[#683ab7b5]"
      />
      <label>Mesajınız</label>
      <textarea
        name="message"
        className="outline outline-offset-2 outline-1 border p-2 rounded-md focus:outline-[#683ab7b5] pb-40"
      />

      <button
        type="submit"
        value="Send"
        className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 m-auto"
      >
        GÖNDER
      </button>
    </form>
  );
}
