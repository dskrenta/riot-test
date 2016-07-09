class Person {
  constructor() {
    var bus = riot.observable(this);
    this.init(bus);
  }
  hello() {
    console.log('ay');
  }
  init(opts) {
    var self = this;
    opts.on('ay', ()=> {
      this.hello();
    });
  }
}
