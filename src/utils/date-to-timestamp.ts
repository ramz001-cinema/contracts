export function dateToTimestamp(date?: Date | null) {
	if (!date) return undefined
	return {
		seconds: Math.floor(date.getTime() / 1000),
		nanos: (date.getTime() % 1000) * 1e6
	}
}
