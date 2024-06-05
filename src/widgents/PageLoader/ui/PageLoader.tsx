import classNames from 'classnames';
import { memo } from 'react';

import { Card } from '@/shared/ui/Card';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])} data-testid="PageLoader">
            <Card className={cls.loader}>Загрузка...</Card>
        </div>
    );
};

const Memoized = memo(PageLoader);

export { Memoized as PageLoader };
