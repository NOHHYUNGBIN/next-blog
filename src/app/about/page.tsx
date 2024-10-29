import React from "react";
import Hero from "../components/Hero";

export default function Aboutpage() {
  const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who am I ?</h2>
        <p>
          개발할때가 가장 행복한 6년차 풀스택 개발자
          <br />
          웹앱을 주로 만들고 있음!
        </p>
        <h2 className={TITLE_CLASS}>Career(IT companies only)</h2>
        <p>
          CLUSH(~Now)
          <br />
          GU Electronic(~2020)
        </p>
        <h2 className={TITLE_CLASS}>Credential</h2>
        <p>
          정보처리기사, SQLD
          <br />
          컴퓨터활용능력1급, 네트워크관리사2급
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React.js, Next.js, JavaScript, JAVA, C, Node
          <br />
          GIT, SVN, Clean Code
          <br />
          MySql, OracleDB
          <br />
          VS Code, IntelliJ, STS
        </p>
      </section>
    </>
  );
}
