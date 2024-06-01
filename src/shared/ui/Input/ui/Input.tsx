import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from "react";

import classNames from "classnames";

import cls from "./Input.module.scss";

type InputBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends InputBaseProps {
  className?: string;
  theme?: "dark" | "light";
  onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const { className, theme = "dark", onChange, ...inputProps } = props;

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <input
      className={classNames(cls.Input, {}, [className, cls[theme]])}
      onChange={handleOnChange}
      {...inputProps}
    />
  );
};

const Memoized = memo(Input);

export { Memoized as Input };
