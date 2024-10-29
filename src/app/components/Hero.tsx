import Image from "next/image";
import React from "react";
import profileImage from "../../../public/images/profile_nhb.jpg";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <h2 className="text-3xl font-bold mt-2">노형빈</h2>
      <h3 className="text-xl font-semibold">풀스택 개발자</h3>
      <p>코딩 잘하고 싶지만 코딩 잘하는 사람</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact me
        </button>
      </Link>
    </section>
  );
}
