import classNames from 'classnames';
import { memo, useCallback } from 'react';

import { UserActions, UserSchema } from '@/entity/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
    user: UserSchema;
}

const Header = (props: HeaderProps) => {
    const { className, user } = props;
    const dispath = useAppDispatch();

    const logout = useCallback(() => {
        dispath(UserActions.logout());
    }, [dispath]);

    return (
        <nav className={classNames(cls.Header, {}, [className])}>
            <Card className={cls.container}>
                <div className={cls.User}>
                    {user.authData?.avatar && <Avatar src={user.authData.avatar} alt={user.authData.login} />}
                    {user.authData?.login && <span className={cls.User__name}>{user.authData.login}</span>}
                </div>
                <span className={cls.Time}>{new Date().toLocaleDateString()}</span>
                <Button className={cls.Logout} onClick={logout}>
                    Выйти
                </Button>
            </Card>
        </nav>
    );
};

const Memoized = memo(Header);

export { Memoized as Header };
