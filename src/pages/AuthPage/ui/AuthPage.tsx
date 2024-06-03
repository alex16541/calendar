import classNames from 'classnames';
import { memo } from 'react';


import { AuthForm } from '@/features/AuthForm';

import cls from './AuthPage.module.scss';

interface AuthPageProps {
    className?: string;
}

const AuthPage = (props: AuthPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <AuthForm />
        </div>
    );
};

const Memoized = memo(AuthPage);

export { Memoized as AuthPage };
