import payDate from '../utils/payDate';

test('Normal Base Pay at end of month', () => {
  const date = payDate(2020,11,'base');
  expect(date).toMatchObject(new Date("12/31/2020"));
});

test('Leap year Feb Base pay', () => {
  const date = payDate(2016,1,'base');
  expect(date).toMatchObject(new Date("2/29/2016"));
});

test('End of Month is a Saturday', () => {
  const date = payDate(2021,6,'base');
  expect(date).toMatchObject(new Date("7/30/2021"));
});

test('End of Month is a Sunday', () => {
  const date = payDate(2021,9,'base');
  expect(date).toMatchObject(new Date("10/29/2021"));
});



test('Normal Bonus Pay on the 15th', () => {
  const date = payDate(2020,11,'bonus');
  expect(date).toMatchObject(new Date("12/15/2020"));
});

test('15th is a Saturday', () => {
  const date = payDate(2021,4,'bonus');
  expect(date).toMatchObject(new Date("5/19/2021"));
});

test('15th is a Sunday', () => {
  const date = payDate(2023,9,'bonus');
  expect(date).toMatchObject(new Date("10/18/2023"));
});

