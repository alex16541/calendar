import classNames from 'classnames';
import { memo, useCallback } from 'react';

import { Task, TasksActions, selectUserTasksByDate } from '@/entity/Task';
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
    const currentTasks = useAppSelector(selectUserTasksByDate(date, username));
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

    return (
        <Modal
            className={classNames(cls.TaskListModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            classNameContent={cls.modal}
            data-testid="TaskListModal"
        >
            <span className={cls.header}>{date}</span>
            <TaskList tasks={currentTasks} onChange={toggleTask} onDelete={deleteTask} />
            <NewTaskForm date={date} />
        </Modal>
    );
};

const Memoized = memo(TaskListModal);

export { Memoized as TaskListModal };
