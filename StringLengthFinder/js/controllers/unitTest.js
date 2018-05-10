describe('Longest string', function() {
  it('The cow jumped over the moon : Should display "jumped"', function() {
    expect(
      function() {
        var str = 'The cow jumped over the moon';
        var inputStringSplit = str.split(' ');
        var stringLength = 0;
        for (var i = 0; i < inputStringSplit.length; i++) {
          if (inputStringSplit[i].length > stringLength) {
            stringLength = inputStringSplit[i].length;
            var longestString = inputStringSplit[i];
          }
        }
        return longestString;
      }()).toEqual("jumped");
  });

  it('I have only one chance: Should display "chance"', function() {
    expect(
      function() {
        var str = 'I have only one chance';
        var inputStringSplit = str.split(' ');
        var stringLength = 0;
        for (var i = 0; i < inputStringSplit.length; i++) {
          if (inputStringSplit[i].length > stringLength) {
            stringLength = inputStringSplit[i].length;
            var longestString = inputStringSplit[i];
          }
        }
        return longestString;
      }()).toEqual("chance");
  });
  it('I have 1245678 pages to read in a day : should display "1245678"', function() {
    expect(
      function() {
        var str = 'I have 1245678 pages to read in a day';
        var inputStringSplit = str.split(' ');
        var stringLength = 0;
        for (var i = 0; i < inputStringSplit.length; i++) {
          if (inputStringSplit[i].length > stringLength) {
            stringLength = inputStringSplit[i].length;
            var longestString = inputStringSplit[i];
          }
        }
        return longestString;
      }()).toEqual("1245678");
  });
 it('I like yellow flower: Should display the "yellow"', function() {
    expect(
      function() {
        var str = 'I like yellow flower';
        var inputStringSplit = str.split(' ');
        var stringLength = 0;
        for (var i = 0; i < inputStringSplit.length; i++) {
          if (inputStringSplit[i].length > stringLength) {
            stringLength = inputStringSplit[i].length;
            var longestString = inputStringSplit[i];
          }
        }
        return longestString;
      }()).toEqual("yellow");
  });
  it('Testing special characters !@#$%^&*()_+: Should display the "!@#$%^&*()_+"', function() {
     expect(
       function() {
         var str = 'Testing special characters !@#$%^&*()_+';
         var inputStringSplit = str.split(' ');
         var stringLength = 0;
         for (var i = 0; i < inputStringSplit.length; i++) {
           if (inputStringSplit[i].length > stringLength) {
             stringLength = inputStringSplit[i].length;
             var longestString = inputStringSplit[i];
           }
         }
         return longestString;
       }()).toEqual("!@#$%^&*()_+");
   });
   it('Testing only numeric values 12345 657575 8975322 43563: Should display the "8975322"', function() {
      expect(
        function() {
          var str = '12345 657575 8975322 43563';
          var inputStringSplit = str.split(' ');
          var stringLength = 0;
          for (var i = 0; i < inputStringSplit.length; i++) {
            if (inputStringSplit[i].length > stringLength) {
              stringLength = inputStringSplit[i].length;
              var longestString = inputStringSplit[i];
            }
          }
          return longestString;
        }()).toEqual("8975322");
    });
});
