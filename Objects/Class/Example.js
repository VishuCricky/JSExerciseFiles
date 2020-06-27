/* Example 1 */
/* class Widget {
  constructor(width,height){
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
  renderer($where){
    if(this.$elem){
      this.$elem.css({
        width : this.width + 'px',
        height : this.height + 'px'
      }).appendTo($where);

    }
  }
}

class Button extends Widget{
  constructor(width,height,label){
    super( width, height );
    this.label = label || 'Default';
    this.$elem = $("<button>").text(this.label);
  }
  renderer($where){
    super($where);
    this.$elem.click(this.onClick.bind(this));
  }
  onClick(evt){
    console.log("Button '"+ this.label + "' clicked!");
  }
} */

/* Example 2 */
class C{
  constructor(){
    this.num = Math.random();
  }
  rand(){
    console.log("Random: "+ this.num);
  }
}

var c1 = new C();
console.dir("c1 : "+ JSON.stringify(c1));
c1.rand();

C.prototype.rand = function(){
  console.log("Random: "+ Math.round(this.num * 1000));
};

var c2 = new C();
console.dir("c2 : "+ JSON.stringify(c2));
c2.rand();
c1.rand();

