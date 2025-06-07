export function upComingEvents(data: any[]) {
  const date = new Date();
  const filtered = data.filter((item) => new Date(item.date) > date);
  return filtered;
}
export function upPastEvents(data: any[]) {
  const date = new Date();
  const filtered = data.filter((item) => new Date(item.date) < date);
  return filtered;
}
