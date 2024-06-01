import { memo } from 'react';

import classNames from 'classnames';

import cls from './Calendar.module.scss';

interface CalendarProps {
    className?: string;
}

const Calendar = (props: CalendarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Calendar, {}, [className])}>
           -
        </div>
    );
};

const Memoized = memo(Calendar);

export { Memoized as Calendar };