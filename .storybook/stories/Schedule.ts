import { initSchedule } from '../../src';

export interface ScheduleProps {
}

/**
 * Primary UI component for user interaction
 */
export const createSchedule = ({
}: ScheduleProps) => {
  const schedule = document.createElement('div');
  initSchedule(schedule);
  return schedule;
};
