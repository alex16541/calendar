import { memo, useEffect, useState } from 'react';

import classNames from 'classnames';

import cls from './MainPage.module.scss';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgents/Header';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectUser } from '@/entity/User/model/selectors/userSelectors';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { UserActions } from '@/entity/User';
import { PageLoader } from '@/widgents/PageLoader';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const user = useAppSelector(selectUser);
    const content = <h1>MainPage</h1>;
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Таймаут просто чтобы лоадер было видно :D
        setTimeout(() => {
            dispatch(UserActions.init());
            setIsLoading(false);
        }, 300);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <PageLoader />;

    if (!user.authData) return <Navigate to="/auth" />;

    return (
        <MainLayout
            className={classNames(cls.MainPage, {}, [className])}
            header={<Header user={user} />}
            content={content}
        />
    );
};

const Memoized = memo(MainPage);

export { Memoized as MainPage };
