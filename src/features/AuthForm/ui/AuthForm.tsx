import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';

import { UserActions } from '@/entity/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import cls from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string;
    onLoginSuccess?: () => void;
}

const AuthForm = (props: AuthFormProps) => {
    const { className, onLoginSuccess } = props;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useAppDispatch();

    const submit = useCallback(() => {
        if (login && password) {
            dispatch(UserActions.login(login));
            setError('');
            onLoginSuccess?.();
        } else {
            setError('Не верный логин или парль');
        }
    }, [dispatch, login, onLoginSuccess, password]);

    return (
        <Card className={classNames(cls.AuthForm, {}, [className])} data-testid="AuthForm">
            <h1>Авторизация</h1>
            <div className={cls.inputs}>
                <Input
                    theme="light"
                    onChange={setLogin}
                    value={login}
                    placeholder="логин (user)"
                    data-testid="AuthForm:login"
                />
                <Input
                    theme="light"
                    onChange={setPassword}
                    value={password}
                    placeholder="пароль (любой)"
                    type="password"
                    data-testid="AuthForm:password"
                />
            </div>
            <Button onClick={submit} data-testid="AuthForm:submit">
                тык
            </Button>
            {error && <span data-testid="AuthForm:error">{error}</span>}
        </Card>
    );
};

const Memoized = memo(AuthForm);

export { Memoized as AuthForm };
