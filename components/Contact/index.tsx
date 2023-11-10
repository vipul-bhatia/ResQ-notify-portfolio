'use client';
import NewsLatterBox from "./NewsLatterBox";
import React, { useState } from 'react';
import { db } from '../firebase/config.js';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
  
    // Validate form inputs
    if (!name || !email || !contact) {
      setError('All fields are required');
      return;
    }
  
    try {
      await db.collection('ResQ-Notify-PreBook').add({ name, email, contact });
      setName('');
      setEmail('');
      setContact('');
      setMessage('Thanks for subscribing!');
      setError(''); // Clear the error message on success
    } catch (error) {
      console.error('Error adding email: ', error);
      setMessage('Failed to subscribe. Try again later.');
    }
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Prebook Now and Stay Informed
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Be among the first to know when our product is ready for launch. Prebook now, and we will notify you as soon as it is available.
              </p>
              <form  onSubmit={handleSubscribe}    >
                <div className="mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Address
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Address"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Prebook for me!
                    </button>
                    <p className="text-center lg:text-left lg:absolute mt-2 opacity-300 text-sm">{message}</p>
      {error && <p className="text-red-500">{error}</p>}
                  </div>
                  
                </div>
              </form>
            </div>
         
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
