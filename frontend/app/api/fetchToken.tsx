export default async function getToken() {
  try {
    const res = await fetch("localhost:8080/csrf-token");
  } catch (error) {
    console.log("error while fetcing token");
  }
}
