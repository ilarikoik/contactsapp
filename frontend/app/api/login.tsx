import { parseSync } from "@babel/core";
import getToken from "./fetchToken";
import fetchToken from "./fetchToken";

interface loginProps {
  password: string;
  email: string;
}

export default async function login({ email, password }: loginProps) {
  try {
    const token = await getToken();
    const response = await fetch("http://192.168.10.230:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": token.token,
      },
      credentials: "include",
      body: JSON.stringify({
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
    console.log(response);
    return okText;
  } catch (error) {
    console.log("error while logging ", error);
  }
}
