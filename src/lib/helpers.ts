export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeIn(): Date {
  const nowInItaly = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  return nowInItaly;
}

export function formatTimeTo12H(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // Use 12-hour format with AM/PM
    timeZone: "America/New_York",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
