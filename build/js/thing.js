riot.tag2('thing', '<div class="container"> <h1>Some thing</h1> <button onclick="{stuff}">Thing</button> </container>', '', '', function(opts) {
    this.stuff = function() {
      opts.thing();
      console.log('stuff');
    }.bind(this)

    opts.on('thing', function() {
      console.log('thing');
    });
});
