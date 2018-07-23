module.exports = function(dispatch) {
	/*
	dispatch.hook('C_FIELD_EVENT_BAN', 1, function(event) {
		return false;
	});
	*/
	dispatch.hook('*', 'raw', (code) => {
		if (code === 61481) {
			return false;
		}
	});
};
