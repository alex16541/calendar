import classNames from 'classnames';
import { memo } from 'react';

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
}

const Calendar = (props: CalendarProps) => {
    const { className, onDayClick } = props;
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
    } = useCalendar();

    return (
        <div className={classNames(cls.Calendar, {}, [className])}>
            <div className={cls.Controlls}>
                <Button onClick={prevMonth} className={cls.Controlls__prev}>
                    ←_←
                </Button>
                <Input
                    type="month"
                    className={cls.Controlls__input}
                    value={formatedDate}
                    onChange={onDateChange}
                />
                <Button onClick={reset} className={cls.Controlls__home}>
                    🏠
                </Button>
                <Button onClick={nextMonth} className={cls.Controlls__next}>
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
                    {Array(31)
                        .fill(1)
                        .map((_, i) => (
                            <Button
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
