export default async function getContacts(appUserId: number) {
  try {
    const res = await fetch("http://192.168.10.230:8080/csrf-token");
    const token = await res.json();
    const response = await fetch(
      `http://192.168.10.230:8080/contacts/${appUserId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": token.token,
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }
    // console.log("täällä");
    return response.json();
  } catch (error) {
    console.log("error while fetcing contacts", error);
  }
}
