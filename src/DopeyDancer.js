var DopeyDancer = function(top, left, timeBetweenSteps){
  this.blueBall = true;
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node =$("<span class = 'blueFlash'></span>");
  // this.$node.css({top : top,left : left});
  // this.$node.css({border :'10px solid blue'});
  this.timeBetweenSteps = timeBetweenSteps;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // console.log($node);


};

DopeyDancer.prototype = Object.create(Dancer.prototype);
DopeyDancer.prototype.constructor = DopeyDancer;

DopeyDancer.prototype.step = function(){
  // Dancer.prototype.step().call(this);
    // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
   Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  // this.$node =$("<span class = 'blueFlash'></span>");
  // console.log(blueBall);
  if (this.blueBall === true){
    this.$node.css({border :'10px solid pink'});
    this.blueBall = false;
  }
  else{
    this.$node.css({border :'10px solid blue'});
    this.blueBall = true;
  }


  // this.$node.css({color : 'blue'});
};

