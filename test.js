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

test('return false for different `ctrlKey` props', t => {
	t.false(areEqual({ctrlKey: true}, {ctrlKey: false}));
});

test('return true for false and absent `ctrlKey` props', t => {
	t.true(areEqual({}, {ctrlKey: false}));
});
test('return false for different `shiftKey` props', t => {
	t.false(areEqual({shiftKey: true}, {shiftKey: false}));
});

test('return true for false and absent `shiftKey` props', t => {
	t.true(areEqual({}, {shiftKey: false}));
});

test('return false for different `metaKey` props', t => {
	t.false(areEqual({metaKey: true}, {metaKey: false}));
});

test('return false for different `key` props', t => {
	t.false(areEqual({key: 'Delete'}, {key: 'CS'}));
});

test('return false for false and absent `key` props', t => {
	t.false(areEqual({}, {key: 'Delete'}));
});

test('return false for false and absent `code` props', t => {
	t.false(areEqual({}, {code: 'D'}));
});

test('return false for different `code` props', t => {
	t.false(areEqual({code: 'D'}, {code: 'C'}));
});

test('return true for false and absent `metaKey` props', t => {
	t.true(areEqual({}, {metaKey: false}));
});

