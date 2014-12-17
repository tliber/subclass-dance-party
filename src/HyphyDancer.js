var HyphyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $("<span class='turtles'>  <img src='src/gifs/giphy.gif' alt='turtles'</span>");//add gif class here
  //add .css properties here
  this.$node.css({top : top, left : left});
  this.timeBetweenSteps = timeBetweenSteps;
};

HyphyDancer.prototype = Object.create(Dancer.prototype);
HyphyDancer.prototype.constructor = HyphyDancer;

HyphyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  if (this.blueBall === true){
    this.$node.css({border :'10px solid pink'});
    this.blueBall = false;
  }
  else{
    this.$node.css({border :'10px solid blue'});
    this.blueBall = true;
  }
  this.$node;
};



