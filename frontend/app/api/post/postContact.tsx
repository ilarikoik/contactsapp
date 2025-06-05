import fetchToken from "../get/fetchToken";

type ContactType = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  appUser: {
    userId: number;
  };
};

export default async function postContact({
  firstname,
  lastname,
  email,
  phone,
  appUser,
}: ContactType) {
  try {
    const token = await fetchToken();
    const response = await fetch("http://192.168.10.230:8080/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": token.token,
      },
      credentials: "include",
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email: email,
        phone: phone,
        appUser: { id: appUser.userId }, // pitää olla just siinä muodossa ku backendissä (AppUserilla on id eikä userId tai muu)
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
    console.log("error while creating contact, POST", error);
  }
}
