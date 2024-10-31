import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "../components/ContactForm";

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: `https://github.com/NOHHYUNGBIN`,
  },
  {
    icon: <AiFillInstagram />,
    url: `https://www.instagram.com/nohhyungbin/`,
  },
];
export default function Contactpage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact me</h2>
      <p>shgudqlsz@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            href={link.url}
            target="_black"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
