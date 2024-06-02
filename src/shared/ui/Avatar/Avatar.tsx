import { CSSProperties, useMemo } from 'react';

import cls from './Avatar.module.scss';
import classNames from 'classnames';
import { AppImage } from '../AppImage';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt: string;
    rounded?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, alt, size = 30, rounded = false } = props;

    const avatarStyle = useMemo<CSSProperties>(
        () => ({
            height: size,
            width: size,
        }),
        [size],
    );

    return (
        <AppImage
            alt={alt}
            className={classNames(cls.Avatar, { [cls.rounded]: rounded }, [className])}
            src={src}
            style={avatarStyle}
        />
    );
};
