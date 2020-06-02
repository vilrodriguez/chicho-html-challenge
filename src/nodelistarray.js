export const iterateNodeList = (array, callback, scope) => {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};


