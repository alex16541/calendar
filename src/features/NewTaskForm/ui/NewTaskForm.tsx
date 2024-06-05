import classNames from 'classnames';
import { FormEventHandler, memo, useCallback, useState } from 'react';

import { TasksActions } from '@/entity/Task';
import { selectAuthData } from '@/entity/User/model/selectors/userSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import cls from './NewTaskForm.module.scss';

interface NewTaskFormProps {
    className?: string;
    date: string;
}

const NewTaskForm = (props: NewTaskFormProps) => {
    const { className, date } = props;
    const [text, setText] = useState('');
    const user = useAppSelector(selectAuthData);
    const dispatch = useAppDispatch();

    const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
        (event) => {
            event.preventDefault();

            if (!user?.login || !text) return;

            setText('');
            dispatch(TasksActions.addTask({ username: user.login, date: date, text, id: '' }));
        },
        [user?.login, text, dispatch, date],
    );

    return (
        <form
            onSubmit={onSubmit}
            className={classNames(cls.NewTaskForm, {}, [className])}
            data-testid="NewTaskForm"
        >
            <Input
                value={text}
                className={cls.taskInput}
                placeholder="я хочу ..."
                onChange={setText}
                data-testid="NewTaskForm:input"
            />
            <Button type="submit" className={cls.addTaskButton} data-testid="NewTaskForm:submit">
                🏹
            </Button>
        </form>
    );
};

const Memoized = memo(NewTaskForm);

export { Memoized as NewTaskForm };
