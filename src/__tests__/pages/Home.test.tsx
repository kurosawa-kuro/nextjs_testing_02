import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('<Home />', () => {

  test('renders list of posts', async () => {
    render(<Home />);

    const postTitle1 = await screen.findByText('Post 1');
    const postTitle2 = await screen.findByText('Post 2');

    expect(postTitle1.textContent).toBe('Post 1');
    expect(postTitle2.textContent).toBe('Post 2');
  });
});