class Message {

  constructor(stopRate, cancelRate, failRate, rejectRate, successRate) {
    if (stopRate && cancelRate && failRate && rejectRate && successRate) {
      if (stopRate + cancelRate + failRate + rejectRate + successRate !== 1) {
        throw(new Error('The rate sum must be 1'));
      }
    }
    this.stopRate = stopRate || 0.1;
    this.cancelRate = this.stopRate + (cancelRate || 0.05);
    this.failRate = this.cancelRate + (failRate || 0.15);
    this.rejectRate = this.failRate + (rejectRate || 0.1);
    this.successRate = this.rejectRate + (successRate || 0.6);
  }

  getMessage(rdm) {
    let randomNumber = rdm || Math.random();
    if (rdm >= 1 || rdm < 0) {
      throw(new Error('Random number not valid'));
    }
    if (randomNumber <= this.stopRate) {
      return 'Stop';
    } else if (randomNumber <= this.cancelRate) {
      return 'Cancel';
    } else if (randomNumber <= this.failRate) {
      return 'Fail';
    } else if (randomNumber <= this.rejectRate) {
      return 'Reject';
    } else if (randomNumber <= this.successRate) {
      return 'Success';
    } else {
      throw(new Error('Status not valid'));
    }
  }
}

export default Message;