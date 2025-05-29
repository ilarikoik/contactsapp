import fetchToken from "./fetchToken";

// TIETOKANTA PÄÄLLE
// BACKEND PÄÄLLE
// PARAMETRINÄ username ja password

/**
 * Uuden käyttäjän antamat username ja password
 */
interface createNewUser {
  username: string;
  password: string;
}
export default async function postAccount() {
  try {
    const res = await fetchToken();
    const token = await res.json();
    fetch("http://192.168.10.230:8080/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": token.token,
      },
      credentials: "include",
      body: JSON.stringify({ username: "uusitesti", password: "uusitesti" }),
    });
  } catch (error) {
    console.log("error while creating account, POST", error);
  }
}
