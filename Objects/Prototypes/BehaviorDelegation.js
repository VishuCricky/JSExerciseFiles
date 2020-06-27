var Task = {
  setID : function(ID){
    this.id = ID;
  },
  outputID : function(){
    console.log(this.id);
  }
};

var XYZ = Object.create( Task );

XYZ.prepareTask = function(ID, label){
  this.setID(ID);
  this.label = label;
};

XYZ.outputTaskDetails = function(){
  this.outputID();
  console.log(this.label);
};

console.log("XYZ.prepareTask : "+XYZ.prepareTask("dance","breakdance"));
console.dir("Object XYZ : "+JSON.stringify(XYZ));
console.log("XYZ.outputTaskDetails : "+XYZ.outputTaskDetails());
