import { ImgHTMLAttributes } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export const AppImage = (props: AppImageProps) => {
    const { className, alt = 'image', ...otherProps } = props;

    return <img alt={alt} className={className} data-testid="AppImage" {...otherProps} />;
};
