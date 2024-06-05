import { useCallback, useMemo, useState } from 'react';

import { getFormatedDate } from '@/shared/utils/date';

interface useCalendarProps {
    selectedMonth: number;
    selectedYear: number;
}

export const useCalendar = (props: useCalendarProps) => {
    const { selectedMonth: selectedMonth, selectedYear: selectedYear } = props;

    const [year, setYear] = useState(selectedYear);
    const [month, setMonth] = useState(selectedMonth);

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
        return selectedMonth === month && selectedYear === year;
    }, [selectedYear, selectedMonth, month, year]);

    const reset = useCallback(() => {
        setMonth(new Date().getMonth());
        setYear(new Date().getFullYear());
    }, []);

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
        return getFormatedDate(year, month);
    }, [year, month]);

    return {
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
    };
};
