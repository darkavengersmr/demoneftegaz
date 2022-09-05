export function dateNow(dayBias: number): string {
    let d = new Date(new Date().setDate(new Date().getDate()+dayBias)),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('.');
}

export function timeNow(): string {
    const d = new Date(new Date().setDate(new Date().getDate()))      
    return [d.getHours(), d.getMinutes()].join(':');
}