export default function areEqual(ev1, ev2) {
	if (ev1 === ev2) {
		return true;
	}

	if (Boolean(ev1.altKey) !== Boolean(ev2.altKey)) {
		return false;
	}

	return true;
}
