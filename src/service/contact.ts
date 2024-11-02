import { EmailData } from "./email";

export async function sendContackEmail(email: EmailData) {
  // API Route에 이메일 전송을위한 요청을 보냄 (fetch)
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버요청에 실패하였음");
  }
  return data;
}
