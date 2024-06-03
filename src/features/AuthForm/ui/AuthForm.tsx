import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserActions } from '@/entity/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import cls from './AuthForm.module.scss';



interface AuthFormProps {
    className?: string;
}

const AuthForm = (props: AuthFormProps) => {
    const { className } = props;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const submit = useCallback(() => {
        if (login && password) {
            dispatch(UserActions.login(login));
            setError('');
            navigate('/');
        } else {
            setError('Не верный логин или парль');
        }
    }, [dispatch, login, navigate, password]);

    return (
        <Card className={classNames(cls.AuthForm, {}, [className])}>
            <h1>Авторизация</h1>
            <div className={cls.inputs}>
                <Input theme="light" onChange={setLogin} value={login} />
                <Input theme="light" onChange={setPassword} value={password} type="password" />
            </div>
            <Button onClick={submit}>тык</Button>
            {error && <span>{error}</span>}
        </Card>
    );
};

const Memoized = memo(AuthForm);

export { Memoized as AuthForm };
