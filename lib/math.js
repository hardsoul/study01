module.exports = {
  sum: function(numbers){
    var targetNumber = numbers[0] + numbers[numbers.length - 1];
    return targetNumber * (numbers.length / 2);
  },
  min: function(a){
    var array = a instanceof Array ? a : arguments;
    var result = array[0];

    for(var i = 0; i < array.length; i++) {
      if(result > array[i]) {
        result = array[i];
      }
    }
    return result;
  },
  max: function(a){
    var array = a instanceof Array ? a : arguments;
    var result = array[0];

    for(var i = 0; i < array.length; i++) {
      if(result < array[i]) {
        result = array[i];
      }
    }
    return result;
  },
  countIf: function(arr, target){
    var total = 0;

    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        total++;
      }
    }
    return total;
  },
  sumIfOver: function(arr, limit){
    var total = 0;

    for(var i = 0; i < arr.length; i++) {
      if(arr[i] >= limit) {
        total += arr[i];
      }
    }

    return total;
  },
  sumIfUnder: function(arr, limit){
    var total = 0;

    for(var i = 0; i < arr.length; i++) {
      if(arr[i] <= limit) {
        total += arr[i];
      }
    }

    return total;
  }
};