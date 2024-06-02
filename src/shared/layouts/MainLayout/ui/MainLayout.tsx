import { ReactNode, memo } from 'react';

import classNames from 'classnames';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header?: ReactNode;
    content?: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
    const { className, header, content } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.header}>{header}</div>
            <div className={cls.content}>{content}</div>
        </div>
    );
};

const Memoized = memo(MainLayout);

export { Memoized as MainLayout };
