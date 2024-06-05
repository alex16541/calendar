import { render, screen } from '@testing-library/react';

import { PageLoader } from './PageLoader';

describe('PageLoader', () => {
    test('Рендерится', () => {
        render(<PageLoader />);
        
        expect(screen.getByTestId('PageLoader')).toBeInTheDocument();
    });
});
