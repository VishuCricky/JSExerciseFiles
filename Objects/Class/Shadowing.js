class C{
  constructor(id){
    this.id = id;
  }
  id(){
    console.log("Id : "+id);
  }
}

var c1 = new C("C1");
c1.id(); // TypeError -- `c1.id` is now the string "c1"