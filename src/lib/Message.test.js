import Message from './Message';

test('Message constructor error', () => {
  function consBigErrMessage() {
    let msg = new Message(0.2, 0.1, 0.1, 0.1, 0.6);
  }
  function consSmallErrMessage2() {
    let msg = new Message(0.1, 0.1, 0.1, 0.1, 0.4);
  }
  expect(consBigErrMessage).toThrowError('The rate sum must be 1');
  expect(consSmallErrMessage2).toThrowError('The rate sum must be 1');
});

test('Test for Messages', () => {
  const message = new Message(0.1, 0.1, 0.1, 0.1, 0.6);
  expect(message.getMessage(0.05)).toBe('Stop');
  expect(message.getMessage(0.15)).toBe('Cancel');
  expect(message.getMessage(0.25)).toBe('Fail');
  expect(message.getMessage(0.35)).toBe('Reject');
  expect(message.getMessage(0.65)).toBe('Success');
});

test('Test for getMessage', () => {
  const message = new Message(0.1, 0.1, 0.1, 0.1, 0.6);
  function useBigRandom() {
    message.getMessage(1.4);
  }
  function useSmallRandom() {
    message.getMessage(-1.4);
  }
  expect(useBigRandom).toThrowError('Random number not valid');
  expect(useSmallRandom).toThrowError('Random number not valid');
});