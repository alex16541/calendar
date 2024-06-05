import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { StateSchema, StoreProvider, craeteStore } from '@/app/providers/store';

export interface RenderWithProvidersOptions {
    initialState?: Partial<StateSchema>;
}

export function renderWithProviders(component: ReactNode, options?: RenderWithProvidersOptions) {
    const store = craeteStore(options?.initialState as StateSchema);

    const Provider = ({ children }: { children: ReactNode }) => {
        return <StoreProvider store={store}>{children}</StoreProvider>;
    };

    return { store, ...render(component, { wrapper: Provider }) };
}
