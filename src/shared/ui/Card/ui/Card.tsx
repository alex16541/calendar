import classNames from 'classnames';
import { ReactNode, memo } from 'react';


import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
}

const Card = (props: CardProps) => {
    const { className, children } = props;

    return <div className={classNames(cls.Card, {}, [className])}>{children}</div>;
};

const Memoized = memo(Card);

export { Memoized as Card };
