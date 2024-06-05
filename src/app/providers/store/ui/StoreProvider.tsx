import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppStore } from '../Config/types';

interface StoreProviderProps {
    children: ReactNode;
    store: AppStore;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, store } = props;

    return <Provider store={store}>{children}</Provider>;
};
