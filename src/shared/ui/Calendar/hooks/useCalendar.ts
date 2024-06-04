import { useCallback, useMemo, useState } from 'react';

export const useCalendar = () => {
    const currentMonth = useMemo(() => {
        const date = new Date();
        return date.getUTCMonth();
    }, []);

    const currentYear = useMemo(() => {
        const date = new Date();
        return date.getFullYear();
    }, []);

    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(currentMonth);

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

    const isCurrentMonth = useMemo(() => {
        return currentMonth === month && currentYear === year;
    }, [currentYear, currentMonth, month, year]);

    const reset = useCallback(() => {
        setMonth(currentMonth);
        setYear(currentYear);
    }, [currentMonth, currentYear]);

    const onDateChange = useCallback(
        (value: string) => {
            if (!value) return reset();

            const [newYear, newMonth] = value.split('-');

            setMonth(+newMonth - 1);
            setYear(+newYear);
        },
        [reset],
    );

    const changeMonth = useCallback((month: number) => {
        if (month > 11) {
            setMonth(0);
            setYear((y) => ++y);
        } else if (month < 0) {
            setMonth(11);
            setYear((y) => --y);
        } else {
            setMonth(month);
        }
    }, []);

    const prevMonth = useCallback(() => {
        changeMonth(month - 1);
    }, [changeMonth, month]);

    const nextMonth = useCallback(() => {
        changeMonth(month + 1);
    }, [changeMonth, month]);

    const formatedDate = useMemo(() => {
        let m: number | string = month + 1;

        if (+m < 10) m = `0${m}`;

        return `${year}-${m}`;
    }, [year, month]);

    return {
        currentDay,
        currentMonth,
        currentYear,
        month,
        year,
        firstDayPosition,
        onDateChange,
        nextMonth,
        prevMonth,
        reset,
        formatedDate,
        isCurrentMonth,
    };
};
