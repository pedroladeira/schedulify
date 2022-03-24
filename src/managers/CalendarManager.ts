import moment from 'moment';

class CalendarManager {
    static getDayOfWeek(date: Date): number {
        return moment(date).weekday();
    }

    static getHourOfDay(date: Date): number {
        return moment(date).hour();
    }

    static getMinutes(date: Date): number {
        return moment(date).minutes();
    }

    static getSelectedDate(): Date {
        return moment().toDate();
    }

    static getWeekDateByWeekIndex(index: number, date?: Date): Date {
        return moment(date).set('weekday', index).toDate();
    }
}

export { CalendarManager };
