import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
    test('Рендерится', () => {
        render(<Modal>Hello world!</Modal>);

        expect(screen.getByTestId('Modal')).toBeInTheDocument();
    });
});
