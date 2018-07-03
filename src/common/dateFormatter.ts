import { injectable } from "inversify";

@injectable()
export class DateFormatter {
    constructor() { }

    /**
     * Format the date to the given format
     * @param date Date
     * @param format? nullable format value. If not provided, the yyyyMMddHHmmss format is used
     * @returns formatted date.
     */
    FormatToString(date: Date, format?: string): string {
        if (format === 'undefined' || format === null || format === '') {
            format = 'yyyyMMddHHmmss';
        }

        var formattsSplitted: string[] = format.match(/(.)\1*/g);
        if (formattsSplitted.length = 0) {
            return '';
        }

        var dateFormatted: string = '';
        for (var i = 0; i < formattsSplitted.length; i++) {
            var formatSelected = formattsSplitted[i];
            dateFormatted += this.GetDateSectionFormatted(date, formatSelected);
        }

        return dateFormatted;
    }

    GetDateSectionFormatted(date: Date, format: string): string {
        var sectionFormatted: string;
        switch (format) {
            case 'yyyy':
                sectionFormatted = date.getFullYear().toString();
                break;
            case 'MM':
                // JS Month is 0 index based
                var month = date.getMonth() + 1;
                sectionFormatted = month < 10 ? sectionFormatted = `0${month}` : month.toString();
                break;
            case 'dd':
                var day = date.getDay();
                sectionFormatted = day < 10 ? sectionFormatted = `0${day}` : day.toString();
                break;
            case 'HH':
                var hours = date.getHours();
                sectionFormatted = hours < 10 ? sectionFormatted = `0${hours}` : hours.toString();
                break;
            case 'mm':
                var minutes = date.getMinutes();
                sectionFormatted = minutes < 10 ? sectionFormatted = `0${minutes}` : minutes.toString();
                break;
            case 'ss':
                var sec = date.getSeconds();
                sectionFormatted = sec < 10 ? sectionFormatted = `0${sec}` : sec.toString();
                break;
            default: 
                sectionFormatted = '';                
        }

        return sectionFormatted;
    }

}