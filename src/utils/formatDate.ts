export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-Ru").format(date);
}
