// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  // console.log(this);
  // this.step();
  this.step();
  //setTimeout(this.step, timeBetweenSteps);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // console.log($node);
  this.lineup();
};



Dancer.prototype.step = function(){
    //the basic dancer doesn't do anything interesting at all on each step,
    //it just schedules the next step
    // console.log(this);
    // console.log(step);

    var myThis = this;
    // setTimeout(function() {
    //   myThis.step.call(myThis);
    //   //myThis.call(myThis);
    // }, this.timeBetweenSteps);
    setTimeout(myThis.step.bind(myThis),this.timeBetweenSteps)

};
Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    // console.log(this.$node);
  };

Dancer.prototype.lineup = function(){
  var context = this;
  console.log(this);
  this.$node.click(function() {
    context.$node.animate({
      top: 200
    }, 500)
  });
};







