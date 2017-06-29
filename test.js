import test from 'ava';
import areEqual from '.';

test('exports a function', t => {
	t.is(typeof areEqual, 'function');
});

test('return true for same object', t => {
	const a = {};
	t.true(areEqual(a, a));
});

test('return false for different `altKey` props', t => {
	t.false(areEqual({altKey: true}, {altKey: false}));
});

test('return true for false and absent `altKey` props', t => {
	t.true(areEqual({}, {altKey: false}));
});
