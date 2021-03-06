// Generated by CoffeeScript 1.7.1
Mifan.controller("mBillCtrl", function($scope) {
  var billListMap;
  billListMap = {
    "love": {
      name: "喜欢"
    },
    "comment": {
      name: "评论",
      fn: "toggleMDesign('comment')"
    },
    "share": {
      name: "分享"
    },
    "answer": {
      name: "回答",
      fn: "toggleMDesign('answer')"
    }
  };
  $scope.billList = [];
  return $scope.$on("setBillList", function(event, msg) {
    var type;
    return $scope.billList = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = msg.length; _i < _len; _i++) {
        type = msg[_i];
        _results.push(billListMap[type]);
      }
      return _results;
    })();
  });
});
