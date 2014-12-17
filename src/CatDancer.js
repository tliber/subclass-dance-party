var CatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $("<div class='cats'>  <img src='src/gifs/dancingCat.gif' alt='cats'></div>");//add gif class here
  this.$node.css({top : top, left : left});
  this.timeBetweenSteps = timeBetweenSteps;
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  this.$node;
};
