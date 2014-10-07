{"changed":true,"filter":false,"title":"FrenCtrl.js","tooltip":"/client/js/FrenCtrl.js","value":"angular.module('FrenCtrl', []).controller('FriendController', ['$scope','$http','$routeParams',function($scope, $http, $routeParams) {\n  /*$http.get('https://graph.facebook.com/'+$routeParams.friendID+'/picture').success(function(data, status, headers, config) {\n      $scope.profilePic = data;\n      console.log(data);\n  }).error(function(data, status, headers, config) {\n      console.log('Error:'+ data);\n  });*/\n  $scope.image = 'https://graph.facebook.com/'+$routeParams.friendID.substring(1)+'/picture';\n  console.log($scope.image);\n  $scope.$apply();\n}]);","undoManager":{"mark":61,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":20},"end":{"row":3,"column":21}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":21},"end":{"row":3,"column":22}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":23},"end":{"row":3,"column":24}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":78},"end":{"row":0,"column":79}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":117},"end":{"row":0,"column":118}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":7},"end":{"row":1,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":2},"end":{"row":1,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":3},"end":{"row":1,"column":4}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":5},"end":{"row":6,"column":6}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":7},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":2},"end":{"row":7,"column":3}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":3},"end":{"row":7,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":4},"end":{"row":7,"column":5}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":2},"end":{"row":7,"column":5}},"text":"$sc"},{"action":"insertText","range":{"start":{"row":7,"column":2},"end":{"row":7,"column":8}},"text":"$scope"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":8},"end":{"row":7,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":9},"end":{"row":7,"column":10}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":10},"end":{"row":7,"column":11}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":11},"end":{"row":7,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":13}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":13},"end":{"row":7,"column":14}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":14},"end":{"row":7,"column":15}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":16},"end":{"row":7,"column":17}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":17},"end":{"row":7,"column":18}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":18},"end":{"row":7,"column":19}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":19},"end":{"row":7,"column":20}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":20},"end":{"row":7,"column":21}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":21},"end":{"row":7,"column":22}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":22},"end":{"row":7,"column":84}},"text":"'https://graph.facebook.com/'+$routeParams.friendID+'/picture'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":84},"end":{"row":7,"column":85}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":73},"end":{"row":7,"column":74}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":74},"end":{"row":7,"column":86}},"text":"substring(1)"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":14},"end":{"row":7,"column":15}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":93},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":3}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":3},"end":{"row":8,"column":4}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":4},"end":{"row":8,"column":5}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":5},"end":{"row":8,"column":6}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":6},"end":{"row":8,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":7},"end":{"row":8,"column":8}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":9}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":9},"end":{"row":8,"column":10}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":10},"end":{"row":8,"column":11}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":11},"end":{"row":8,"column":12}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":12},"end":{"row":8,"column":13}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":13},"end":{"row":8,"column":15}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":14},"end":{"row":8,"column":15}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":15},"end":{"row":8,"column":16}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":16},"end":{"row":8,"column":17}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":17},"end":{"row":8,"column":18}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":18},"end":{"row":8,"column":19}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":19},"end":{"row":8,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":20},"end":{"row":8,"column":21}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":21},"end":{"row":8,"column":26}},"text":"image"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":27},"end":{"row":8,"column":28}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":28},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":18}},"text":"$scope.$apply();"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":28},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":9,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":4},"end":{"row":9,"column":5}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":5},"end":{"row":9,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":7}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":7},"end":{"row":9,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":8},"end":{"row":9,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":9},"end":{"row":9,"column":10}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":10},"end":{"row":9,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":11},"end":{"row":9,"column":12}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":9},"end":{"row":9,"column":12}},"text":"res"},{"action":"insertText","range":{"start":{"row":9,"column":9},"end":{"row":9,"column":18}},"text":"resultObj"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":18},"end":{"row":9,"column":19}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":19},"end":{"row":9,"column":20}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":20},"end":{"row":9,"column":21}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":21},"end":{"row":9,"column":22}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":19},"end":{"row":9,"column":22}},"text":"fac"},{"action":"insertText","range":{"start":{"row":9,"column":19},"end":{"row":9,"column":27}},"text":"facebook"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":27},"end":{"row":9,"column":28}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":29}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":30}},"text":"me"},{"action":"insertText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":30}},"text":"me"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":30},"end":{"row":9,"column":31}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":31},"end":{"row":9,"column":32}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":32},"end":{"row":9,"column":33}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":9,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":4},"end":{"row":9,"column":5}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":5},"end":{"row":9,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":7}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":7},"end":{"row":9,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":8},"end":{"row":9,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":8},"end":{"row":9,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":8},"end":{"row":9,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":9},"end":{"row":9,"column":10}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":10},"end":{"row":9,"column":11}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":11},"end":{"row":9,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":12},"end":{"row":9,"column":13}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":13},"end":{"row":9,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":45}},"text":"  $scope.id = $scope.resultObj.facebook.me.id"},{"action":"removeText","range":{"start":{"row":8,"column":28},"end":{"row":9,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":4},"end":{"row":10,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1412593796225}