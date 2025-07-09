import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MuiBasicModal from './TestModal';

describe('MuiBasicModal', () => {
  const title = 'Custom MUI Modal Title';
  const description = 'Custom description for the MUI modal.';

  beforeEach(() => {
    render(<MuiBasicModal title={title} description={description} />);
  });

  it('should not display modal content initially', () => {
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });

  it('should open the modal when "Open Modal" is clicked', async () => {
    const openButton = screen.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);


    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should close the modal when "Close" is clicked', async () => {
    const openButton = screen.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    expect(screen.getByText(title)).toBeInTheDocument();


    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);

    
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });
});
