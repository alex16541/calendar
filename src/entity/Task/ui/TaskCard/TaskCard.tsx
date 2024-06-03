import classNames from 'classnames';
import { memo, useCallback } from 'react';

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import { Task } from '../../model/types';

import cls from './TaskCard.module.scss';

interface TaskCardProps {
    className?: string;
    task?: Task | null;
    onChange?: (task: Task) => void;
    onDelete?: (task: Task) => void;
}

const TaskCard = (props: TaskCardProps) => {
    const { className, task, onChange, onDelete } = props;

    const handleOnChange = useCallback(() => {
        if (task) {
            onChange?.(task);
        }
    }, [task, onChange]);

    const handleOnDelete = useCallback(() => {
        if (task) {
            onDelete?.(task);
        }
    }, [task, onDelete]);

    if (!task) return null;

    return (
        <Card className={classNames(cls.TaskCard, {}, [className])}>
            <Button
                theme="clear"
                onClick={handleOnChange}
                className={classNames(cls.checkbox, { [cls.checked]: task.complited })}
            >
                {task.complited ? '✅' : '🟦'}
            </Button>
            <p>
                <b>{task.text}</b>
            </p>
            <Button className={cls.deletButton} onClick={handleOnDelete}>
                🗑️
            </Button>
        </Card>
    );
};

const Memoized = memo(TaskCard);

export { Memoized as TaskCard };
