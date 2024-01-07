"use client";

import { useState } from "react";

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const addFeedback = async () => {
    let result = await fetch('http://localhost:3000/api', {
      method: "POST",
      body: JSON.stringify({ name, email, comment }),
    });
    result = await result.json();
    if (result.success) {
      alert("Feedback Submitted Successully");
      setName("");
      setEmail("");
      setComment("");
    } else {
      alert("Problem in uploading your feedback");
    }
  };

  return (
    <section className="py-6 bg-[#01003d] text-white">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4 text-gray-400 text-lg">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-6 py-5">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-xl">Mumbai, Maharashtra, India</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-xl">+91 9987337815</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="text-xl">alamf6023@gmail.com</span>
            </p>
          </div>
        </div>
        <form
        //   noValidate=""
          className="flex flex-col space-y-7 md:py-5 md:px-6 text-black"
        >
          <label className="block">
            <span className="mb-1 text-white">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Leroy Jenkins"
              className="block px-3 py-2 border w-full rounded-md shadow-sm focus:ring dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-white">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="leroy@jenkins.com"
              className="block px-3 py-2 border w-full rounded-md shadow-sm focus:ring dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-white">Message</span>
            <textarea
              rows="7"
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              className="block w-full rounded-md focus:ring  border dark:bg-gray-800"
            ></textarea>
          </label>
          <button
            type="button"
            onClick={addFeedback}
            className="self-center px-8 py-3 text-white text-lg rounded focus:ring hover:ring border"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
