export default function areEqual(ev1, ev2) {
	// Aconsole.log(`Comparing two events.`)
	if (ev1 === ev2) {
		// Aconsole.log(`Events are same.`)
		return true;
	}

	for (const prop of ['altKey', 'ctrlKey', 'shiftKey', 'metaKey']) {
		const [value1, value2] = [ev1[prop], ev2[prop]];
		// Aconsole.log(`Comparing prop ${prop}: ${value1} ${value2}`)
		if (Boolean(value1) !== Boolean(value2)) {
			return false;
		}
	}

	if ((ev1.key === ev2.key && ev1.key !== undefined) ||
		(ev1.code === ev2.code && ev1.code !== undefined)) {
		return true;
	}

	// Aconsole.log(`key or code are differents.`)

	return false;
}
