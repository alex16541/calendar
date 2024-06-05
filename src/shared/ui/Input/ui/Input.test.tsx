import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
    test('Рендерится', () => {
        render(<Input />);

        expect(screen.getByTestId('Input')).toBeInTheDocument();
    });
});
