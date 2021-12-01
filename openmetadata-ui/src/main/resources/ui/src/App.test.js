/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('./router/AppRouter', () => {
  return jest.fn().mockReturnValue(<p>AppRouter</p>);
});

jest.mock('./components/app-bar/Appbar', () => {
  return jest.fn().mockReturnValue(<p>Appbar</p>);
});

it('renders learn react link', () => {
  const { getAllByTestId } = render(<App />);
  const linkElement = getAllByTestId(/content-wrapper/i);
  linkElement.map((elm) => expect(elm).toBeInTheDocument());
});
