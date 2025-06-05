import fetchToken from "../get/fetchToken";

// TIETOKANTA PÄÄLLE
// BACKEND PÄÄLLE
// PARAMETRINÄ username ja password

/**
 * Uuden käyttäjän antamat username ja password
 */
interface newUserProps {
  username: string;
  password: string;
  email: string;
}
export default async function postAccount({
  username,
  password,
  email,
}: newUserProps) {
  try {
    const token = await fetchToken();
    const response = await fetch("http://192.168.10.230:8080/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": token.token,
      },
      credentials: "include",
      body: JSON.stringify({
        appUser: username,
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }
    const okText = await response.text();
    console.log("OK response text:", okText);
  } catch (error) {
    console.log("error while creating account, POST", error);
  }
}
