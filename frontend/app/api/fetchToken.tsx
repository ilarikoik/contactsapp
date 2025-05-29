export default async function getToken() {
  try {
    // const res = await fetch("http://localhost:8080/csrf-token");
    const res = await fetch("http://192.168.10.230:8080/csrf-token");
    const token = await res.json();
    return token;
  } catch (error) {
    console.log("error while fetcing token", error);
  }
}
