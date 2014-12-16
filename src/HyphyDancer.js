var HyphyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $("<div class='turtles'>  <img src='src/gifs/giphy.gif' alt='turtles'</div>");//add gif class here
  //add .css properties here
  this.$node.css({top : top, left : left});
  this.timeBetweenSteps = timeBetweenSteps;
};

HyphyDancer.prototype = Object.create(MakeDancer.prototype);
HyphyDancer.prototype.constructor = HyphyDancer;

HyphyDancer.prototype.step = function(){

  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};

