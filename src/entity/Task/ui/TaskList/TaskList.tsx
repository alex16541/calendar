import classNames from 'classnames';
import { memo } from 'react';

import { Task } from '../../model/types';
import { TaskCard } from '../TaskCard/TaskCard';

import cls from './TaskList.module.scss';

interface TaskListProps {
    className?: string;
    tasks: Task[];
    onChange: (task: Task) => void;
    onDelete: (task: Task) => void;
}

const TaskList = (props: TaskListProps) => {
    const { className, tasks, onChange, onDelete } = props;

    if (tasks.length === 0)
        return (
            <div className={cls.empty}>
                🦖<span>РРР... ТУТ НИЧЕГО НЕТ РРР...</span>
            </div>
        );

    return (
        <ul className={classNames(cls.TaskList, {}, [className])}>
            {tasks.map((t) => (
                <li key={t.id}>
                    <TaskCard task={t} onChange={onChange} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

const Memoized = memo(TaskList);

export { Memoized as TaskList };
