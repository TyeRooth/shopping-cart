import { getByRole, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';

describe("Coin", () => {
  
  it('cart amount in document', () =>{
    render (<App />);
    const addToCart = screen.getByRole("button", { name: "cart-amount"});
    expect(addToCart).toBeInTheDocument();
    expect(addToCart.textContent).toBe('0');
  });

  it('cart amount increments by one on Coins page', () => {
    render (<App />);
    const cartAmount = screen.getByRole("button", { name: "cart-amount"});
    const coinsLink = screen.getByRole("link", { name: "Coins" });
    act(() => {
      userEvent.click(coinsLink);
    });
    const addToCart = screen.getAllByRole("button", { name: "Add to Cart" });
    expect(addToCart[0]).toBeInTheDocument();
    act(() => {
      userEvent.click(addToCart[0]);
    });
    expect(cartAmount.textContent).toBe('1');
  })
})
