import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {
    test('Рендерится', () => {
        render(<Avatar />);
        
        expect(screen.getByTestId('Avatar')).toBeInTheDocument();
    });
});
