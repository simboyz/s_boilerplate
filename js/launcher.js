//launcher.js
var APP = {};

APP.path = {
	libs: function(src){
		return 'js/libs/' + src + '.js'
	},
    modules: function(src){
		return 'js/modules/' + src + '.js'
	},
    plugins: function(src){
		return 'js/plugins/' + src + '.js'
	}
};


APP.init = (function() {

    $LAB.script(APP.path.libs('jquery.dev')).
    script(APP.path.libs('handlebars.min')).
    script(APP.path.libs('raphael.min')).
    script(APP.path.libs('d3.min')).
    script(APP.path.libs('tween.min')).
    wait(function() {
        $LAB.script(APP.path.plugins('jquery.animate.enhanced.min')); //for elastic animation
    });
}());

