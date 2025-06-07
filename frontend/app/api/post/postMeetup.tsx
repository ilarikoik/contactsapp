import fetchToken from "../get/fetchToken";

/**
 *
 */
type MeetupProps = {
  date: string;
  location: string;
  todo: string;
  info: string;
  creator: number;
  participants: Participants[];
};

type Participants = {
  id: number;
};
export default async function postMeetup({
  creator,
  date,
  location,
  todo,
  info,
  participants,
}: MeetupProps) {
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
        date: date,
        location: location,
        todo: todo,
        info: info,
        creator: {
          id: creator,
        },
        participants: participants,
      }),
      // body: JSON.stringify({
      //   creator: {
      //     id: 2,
      //   },
      //   date: "2025-06-12T18:00:00",
      //   info: "qwe",
      //   location: "asd",
      //   participants: [{ id: 16 }, { id: 17 }],
      //   todo: "qwe",
      // }),
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
    console.log("error while creating meetup, POST", error);
  }
}
