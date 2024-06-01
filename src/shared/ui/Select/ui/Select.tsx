import { memo } from 'react';

import classNames from 'classnames';

import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
}

const Select = (props: SelectProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Select, {}, [className])}>
           -
        </div>
    );
};

const Memoized = memo(Select);

export { Memoized as Select };