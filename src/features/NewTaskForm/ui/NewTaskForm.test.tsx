import { fireEvent, screen } from '@testing-library/react';

import { selectUserTasksByDate } from '@/entity/Task';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';

import { NewTaskForm } from './NewTaskForm';

const date = '03/03/2024';
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
        data: [{ id: '1', date, text: 'Task 1', username }],
    },
};

describe('NewTaskForm', () => {
    test('Рендерится', () => {
        renderWithProviders(<NewTaskForm date={date} />, { initialState });

        expect(screen.getByTestId('NewTaskForm')).toBeInTheDocument();
    });

    test('Добавляет таску', async () => {
        const { store } = renderWithProviders(<NewTaskForm date={date} />, { initialState });

        const input = screen.getByTestId('NewTaskForm:input');
        const addButton = screen.getByTestId('NewTaskForm:submit');

        fireEvent.change(input, { target: { value: 'New task' } });
        fireEvent.click(addButton);

        expect(selectUserTasksByDate(date, username)(store.getState()).length).toBe(2);
    });
});
