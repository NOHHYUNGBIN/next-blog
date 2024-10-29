import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: `https://github.com/NOHHYUNGBIN`,
  },
  {
    icon: <AiFillInstagram />,
    url: `https://www.instagram.com/nohhyungbin/`,
  },
  {
    icon: <AiFillLinkedin />,
    url: `https://github.com/NOHHYUNGBIN`,
  },
];
export default function Contactpage() {
  return (
    <>
      <h2>Contact me</h2>
      <p>shgudqlsz@naver.com</p>
      <ul>
        {LINKS.map((link, index) => (
          <a href={link.url} target="_black" rel="noreferrer">
            {link.icon}
          </a>
        ))}
      </ul>
      <h2>Or Send me an email</h2>
    </>
  );
}
