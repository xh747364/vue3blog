export const useFormatDate = (dates: string | Date, fmt: string): string => {
	const date = new Date(dates);
	// const YY = date.getFullYear() + '-';
	// const MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	// const DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	// const hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	// const mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	// const ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	// return YY + MM + DD + ' ' + hh + mm + ss;

	const o: {
        'M+': string; //月份
		'd+': string; //日
		'h+': string; //小时
		'm+': string; //分
		's+': string; //秒
    } = {
		'M+': String(date.getMonth() + 1), //月份
		'd+': String(date.getDate()), //日
		'h+': String(date.getHours()), //小时
		'm+': String(date.getMinutes()), //分
		's+': String(date.getSeconds()) //秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
    Object.keys(o).map((k: string) => {
        console.log(typeof k)
        if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
    })
    return fmt;
};
