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

    $LAB.script(APP.path.libs('jquery.dev')) //finaly change 'jquery.min'
    .script(APP.path.libs('handlebars.min')) //for template
    .script(APP.path.libs('raphael.min')) //for drawing someting
    .script(APP.path.libs('d3.min')) //for data visualizing
    .script(APP.path.libs('tween.min')) //for smoothe chainning animation        
    .wait(function() {
        $LAB.script(APP.path.plugins('jquery.animate.enhanced.min')); //for elastic animation
    });
}());

