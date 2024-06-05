import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/tests/renderWithProviders';

import { Header } from './Header';

const date = '03/05/2024';
const username = 'user';

const initialState = {
    user: {
        authData: {
            _inited: true,
            login: username,
        },
    },
    tasks: {
        _inited: true,
        data: [
            { id: '1', date, text: 'Task 1', username },
            { id: '2', date, text: 'Task 2', username },
            { id: '3', date, text: 'Task 3', username },
            { id: '4', date, text: 'Task 4', username },
            { id: '5', date, text: 'Task 5', username },
        ],
    },
};

describe('Header', () => {
    test('Рендерится', () => {
        renderWithProviders(<Header />, { initialState });

        expect(screen.getByTestId('Header')).toBeInTheDocument();
    });
});
