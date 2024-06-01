import { memo } from "react";

import classNames from "classnames";

import cls from "./AuthPage.module.scss";
import { AuthForm } from "@/features/AuthForm";

interface AuthPageProps {
  className?: string;
}

const AuthPage = (props: AuthPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.AuthPage, {}, [className])}>
      <AuthForm />
    </div>
  );
};

const Memoized = memo(AuthPage);

export { Memoized as AuthPage };
