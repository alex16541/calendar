import { memo } from "react";

import classNames from "classnames";

import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className } = props;

  return <div className={classNames(cls.Avatar, {}, [className])}>-</div>;
};

const Memoized = memo(Avatar);

export { Memoized as Avatar };
