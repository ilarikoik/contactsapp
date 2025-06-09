export default async function getEvents(userId: number) {
  try {
    const res = await fetch("http://192.168.10.230:8080/csrf-token");
    const token = await res.json();
    const response = await fetch(
      `http://192.168.10.230:8080/meetups/user/${userId}`,
      // `http://192.168.10.230:8080/meetups/contacts/user/1`,
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
    return response.json();
  } catch (error) {
    console.log("error while fetcing users events", error);
  }
}
