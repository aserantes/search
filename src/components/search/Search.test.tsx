import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Search } from './Search';

const setup = () => {
  const renderer = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const input = renderer.getByLabelText(
    'searchTermTextInput'
  ) as HTMLInputElement;
  const select = renderer.getByLabelText(
    'searchEngineSelect'
  ) as HTMLSelectElement;
  const submit = renderer.getByLabelText('searchSubmit') as HTMLButtonElement;
  return {
    input,
    select,
    submit,
    ...renderer,
  };
};

test('Search Term Text Input should exist', () => {
  const { input } = setup();
  expect(input).toBeTruthy();
});

test('Search Engine Select should exist', () => {
  const { select } = setup();
  expect(select).toBeTruthy();
});

test('Search Submit Button should exist', () => {
  const { submit } = setup();
  expect(submit).toBeTruthy();
});

test('Search Term Text Input should be initialized with an empty string', () => {
  const { input } = setup();
  expect(input.value).toBe('');
});

test('Search Engine Select to use should be initialized as "Google"', () => {
  const { select } = setup();
  expect(select.value).toBe('Google');
});

test('Search Term Text Input should update value on change', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'something' } });
  expect(input.value).toBe('something');
  fireEvent.change(input, { target: { value: '' } });
  expect(input.value).toBe('');
});

test('Search Engine Select should update value on change', () => {
  const { select } = setup();
  fireEvent.change(select, { target: { value: 'Bing' } });
  expect(select.value).toBe('Bing');
  fireEvent.change(select, { target: { value: 'Both' } });
  expect(select.value).toBe('Both');
  fireEvent.change(select, { target: { value: 'Google' } });
  expect(select.value).toBe('Google');
});
