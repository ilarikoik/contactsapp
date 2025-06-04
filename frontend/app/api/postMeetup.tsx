import fetchToken from "./fetchToken";

/**
 *
 */
interface MeetupProps {
  date: String;
  location: string;
  todo: string;
  info: string;
  participants: Participants[];
}
interface Participants {
  participant: number;
}
export default async function postMeetup() {
  // {
  //   date,
  //   location,
  //   todo,
  //   info,
  //   participants,
  // }: MeetupProps
  try {
    const token = await fetchToken();
    const response = await fetch("http://192.168.10.230:8080/postmeetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": token.token,
      },
      credentials: "include",
      body: JSON.stringify({
        date: "2025-06-05T17:00:00",
        where: "Kahvila Kampissa",
        todo: "Tapaaminen ja suunnittelu",
        info: "Tuodaan omat koneet, jutellaan projektista",
        creator: {
          id: 2,
        },
        participants: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
        ],
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
