import { sendEmail } from "@/service/email";
import * as yup from "yup";
const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "메일 전송에 실패하였습니다" }),
      { status: 400 }
    );
  }
  //노드 메일러를 이용하여 메일을 전송
  return sendEmail(body)
    .then(() => {
      return new Response(
        JSON.stringify({ message: "메일을 성공적으로 전송하였습니다." }),
        { status: 200 }
      );
    })
    .catch((err) => {
      console.log(err);
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패하였습니다" }),
        { status: 500 }
      );
    });
}
