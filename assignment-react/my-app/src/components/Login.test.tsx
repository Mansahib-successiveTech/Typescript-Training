import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { AuthContextProvider } from '../context/AuthContext';

const renderWithProvider = () =>
  render(
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );

describe('Login Component', () => {
  it('renders the login form initially', () => {
    renderWithProvider();

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/please login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('logs in successfully with correct credentials', async () => {
    renderWithProvider();

    await userEvent.type(screen.getByLabelText(/username/i), 'mansahib');
    await userEvent.type(screen.getByLabelText(/password/i), '123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/user logged in: mansahib/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome, mansahib/i)).toBeInTheDocument();
  });

  it('does NOT log in with incorrect credentials', async () => {
    renderWithProvider();

    await userEvent.type(screen.getByLabelText(/username/i), 'wronguser');
    await userEvent.type(screen.getByLabelText(/password/i), '000');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/please login/i)).toBeInTheDocument();
    expect(screen.queryByText(/user logged in:/i)).not.toBeInTheDocument();
  });

});
