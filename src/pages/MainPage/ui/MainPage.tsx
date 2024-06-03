import classNames from 'classnames';
import { memo, useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { UserActions } from '@/entity/User';
import { selectUser } from '@/entity/User/model/selectors/userSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Calendar } from '@/shared/ui/Calendar';
import { Card } from '@/shared/ui/Card';
import { Modal } from '@/shared/ui/Modal';
import { Header } from '@/widgents/Header';
import { PageLoader } from '@/widgents/PageLoader';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const [date, setDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Таймаут просто чтобы лоадер было видно :D
        setTimeout(() => {
            dispatch(UserActions.init());
            setIsLoading(false);
        }, 300);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openModal = useCallback((date: string) => {
        setDate(date);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const content = (
        <main className={cls.content}>
            <Card className={cls.wrapper}>
                <Calendar onDayClick={openModal} />
            </Card>
            <Modal isOpen={isOpen} onClose={closeModal} classNameContent={cls.modalContent}>
                <div className={cls.header}>{date}</div>
            </Modal>
        </main>
    );

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
