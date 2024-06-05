import classNames from 'classnames';
import { ReactNode } from 'react';

import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
}

export const Card = (props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} data-testid="Card" {...otherProps}>
            {children}
        </div>
    );
};
