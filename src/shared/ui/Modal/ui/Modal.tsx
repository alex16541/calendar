import { memo } from "react";

import classNames from "classnames";

import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
}

const Modal = (props: ModalProps) => {
  const { className } = props;

  return <div className={classNames(cls.Modal, {}, [className])}>-</div>;
};

const Memoized = memo(Modal);

export { Memoized as Modal };
