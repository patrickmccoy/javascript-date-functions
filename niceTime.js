/**
 * Format a unix timestamp to look nice and in a more readable format than the standard toString() function.
 * mm/dd/yyyy hh:mm am|pm
 * it is passed a date object of the time you want to display
 */
var niceTime = function(timestamp) {
	var nice_date = new Date(timestamp*1000);
	
	var day = nice_date.getDate(),
		month = nice_date.getMonth()+1,
		year = nice_date.getFullYear(),
		hour = nice_date.getHours(),
		min = nice_date.getMinutes(),
		meridian = (hour < 12) ? 'am' : 'pm';
	
	hour = hour % 12;
	
	if (hour == 0) {
		hour = 12;
	}
	
	if (hour < 10) {
		hour = '0'+hour;
	}
	if (min < 10) {
		min = '0'+min;
	}
	if (month < 10) {
		month = '0'+month;
	}
	if (day < 10) {
		day = '0'+day;
	}
	
	return month+'/'+day+'/'+year+' '+hour+':'+min+' '+meridian;
}

