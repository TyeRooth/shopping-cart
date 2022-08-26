import { cleanup, getAllByTestId, getByRole, getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';

afterEach(cleanup);
  
it('cart amount in document', () =>{
  render (<App />);
  const addToCart = screen.getByRole("button", { name: "cart-amount"});
  expect(addToCart).toBeInTheDocument();
  expect(addToCart.textContent).toBe('0');
});

it('cart will not display any items when no items are added to cart', () => {
  render(<App />);
  const items = screen.queryAllByTestId('item');
  expect(items.length).toBe(0);
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

it('cart visibility can be toggled', () => {
  render(<App />);
  const cartButton = screen.getByRole("button", { name: "cart-amount"});
  const closeCartButton = screen.getByRole("button", { name: 'Close'});
  const cart = screen.getByTestId('cart');
  act(() => {
    userEvent.click(cartButton);
  });
  expect(cart.className).toBe('cart-visible');
  act(() => {
    userEvent.click(closeCartButton);
  });
  expect(cart.className).toBe('cart-hidden');
});

it('cart will only show items with a quantity over zero', () => {
  render(<App />);
  const coinsLink = screen.getByRole("link", { name: "Coins" });
  act(() => {
    userEvent.click(coinsLink);
  });
  const addToCart = screen.getAllByRole("button", { name: "Add to Cart" });
  act(() => {
    userEvent.click(addToCart[0]);
    userEvent.click(addToCart[1]);
    userEvent.click(addToCart[2]);
  });
  const items = screen.getAllByTestId('item');
  expect(items.length).toBe(3);
});

it('can increment quantity of an item in cart', () => {
  render(<App />);
  const incrementButtons = screen.getAllByRole("button", { name: "+" });
  const cartAmount = screen.getByRole("button", { name: "cart-amount"});
  act(() => {
    userEvent.click(incrementButtons[0]);
  });
  expect(cartAmount.textContent).toBe('5');
});

it('can decrement quantity of an item in cart', () => {
  render(<App />);
  const decrementButtons = screen.getAllByRole("button", { name: "-"});
  const cartAmount = screen.getByRole("button", { name: "cart-amount"});
  act(() => {
    userEvent.click(decrementButtons[0]);
    userEvent.click(decrementButtons[0]);
    userEvent.click(decrementButtons[0]);
    userEvent.click(decrementButtons[1]);
    userEvent.click(decrementButtons[2]);
  });
  expect(cartAmount.textContent).toBe('0');
});

//Tests need to be maintained in this order otherwise they will fail
//Consequently, I am sure this is a bad testing pattern
//I could not find a way to reset state of components between tests
