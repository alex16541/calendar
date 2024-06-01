import { memo } from "react";

import classNames from "classnames";

import cls from "./Button.module.scss";

interface ButtonProps {
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { className } = props;

  return (
    <button className={classNames(cls.Button, {}, [className])}>тык</button>
  );
};

const Memoized = memo(Button);

export { Memoized as Button };
