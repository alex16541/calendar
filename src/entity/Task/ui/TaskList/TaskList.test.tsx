import { render, screen } from '@testing-library/react';

import { TaskList } from './TaskList';

const task = { id: '1', date: '03/03/2024', text: 'Task 1', username: 'user' };

describe('TaskList', () => {
    test('Рендерится', () => {
        render(<TaskList tasks={[task]} />);

        expect(screen.getByTestId('TaskList')).toBeInTheDocument();
    });
});
