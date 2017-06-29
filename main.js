export default function areEqual(ev1, ev2) {
	if (ev1 === ev2) {
		return true;
	}

	for (const prop of ['altKey', 'ctrlKey', 'shiftKey', 'metaKey']) {
		const [value1, value2] = [ev1[prop], ev2[prop]];
		if (Boolean(value1) !== Boolean(value2)) {
			return false;
		}
	}

	if (ev1.key !== ev2.key || ev1.code !== ev2.code) {
		return false;
	}

	return true;
}
