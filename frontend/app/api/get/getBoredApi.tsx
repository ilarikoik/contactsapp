import CONFIG from "../../config";

export default async function getBoredAPi() {
  try {
    const res = await fetch(`${CONFIG.BORED_API}`);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `HTTP error! status: ${res.status}, message: ${errorText}`
      );
    }
    const data = await res.json();
    if (data) {
      return [
        {
          name: data.activity,
          date: null,
          time: data.type || null,
        },
      ];
    }

    return [];
  } catch (error) {
    console.log("error while fetching Ticketmaster data:", error);
  }
}
