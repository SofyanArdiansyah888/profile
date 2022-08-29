import axios from "axios";
export async function sendContact({ fullname, email, message }) {
  let result = await axios.post(
    "http://sofieapi.halowebdev.com/api/contact-sofyan",
    {
      fullname,
      email,
      message,
    }
  );
  return result;
}
