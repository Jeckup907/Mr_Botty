const app = require('./app');

test('tests if the app is running', () => {
	expect(app()).toBe(true);
});