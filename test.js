import test from 'ava';
import keyboardeventsAreequal from '.';

test('exports a function', t => {
	t.is(typeof keyboardeventsAreequal, 'function');
});
