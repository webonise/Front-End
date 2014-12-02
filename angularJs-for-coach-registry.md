## AngularJs used in coach registry page

### Loader
  
##### HTML:
    Added below tag inside the body for page loading
    <pageloading></pageloading>
##### JS:
```html
	1. coachesRegistryApp.directive('pageloading', function () {
		   return {
		      restrict: 'E',
		      replace:true,
		      template: '<div class="loading"></div>',
		      link: function (scope, element, attr) {
		                  scope.$watch('pageloading', function (val) {
		                          if (val){
		                              $(element).show();
		                          }else{
		                              $(element).hide();
		                          }
		               		});
		      }
		   }
	})

	2. $scope.searchName = function(scroll) {
			$scope.pageloading = true;
		}

	3. success(function(response, status, headers, config){
    	$scope.pageloading = false;
		}
```

##### Description
	1. Created custom directive for loader, ‘coachesRegistryApp’ is the app in angularjs.
	2. Set the pageloading value ‘true’ inside searchName function.
	3. Set pageloading value ‘false’ after loading whole data inside success method.

### Tab Effect
##### HTML:
	


### Custom Scroller
