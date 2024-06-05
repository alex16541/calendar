import { fireEvent, screen, within } from '@testing-library/react';

import { selectTaskById } from '@/entity/Task';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';

import { TaskListModal } from './TaskListModal';

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

describe('TaskListModal', () => {
    const getTasks = () => screen.getAllByTestId('Task');

    test('Рендерится', () => {
        renderWithProviders(<TaskListModal date={date} username="user" />, { initialState });

        expect(screen.getByTestId('TaskListModal')).toBeInTheDocument();
    });

    test('Выводит таски', () => {
        renderWithProviders(<TaskListModal date={date} username="user" />, { initialState });

        expect(getTasks().length).toBe(5);
    });

    test('Удаляет таски', () => {
        renderWithProviders(<TaskListModal date={date} username="user" />, { initialState });

        fireEvent.click(within(getTasks()[0]).getByTestId('Task:delete'));

        expect(getTasks().length).toBe(4);
    });

    test('Меняет статус таски', () => {
        const { store } = renderWithProviders(<TaskListModal date={date} username="user" />, {
            initialState,
        });

        fireEvent.click(within(getTasks()[0]).getByTestId('Task:check'));

        const firstTask = selectTaskById(initialState.tasks.data[0].id)(store.getState());

        expect(firstTask?.complited).toBeTruthy();
    });
});
