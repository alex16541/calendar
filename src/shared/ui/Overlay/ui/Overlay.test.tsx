import { render, screen } from '@testing-library/react';

import { Overlay } from './Overlay';

describe('Overlay', () => {
    test('Рендерится', () => {
        render(<Overlay />);
        
        expect(screen.getByTestId('Overlay')).toBeInTheDocument();
    });
});
