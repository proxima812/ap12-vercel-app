export default function formatDateToISO(dateInput) {
	let date

	if (typeof dateInput === "string") {
		date = new Date(dateInput)
	} else if (dateInput instanceof Date) {
		date = dateInput
	} else {
		return null
	}

	return new Intl.DateTimeFormat("ru-RU", {
		day: "numeric",
		month: "short",
		year: "numeric",
	})
		.format(date)
		.replace(/\./g, "")
}
