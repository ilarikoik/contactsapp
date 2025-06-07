import React, { createContext, useState, ReactNode, useContext } from "react";

// mitä objekti pitää sisällään
type EventType = {
  date: string;
  location: string;
  todo: string;
  info: string;
  creator: number;
  participants: Participants[];
}[]; // taulukko jotta lenght voidaa käyttää

type Participants = {
  id: number;
};

// antaa lapsi komponenteille käyttöön
export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<EventType>([]);
  const [refreshToggle, setRefreshToggle] = useState(false);
  const toggleRefresh = () => setRefreshToggle((prev) => !prev);
  return (
    <EventContext.Provider
      value={{ events, setEvents, refreshToggle, toggleRefresh }}
    >
      {children}
    </EventContext.Provider>
  );
};

// antaa arvon (event: EventType) ja mahdollisuuden muuttaa arvoa
type EventContextType = {
  events: EventType;
  // funktio, joka ottaa parametrikseen EventType-tyyppisen arvon eikä palauta mitään (void)
  setEvents: (events: EventType) => void;
  refreshToggle: boolean;
  toggleRefresh: () => void;
};

// muutetaan type funktioksi ( oletus undefined )
// context on perjaatteessa siis globaali muuttuja
const EventContext = createContext<EventContextType | undefined>(undefined);

// palauttaa määritetyn arvon tai virheen
export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within a EventProvider");
  }
  return context;
};
