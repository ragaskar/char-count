describe('charfield', function () {
  describe("counting up", function() {
    var counterEl, field;

    beforeEach(function() {
      var fixture = $('#jasmine_content').append($('<span id="counter"></span><input id="field" />'));
      counterEl = fixture.find('#counter');
      field = fixture.find('#field');
      $("#field").charCount(counterEl);
    });

    afterEach(function() {
      $('#jasmine_content').empty();
    });

    it('should show zero after initialization', function() {
      expect(counterEl.text()).toEqual('0');
    });

  });

});