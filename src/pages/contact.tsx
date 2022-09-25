import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Footer from "./components/content/Footer";
import Main from "./components/content/Main";
import NavBar from "./components/navbar/NavBar";

const Contact: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const clearForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.target.reset();
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const name = e.target.elements.namedItem("name") as HTMLInputElement;
    const email = e.target.elements.namedItem("email") as HTMLInputElement;
    const message = e.target.elements.namedItem("message") as HTMLInputElement;

    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    fetch("/api/contact/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    }).then((res) => {
      setTimeout(() => {
        console.log("Response Received");
        if (res.status === 200) {
          console.log("Response suceeded!");
        }
        setSubmitted(true);
        setIsSubmitting(false);
      }, 200);
    });

    clearForm(e);
  };

  return (
    <>
      <Head>
        <title>Oneise Morera - Contact</title>
        <meta
          name="description"
          content="Contact Oneise Morera using this form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <h2 className="text-5xl font-bold pt-16 pb-10">Contact Me</h2>
        <form
          className={`mb-16 mx-auto py-10 px-20 space-y-10 max-w-[950px] [&>*]:text-xl [&>*]:leading-relaxed  flex flex-col bg-[#CACFE1]/[20%]`}
          onSubmit={handleSubmit}
        >
          <div className="sm:flex xs:space-y-10 sm:space-x-10 ">
            <div className="w-full text-left outline-offset-2">
              <label htmlFor="name">Name</label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="w-full text-left outline-offset-2">
              <label htmlFor="email">Email</label>
              <input
                className="w-full rounded-md p-2"
                type="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="text-left">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full h-48 rounded-md outline-offset-2 p-2"
              required
            />
          </div>
          <div className="xs:flex xs:flex-col xs:space-y-10 sm:space-x-10">
            <button
              type="submit"
              className="bg-dark-teal w-fit mx-auto text-white py-2 px-8 text-2xl rounded-[20px] sm:mx-0  sm:py-4 sm:px-12"
            >
              Submit
            </button>

            <button
              type="reset"
              className="bg-gray-500 w-fit mx-auto text-white py-2 px-8 text-2xl rounded-[20px] sm:mx-0  sm:py-4 sm:px-12"
            >
              Clear
            </button>
          </div>

          {isSubmitting && !submitted && (
            <div>Your message is submitting...</div>
          )}
          {!isSubmitting && submitted && (
            <div>
              <span>Your message has been submitted!</span>
            </div>
          )}
        </form>
      </Main>
      <Footer />
    </>
  );
};
export default Contact;
