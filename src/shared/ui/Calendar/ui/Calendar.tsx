import { memo, useMemo } from 'react';

import classNames from 'classnames';

import cls from './Calendar.module.scss';
import { Button } from '../../Button';

// Не работает в Vite тк в сборку не включаются Node.js модули. Как включить в сборку https я пока не понял
// https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
// import { IsDayOffAPI } from 'isdayoff';
// const api = new IsDayOffAPI();
// console.log(api.today());

interface CalendarProps {
    className?: string;
    year?: string | number;
    month?: string | number;
    onDayClick?: (day: string) => void;
}

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const Calendar = (props: CalendarProps) => {
    // api.today();
    // api.date({ month: 8, date: 10 });
    // .then((res) => console.log(res))
    // .catch((e) => console.log(e));

    const currentMonth = useMemo(() => {
        const date = new Date();
        return date.getUTCMonth();
    }, []);

    const currentYear = useMemo(() => {
        const date = new Date();
        return date.getFullYear();
    }, []);

    const { className, year = currentYear, month = currentMonth, onDayClick } = props;

    const currentDay = useMemo(() => {
        const date = new Date();
        return date.getUTCDate();
    }, []);

    const firstDayPosition = useMemo(() => {
        const date = new Date();

        const m = Number(month);
        const y = Number(year);

        date.setFullYear(y, m, 1);

        return date.getDay() || 7;
    }, [month, year]);

    return (
        <div className={classNames(cls.Calendar, {}, [className])}>
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
                            className={classNames(cls.button, { [cls.today]: i + 1 === currentDay })}
                            style={{ gridColumn: i == 0 ? firstDayPosition % 8 : '' }}
                            key={i + 1}
                            onClick={() => onDayClick?.(`${i + 1}/${+month + 1}/${year}`)}
                        >
                            {i + 1}
                        </Button>
                    ))}
            </div>
        </div>
    );
};

const Memoized = memo(Calendar);

export { Memoized as Calendar };
