import { fireEvent, screen } from '@testing-library/react';

import { selectAuthData } from '@/entity/User/model/selectors/userSelectors';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';

import { AuthForm } from './AuthForm';

const renderComponent = () => {
    return renderWithProviders(<AuthForm />);
};

describe('AuthForm', () => {
    test('Рендерится', () => {
        renderComponent();

        expect(screen.getByTestId('AuthForm')).toBeInTheDocument();
    });

    test('Логинится', () => {
        const { store } = renderComponent();

        const login = screen.getByTestId('AuthForm:login');
        const password = screen.getByTestId('AuthForm:password');
        const submit = screen.getByTestId('AuthForm:submit');

        fireEvent.change(login, { target: { value: 'user' } });
        fireEvent.change(password, { target: { value: '123' } });
        fireEvent.click(submit);

        expect(selectAuthData(store.getState())).toBeTruthy();
    });

    test('Выводит ошибку если нет логина или пароля', () => {
        renderComponent();

        const submit = screen.getByTestId('AuthForm:submit');
        fireEvent.click(submit);

        const error = screen.getByTestId('AuthForm:error');

        expect(error).toBeInTheDocument();
    });
});
