// import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { getCurrentMonth, getCurrentYear, getFormatedDate } from '@/shared/utils/date';

import { Calendar } from './Calendar';

describe('<Calendar />', () => {
    const clickDay = () => fireEvent.click(screen.getByTestId('Calendar:day:17'));
    const clickNextMonth = () => fireEvent.click(screen.getByTestId('Calendar:nextMonth'));
    const clickPrevMonth = () => fireEvent.click(screen.getByTestId('Calendar:prevMonth'));

    test('Рендерится', async () => {
        render(<Calendar />);

        const calendar = screen.getByTestId('Calendar');

        expect(calendar).toBeInTheDocument();
    });

    test('Клик на день возвращает дату', () => {
        let date = '';

        const onDayClick = (value: string) => {
            date = value;
        };

        render(<Calendar onDayClick={onDayClick} selectedMonth={3} selectedYear={2020} />);

        clickDay();

        expect(date).toBe('17/4/2020');
    });

    test('Клик на стрелочки меняет месяц', () => {
        let date = '';

        const onDayClick = (value: string) => {
            date = value;
        };

        render(<Calendar onDayClick={onDayClick} selectedMonth={3} selectedYear={2020} />);

        clickPrevMonth();
        clickDay();

        expect(date).toBe('17/3/2020');

        clickNextMonth();
        clickDay();

        expect(date).toBe('17/4/2020');

        clickPrevMonth();
        clickPrevMonth();
        clickPrevMonth();
        clickPrevMonth();
        clickPrevMonth();
        clickDay();

        expect(date).toBe('17/11/2019');
    });

    test('Input должен отображать выбраный год и месяц', () => {
        render(<Calendar selectedMonth={3} selectedYear={2020} />);

        const input = screen.getByTestId('Calendar:input');

        clickPrevMonth();

        expect(input).toHaveValue('2020-03');

        clickNextMonth();

        expect(input).toHaveValue('2020-04');

        clickPrevMonth();
        clickPrevMonth();
        clickPrevMonth();
        clickPrevMonth();
        clickPrevMonth();

        expect(input).toHaveValue('2019-11');
    });

    test('Input должен отображать выбраный год и месяц', () => {
        render(<Calendar selectedMonth={3} selectedYear={2020} />);

        const input = screen.getByTestId('Calendar:input');
        const currentDateButton = screen.getByTestId('Calendar:currentDate');

        fireEvent.click(currentDateButton);

        const month = getCurrentMonth();
        const year = getCurrentYear();

        expect(input).toHaveValue(getFormatedDate(year, month));
    });
});
