/**
 * returns string
 * this function returns the time in standard UTC format (yyyy-mm-ddThh:mm+hh:mm)
 * it is passed a date object of the time you want to display
 */

function utc_datetime(date) {
	var year = date.getUTCFullYear(),
		month = date.getUTCMonth() + 1,
		day = date.getUTCDate(),
		hour = date.getUTCHours(),
		minute = date.getUTCMinutes(),
		second = date.getUTCSeconds(),
		offset_hours = '00',
		offset_minutes = '00';
	
	if (month < 10) {
		month = '0'+month;
	}
	if (day < 10) {
		day = '0'+day;
	}
	
	return year+'-'+month+'-'+day+'T'+hour+':'+minute+':'+second+'+'+offset_hours+':'+offset_minutes;
}