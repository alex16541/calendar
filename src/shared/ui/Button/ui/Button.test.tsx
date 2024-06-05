import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('Рендерится', () => {
        render(<Button />);
        
        expect(screen.getByTestId('Button')).toBeInTheDocument();
    });
});
