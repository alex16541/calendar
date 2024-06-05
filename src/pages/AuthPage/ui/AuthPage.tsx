import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '@/features/AuthForm';

import cls from './AuthPage.module.scss';

interface AuthPageProps {
    className?: string;
}

const AuthPage = (props: AuthPageProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const onLoign = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <AuthForm onLoginSuccess={onLoign} />
        </div>
    );
};

const Memoized = memo(AuthPage);

export { Memoized as AuthPage };
