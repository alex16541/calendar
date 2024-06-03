import classNames from 'classnames';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Task, TasksActions, selectTasksByUser } from '@/entity/Task';
import { TaskList } from '@/entity/Task/ui/TaskList/TaskList';
import { UserActions } from '@/entity/User';
import { selectUser } from '@/entity/User/model/selectors/userSelectors';
import { NewTaskForm } from '@/features/NewTaskForm';
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
    const tasks = useAppSelector(selectTasksByUser(user.authData?.login));
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [date, setDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Таймаут просто чтобы лоадер было видно :D
        setTimeout(() => {
            dispatch(UserActions.init());
            dispatch(TasksActions.init());
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

    const toggleTask = useCallback(
        (task: Task) => {
            dispatch(TasksActions.toggleTask(task));
        },
        [dispatch],
    );

    const deleteTask = useCallback(
        (task: Task) => {
            dispatch(TasksActions.deleteTask(task.id));
        },
        [dispatch],
    );

    const currentTasks = useMemo(() => {
        return tasks.filter((t) => t.date === date);
    }, [date, tasks]);

    const content = (
        <main className={cls.content}>
            <Card className={cls.wrapper}>
                <Calendar onDayClick={openModal} />
            </Card>

            <Modal isOpen={isOpen} onClose={closeModal} classNameContent={cls.modal}>
                <div className={cls.header}>{date}</div>
                <TaskList tasks={currentTasks} onChange={toggleTask} onDelete={deleteTask} />
                <NewTaskForm date={date} />
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
