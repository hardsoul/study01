module.exports = {
  find: function(arr, target) {
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {
      if(max[target] < arr[i][target]) {
        max = arr[i];
      }
    }

    return max;
  }
};
