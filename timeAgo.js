/**
 * returns string
 * this function returns the time difference between two times in words, Facebook style
 */
function nice_time_format(date) {

	var d = new Date(date*1000),
		n = new Date(),
		days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	if(!date) { return "No date provided"; }
	
	var periods         = ["second", "minute", "hour", "day"],
		lengths         = ["60","60","24","7"];
	
	var now             = Math.round(new Date().getTime()/1000),
		unix_date       = date;
	
	// check validity of date
	if(!unix_date) { return "Bad date"; }
	
	// state the tense
	// is it future date or past date
	if(now > unix_date) {    
		var difference    = now - unix_date,
			tense         = "ago";
	
	} else {
		var difference    = unix_date - now,
			tense         = "from now";
	}
	
	for( var j = 0; difference >= lengths[j] && j < lengths.length-1; j++) {
		difference /= lengths[j];
	}
	
	difference = Math.round(difference);
	
	/* we never want to return 0 seconds, it looks funny */
	if ((j == 0) && (difference == 0)) {
		return "seconds ago";
	}
	
	if(difference != 1) {
		periods[j] += "s";
	}
	
	
	
	var ret_val = difference+' '+periods[j]+' '+tense;
	
	/* If the return is days, we do some special processing */
	if (j == 3) {
		
		if (difference == 1) {
			if (tense == 'ago') { ret_val = 'Yesterday'; }
			else { ret_val = 'Tomorrow'; }
		} else if (difference < 7) {
			if (tense != 'ago') { ret_val = 'Next '+days[d.getDay()]; }
			else { ret_val = days[d.getDay()]; }
		} else {
			if ((d.getFullYear() === n.getFullYear()) && (tense == 'ago')) {
				ret_val = months[d.getMonth()];
				if (d.getDate() < 10) {
					ret_val += '0'+d.getDate();
				} else {
					ret_val += d.getDate();
				}
			} else {
				ret_val = months[d.getMonth()];
				if (d.getDate() < 10) {
					ret_val += '0'+d.getDate();
				} else {
					ret_val += d.getDate();
				}
				
				ret_val += ', '+d.getFullYear();
			}
		
		}
		
		var hour = (d.getHours() % 12),
			min = nice_date.getMinutes(),
			meridian = (hour < 12) ? 'am' : 'pm';

		if (hour == 0) {
			hour = 12;
		}
		if (min < 10) {
			min = '0'+min;
		}
		
		ret_val += ' at '+hour+':'+min+meridian;
	}
	
	return ret_val;
}