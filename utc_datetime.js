/**
 * returns string
 * this function returns the time in standard UTC format (YYYY-MM-DDThh:mm:ss.sTZD) where:
 *
 *   YYYY = four-digit year
 *   MM   = two-digit month (01=January, etc.)
 *   DD   = two-digit day of month (01 through 31)
 *   hh   = two digits of hour (00 through 23) (am/pm NOT allowed)
 *   mm   = two digits of minute (00 through 59)
 *   ss   = two digits of second (00 through 59)
 *   s    = one or more digits representing a decimal fraction of a second
 *   TZD  = time zone designator (Z or +hh:mm or -hh:mm)
 *
 * the function is passed a date object of the time you want to display
 */

function utc_datetime(date) {
	var year = date.getUTCFullYear(),
		month = date.getUTCMonth() + 1,
		day = date.getUTCDate(),
		hour = date.getUTCHours(),
		minute = date.getUTCMinutes(),
		second = date.getUTCSeconds(),
		centisecond = Math.round(date.getUTCMilliseconds()/10),
		offset_hours = '00',
		offset_minutes = '00';
	
	if (month < 10) {
		month = '0'+month;
	}
	if (day < 10) {
		day = '0'+day;
	}
	if (hour < 10) {
		hour = '0'+hour;
	}
	if (minute < 10) {
		minute = '0'+minute;
	}
	if (second < 10) {
		second = '0'+second;
	}
	if (centisecond < 10) {
		centisecond = '0'+centisecond;
	}
	
	return year+'-'+month+'-'+day+'T'+hour+':'+minute+':'+second+'.'+centisecond+'+'+offset_hours+':'+offset_minutes;
}