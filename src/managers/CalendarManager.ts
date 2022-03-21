import moment from 'moment';

class CalendarManager {
    static getDayOfWeek(date: Date): number {
        return moment(date).isoWeekday();
    }

    static getHourOfDay(date: Date): number {
        return moment(date).hour();
    }
}

export { CalendarManager };
