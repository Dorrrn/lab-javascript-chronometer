class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    if (this.currentTime == 0) {
      return 0;
    }
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  // getMilSeconds() {
  //   let milSeconds = (this.currentime * 1000) % 1000;
  //   return milSeconds;

  // }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let twoDigitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let twoDigitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    //let twoDigitMilSeconds = this.computeTwoDigitNumber(this.getMilSeconds());

    return twoDigitMinutes + ':' + twoDigitSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
