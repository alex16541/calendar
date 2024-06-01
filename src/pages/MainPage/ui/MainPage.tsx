import { memo } from "react";

import classNames from "classnames";

import cls from "./MainPage.module.scss";

interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>Main page</div>
  );
};

const Memoized = memo(MainPage);

export { Memoized as MainPage };
