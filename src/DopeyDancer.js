var DopeyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timeBetweenSteps = timeBetweenSteps;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // console.log($node);


};

DopeyDancer.prototype = Object.create(MakeDancer.prototype);
DopeyDancer.prototype.constructor = DopeyDancer;

DopeyDancer.prototype.step = function(){
  // MakeDancer.prototype.step().call(this);
    // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
   MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};
