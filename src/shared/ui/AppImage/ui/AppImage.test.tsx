import { render, screen } from '@testing-library/react';

import { AppImage } from './AppImage';

describe('AppImage', () => {
    test('Рендерится', () => {
        render(<AppImage />);
        
        expect(screen.getByTestId('AppImage')).toBeInTheDocument();
    });
});
