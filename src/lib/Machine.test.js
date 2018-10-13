import Machine from './Machine';
import Message from './Message';

test('Test machine constructor', () => {
  let mac = new Machine(1, 1, '', 10000, 4000);
  expect(mac.errorMsg).toBe('');
  expect(mac.id).toBe(1);
  expect(mac.stage).toBe(1);
  expect(mac.status).toBe('');
  expect(mac.stopTime).toBe(10000);
  expect(mac.taskFreq).toBe(4000);
});

test('Test update success', () => {
  let mac = new Machine(1, 1, '', 10000, 4000);
  let msg = new Message();
  mac.update('Success');
  expect(mac).toEqual({
    id: 1,
    errorMsg: '',
    stage: 2,
    status: 'Success',
    stopTime: 10000,
    taskFreq: 4000,
    message: msg})

});

test('Test update stop', () => {
  let mac = new Machine(1, 1, '', 10000, 4000);
  let msg = new Message();
  mac.update('Stop');
  expect(mac).toEqual({
    id: 1,
    errorMsg: 'Task has stopped',
    stage: 1,
    status: 'Stop',
    stopTime: 10000,
    taskFreq: 4000,
    message: msg})
});

test('Test update fail', () => {
  let mac = new Machine(1, 1, '', 10000, 4000);
  let msg = new Message();
  mac.update('Fail');
  expect(mac).toEqual({
    id: 1,
    errorMsg: 'Task has failed.',
    stage: 1,
    status: 'Fail',
    stopTime: 10000,
    taskFreq: 4000,
    message: msg})
});

test('Test update reject', () => {
  let mac = new Machine(1, 1, '', 10000, 4000);
  let msg = new Message();
  mac.update('Reject');
  expect(mac).toEqual({
    id: 1,
    errorMsg: 'Task bas been rejected',
    stage: 1,
    status: 'Reject',
    stopTime: 10000,
    taskFreq: 4000,
    message: msg})
});

test('Test update cancel', () => {
  let mac = new Machine(1, 1, '', 10000, 4000);
  let msg = new Message();
  mac.update('Success');
  expect(mac).toEqual({
    id: 1,
    errorMsg: '',
    stage: 2,
    status: 'Success',
    stopTime: 10000,
    taskFreq: 4000,
    message: msg});
  mac.update('Cancel');
  expect(mac).toEqual({
    id: 1,
    errorMsg: 'Task has been canceled.',
    stage: 1,
    status: 'Cancel',
    stopTime: 10000,
    taskFreq: 4000,
    message: msg});
});

test('Test update throw message errror', () => {
  function useWrongMsg() {
    let mac = new Machine(1, 1, '', 10000, 4000);
    mac.update('Wrong message');
  }
  expect(useWrongMsg).toThrowError('Invalid message sent.');

});
