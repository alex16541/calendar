import classNames from 'classnames';
import { memo, useCallback } from 'react';

import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

const Overlay = (props: OverlayProps) => {
    const { className, onClick } = props;

    const handleClose = useCallback(() => {
        onClick?.();
    }, [onClick]);

    return (
        <div
            className={classNames(cls.Overlay, {}, [className])}
            onClick={handleClose}
            data-testid="Overlay"
        />
    );
};

const Memoized = memo(Overlay);

export { Memoized as Overlay };
