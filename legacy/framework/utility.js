/* exported extend */

function extend(obj1, obj2) {
	for	(var prop in obj2) {
		obj1[prop] = obj2[prop];
	}
	
	return obj1;
}
