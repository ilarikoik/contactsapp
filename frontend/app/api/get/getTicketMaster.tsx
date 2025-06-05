import CONFIG from "../../config";

export default async function getTicketmaster(country: string) {
  try {
    const res = await fetch(
      `${CONFIG.TICKETMASTER_BASE_URL}countryCode=${country}&size=50&apikey=${CONFIG.TICKETMASTER_KEY}`
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `HTTP error! status: ${res.status}, message: ${errorText}`
      );
    }
    // console.log(res);
    const data = await res.json();
    if (data && data._embedded && data._embedded.events) {
      return data._embedded.events.map((event: any) => ({
        name: event.name,
        date: event.dates.start.localDate || null,
        time: event.dates.start.localTime || null,
        images: event.images || null,
      }));
    }

    return null;
  } catch (error) {
    console.log("error while fetching Ticketmaster data:", error);
  }
}
