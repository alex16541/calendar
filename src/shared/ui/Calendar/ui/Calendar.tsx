import classNames from 'classnames';
import { memo } from 'react';

import { getCurrentMonth, getCurrentYear, getMonthLength } from '@/shared/utils/date';

import { Button } from '../../Button';
import { Input } from '../../Input';
import { daysOfWeek } from '../constants';
import { useCalendar } from '../hooks/useCalendar';

import cls from './Calendar.module.scss';

// Не работает в Vite тк в сборку не включаются Node.js модули. Как включить в сборку https я пока не понял
// https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
// import { IsDayOffAPI } from 'isdayoff';
// const api = new IsDayOffAPI();
// console.log(api.today());

interface CalendarProps {
    className?: string;
    onDayClick?: (day: string) => void;
    selectedYear?: number;
    selectedMonth?: number;
}

const Calendar = (props: CalendarProps) => {
    const {
        className,
        onDayClick,
        selectedYear = getCurrentYear(),
        selectedMonth = getCurrentMonth(),
    } = props;
    const {
        currentDay,
        month,
        year,
        firstDayPosition,
        onDateChange,
        nextMonth,
        prevMonth,
        reset,
        formatedDate,
        isCurrentMonth,
    } = useCalendar({ selectedYear, selectedMonth });

    return (
        <div className={classNames(cls.Calendar, {}, [className])} data-testid="Calendar">
            <div className={cls.Controlls}>
                <Button data-testid="Calendar:prevMonth" onClick={prevMonth} className={cls.Controlls__prev}>
                    ←_←
                </Button>
                <Input
                    data-testid="Calendar:input"
                    type="month"
                    className={cls.Controlls__input}
                    value={formatedDate}
                    onChange={onDateChange}
                />
                <Button data-testid="Calendar:currentDate" onClick={reset} className={cls.Controlls__home}>
                    🏠
                </Button>
                <Button data-testid="Calendar:nextMonth" onClick={nextMonth} className={cls.Controlls__next}>
                    →_→
                </Button>
            </div>
            <div className={cls.page}>
                <div className={cls.daysOfWeek}>
                    {daysOfWeek.map((day) => (
                        <span key={day} className={cls.weekDay}>
                            {day}
                        </span>
                    ))}
                </div>
                <div className={cls.days}>
                    {Array(getMonthLength(year, month))
                        .fill(1)
                        .map((_, i) => (
                            <Button
                                data-testid={`Calendar:day:${i + 1}`}
                                className={classNames(cls.button, {
                                    [cls.today]: i + 1 === currentDay && isCurrentMonth,
                                })}
                                style={{ gridColumn: i == 0 ? firstDayPosition % 8 : '' }}
                                key={i + 1}
                                onClick={() => onDayClick?.(`${i + 1}/${+month + 1}/${year}`)}
                            >
                                {i + 1}
                            </Button>
                        ))}
                </div>
            </div>
        </div>
    );
};

const Memoized = memo(Calendar);

export { Memoized as Calendar };
