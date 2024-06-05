import { render, screen } from '@testing-library/react';

import { TaskCard } from './TaskCard';

const task = { id: '1', date: '03/03/2024', text: 'Task 1', username: 'user' };

describe('TaskCard', () => {
    test('Рендерится', () => {
        render(<TaskCard task={task} />);

        expect(screen.getByTestId('Task')).toBeInTheDocument();
    });
});
