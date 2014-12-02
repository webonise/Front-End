## AngularJs used in coach registry page

### Loader
  
##### HTML:
    Added below tag inside the body for page loading
```html
    <pageloading></pageloading>
```
##### JS:
```javascript
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
```html
	<div ng-tabs class="tabbable">
        <ol id="tabs" class="nav nav-tabs" >
            <li ng-tab-head="active"  ng-class="{'active':$first}">
                <a href="#" ng-click="$event.preventDefault()" > tab text here… </a>
            </li>
        </ol>
        <div ng-model="coachDetails" class="tab-content">
            <div class="tab-pane tab-section animated fadeInLeft" id="coachDetails_{{$index}}" ng-class="{'active-detais':$first}" >
                tab content here...
            </div>
        </div>
    </div>
```
##### CSS:
Attach below css
```html
	$html->css(array(,'../js/angular_tab/css/bootstrap.min','../js/angular_tab/css/animate.min','../js/angular_tab/css/angular'));
```
##### JS:
```javascript
	coachesRegistryApp.directive( 'ngTabHead', function() {
	    return {
            scope: false,
            restrict: 'EAC',
            link: function( scope, element, attributes, controller ) {
                element.bind( 'click', function() {
                    var tabDetails = angular.element(this).find('a').attr("tab_details")
                    angular.element('#tabs li').removeClass('active')
                    angular.element('#rightpan .tab-section').removeClass('active-detais');
                    if(angular.element(this).is(':first-child')){
                            angular.element('#tabs li:first-child').removeClass('deactive').addClass('active');
                            angular.element('#rightpan div:first-child .tab-section').removeClass('deactive').addClass('active-detais')
                    }else{
                            angular.element('#tabs li:first-child').addClass('deactive');
                            angular.element('#rightpan div:first-child .tab-section').addClass('deactive')
                            angular.element(this).addClass('active');
                            angular.element("#"+tabDetails).addClass('active-detais');
                    }
            
                });           
            }
	    };
	})
```


### Custom Scroller
Added customscrollbar to ‘#tabs’ coaches listing inside searchName function.
##### JS:
```javascript
	angular.element("#tabs").mCustomScrollbar({
       	scrollInertia:2500,
        mouseWheel:{
            preventDefault:true,
        	normalizeDelta:true
        },
        advanced:{ updateOnContentResize: true}
	});
```

