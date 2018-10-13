import Message from './Message';

class Machine {
  constructor(id, stage, status, stopTime, taskFreq) {
    this.id = id || -1;
    this.stage = stage || 1;
    this.status = status || '';
    this.stopTime = stopTime || 10000;
    this.taskFreq = taskFreq || 3000;
    this.message = new Message();
    this.errorMsg = '';
  }

  run () {
    let msg = this.message.getMessage();
    this.update(msg);
    if (this.errorMsg !== '') {
      console.log('Error message of ' + this.id + ': ' + this.errorMsg);
      //console.log(new Date() + '\n');
    }

    if (this.stage !== 5) {
      setTimeout(() => {
        this.run();
      }, this.status === 'Stop'? this.stopTime: this.taskFreq);
    } else {
      console.log('# ' + this.id + ' job is done.');
    }
  };

  start () {
    setTimeout(() => {
      this.run();
    }, this.taskFreq);
  }

  update (msg) {
    this.status = msg;
    switch (msg) {
      case 'Success':
        this.stage = this.stage + 1;
        this.errorMsg = '';
        break;
      case 'Stop':
        this.errorMsg = 'Task has stopped';
        break;
      case 'Cancel':
        this.stage = 1;
        this.errorMsg = 'Task has been canceled.';
        break;
      case 'Fail':
        this.errorMsg = 'Task has failed.';
        break;
      case 'Reject':
        this.errorMsg = 'Task bas been rejected';
        break;
      default:
        // to be done
        throw(new Error('Invalid message sent.'));
    }
  }
}

// let mac = new Machine(1, '', 5000, 3000);
// mac.start();

export default Machine;