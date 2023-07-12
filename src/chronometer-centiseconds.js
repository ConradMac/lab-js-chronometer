// --------------

class Chronometer {
    constructor() {
        // ... your code goes here
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(printTimeCallback) {
        // ... your code goes here

        this.intervalId = setInterval(() => {
            this.currentTime++;
            if (printTimeCallback) {
                printTimeCallback();
            }
        }, 10);
    }

    getMinutes() {
        // ... your code goes here
        return Math.floor(this.currentTime / 6000);
        // should return the number of entire minutes passed
    }

    getSeconds() {
        // ... your code goes here
        // if (this.currentTime === 0) {
        //     return 0;
        // } else {
        return (this.currentTime % 6000) / 100;
        // }
    }

    getCentiseconds() {
        // if (this.currentTime === 0) {
        return (this.currentTime % 6000) % 100;
        // }
    }

    computeTwoDigitNumber(value) {
        // // ... your code goes here
        // if (value < 10) {
        //     return `0${String(value)}`;
        // } else {
        //     return `${String(value)}`;
        // }
        let stringValue = String(value);
        if (stringValue.length <= 1) {
            stringValue = "0" + stringValue;
        }
        return stringValue;
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
        const toto = this.computeTwoDigitNumber(this.getMinutes());

        const tata = this.computeTwoDigitNumber(this.getSeconds());

        const titi = this.computeTwoDigitNumber(this.getCentiseconds());

        return `${toto}:${tata}:${titi}`;
    }
}
