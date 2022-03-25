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
        return moment(date).clone().set('weekday', index).toDate();
    }

    static getHourDateByWeekIndex(index: number, date: Date, hour: number): Date {
        return moment(date).clone().set('weekday', index).set('hours', hour).set('minutes', 0).set('seconds', 0).toDate();
    }

    static isToday(date: Date): boolean {
        const now = moment();
        return moment(date).isSame(now, 'day');
    }
}

export { CalendarManager };
