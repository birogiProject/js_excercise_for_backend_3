let counter = require('../../src/Counter.js');
const assert = require('power-assert');

describe('src/Counter.js', () => {
	it('Counterインスタンスは_countプロパティを持つ', () => {
		assert.notEqual(counter._count, null);
	});
	it('_countプロパティの初期値は0である', () => {
		assert.equal(counter._count, 0);
	});
	it('Counterインスタンスはincrementメソッドを持つ', () => {
		assert.notEqual(counter.increment(), 'unedefined');
	});
	it('incrementメソッドを実行すると_countの値が1増える', () => {
		assert.equal(counter.increment(), 1);
	});
	it('Counterインスタンスはdecrementメソッドを持つ', () => {
		assert.notEqual(counter.decrement(), 'undifined');
	});
	it('decrementメソッドを実行すると_countの値が1減る', () => {
		assert.equal(counter.decrement(), 0);
	});
});
