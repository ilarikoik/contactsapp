// utils/formatters.ts

export const formatTicketmasterData = (data: any[]) => {
  return data.map((item) => ({
    name: item.name,
    date: item.dates?.start?.localDate,
    time: item.dates?.start?.localTime,
  }));
};

export const formatBoredData = (data: any[]) => {
  return data.map((item) => ({
    name: item.activity,
    date: null,
    time: item.type,
  }));
};

// Voit tehdä lisää esim. ravintoloille, peleille jne.
