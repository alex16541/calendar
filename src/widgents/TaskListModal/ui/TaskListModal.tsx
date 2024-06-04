import classNames from 'classnames';
import { memo, useCallback, useMemo } from 'react';

import { Task, TasksActions, selectTasksByUser } from '@/entity/Task';
import { TaskList } from '@/entity/Task/ui/TaskList/TaskList';
import { NewTaskForm } from '@/features/NewTaskForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Modal } from '@/shared/ui/Modal';

import cls from './TaskListModal.module.scss';

interface TaskListModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    date: string;
    username: string;
}

const TaskListModal = (props: TaskListModalProps) => {
    const { className, isOpen, onClose, date, username } = props;

    const tasks = useAppSelector(selectTasksByUser(username));
    const dispatch = useAppDispatch();

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

    return (
        <Modal
            className={classNames(cls.TaskListModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            classNameContent={cls.modal}
        >
            <span className={cls.header}>{date}</span>
            <TaskList tasks={currentTasks} onChange={toggleTask} onDelete={deleteTask} />
            <NewTaskForm date={date} />
        </Modal>
    );
};

const Memoized = memo(TaskListModal);

export { Memoized as TaskListModal };
