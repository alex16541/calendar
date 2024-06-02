import { memo } from 'react';

import classNames from 'classnames';

import cls from './PageLoader.module.scss';
import { Card } from '@/shared/ui/Card';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Card className={cls.loader}>Загрузка...</Card>
        </div>
    );
};

const Memoized = memo(PageLoader);

export { Memoized as PageLoader };
