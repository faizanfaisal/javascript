const countDownCounter = setInterval(() => {

  const counter = {
    countDownDate: function() {
      return new Date("mar 30, 2025 13:41:00").getTime();
    },    
    now: new Date().getTime(),
    distance: function() {
     return this.countDownDate() - this.now
    },
    days: function() {
      return Math.floor(this.distance() / (1000 * 60 * 60 * 24));
    },
    hours: function() {
      return Math.floor((this.distance() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    },
    minutes: function() {
     return Math.floor((this.distance() % (1000 * 60 * 60)) / (1000 * 60));
    }, 
    seconds: function() {
      return Math.floor((this.distance() % (1000 * 60)) / 1000);
    },
    showCounter: function (){
      console.log(`Days: ${this.days()}, Hours: ${this.hours()}, Minutes: ${this.minutes()}, Seconds: ${this.seconds()}`);
    },
    isRunning: function (){
      return this.distance() < 0 ? false : true;
    }
};

if(counter.isRunning()){  
    counter.showCounter();  
 }else{
    clearInterval(countDownCounter);
    console.log('Counter Reached.');
 }
}, 1000);  
