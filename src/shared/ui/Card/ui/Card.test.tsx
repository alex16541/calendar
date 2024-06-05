import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('<Card />', () => {
    test('Рендерится', async () => {
        render(<Card />);

        const card = screen.getByTestId('Card');

        expect(card).toBeInTheDocument();
    });
});
