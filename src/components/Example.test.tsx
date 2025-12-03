import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Example from './Example';

describe('Example Component', () => {
  it('renders with default title', () => {
    render(<Example />);
    expect(screen.getByText("Composant d'exemple")).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<Example title="Titre personnalisé" />);
    expect(screen.getByText('Titre personnalisé')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <Example>
        <p>Contenu enfant</p>
      </Example>
    );
    expect(screen.getByText('Contenu enfant')).toBeInTheDocument();
  });
});
