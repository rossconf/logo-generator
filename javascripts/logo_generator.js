function Logo() {
  this.value     = null;
  this.container = $('<div id="logo"></div>');
  this.alphabet  = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  this.init = function() {};

  this.setValue = function(value) {
    this.value = value.toUpperCase();
    this.replaceUmlauts();

    $('#logo').empty();

    this.generateGrid();

    $('body').append(this.container);
  };

  this.replaceUmlauts = function () {
    this.value.replace(/Ää/g, "ae")
              .replace(/Öö/g, "oe")
              .replace(/Üü/g, "ue")
              .replace(/ß/g, "ss");
  };

  this.generateGrid = function () {
    var self = this;

    _.forEach(this.alphabet, function (char) {
      var block = $('<span></span>');

      if (self.value.indexOf(char) !== -1) {
        block.addClass('present');
        block.css('opacity', self.calcOpacity(char));
      }

      $(self.container).append(block);
    });

    this.addMeta();
  };

  this.addMeta = function () {
    $(this.container).append('<span class="filler"></span>');
    $(this.container).append('<span></span>');
    $(this.container).append('<span></span>');
    $(this.container).append('<span class="filler"></span>');
  };

  this.calcOpacity = function (char) {
    return 1/(this.value.match(new RegExp(char, "g")||[]).length);
  };

  this.init();
}

$(document).on('ready', function(){
  var _logo = new Logo();

  $('input[name=text]').on('keyup', function (){
    _logo.setValue($(this).val());
  });
});
