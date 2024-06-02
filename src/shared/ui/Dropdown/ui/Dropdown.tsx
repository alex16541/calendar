import { memo } from 'react';

import classNames from 'classnames';

import cls from './Dropdown.module.scss';

interface DropdownProps {
    className?: string;
}

const Dropdown = (props: DropdownProps) => {
    const { className } = props;

    return <div className={classNames(cls.Dropdown, {}, [className])}>-</div>;
};

const Memoized = memo(Dropdown);

export { Memoized as Dropdown };
