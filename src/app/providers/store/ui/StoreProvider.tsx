import { ReactElement } from "react";
import { Provider } from "react-redux";

import store from "../Config/store";

interface StoreProviderProps {
  children: ReactElement;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};
