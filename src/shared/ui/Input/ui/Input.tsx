import { memo } from "react";

import classNames from "classnames";

import cls from "./Input.module.scss";

interface InputProps {
  className?: string;
}

const Input = (props: InputProps) => {
  const { className } = props;

  return <div className={classNames(cls.Input, {}, [className])}>-</div>;
};

const Memoized = memo(Input);

export { Memoized as Input };
