/**
 * @license
 * Copyright 2022 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { stratoPreset } = require('@dynatrace/strato-components-preview/testing/jest');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...stratoPreset,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  displayName: 'widgets',
  rootDir: '../',
  roots: ['<rootDir>/actions'],
  testMatch: ['**/*.widget.test.tsx'],
  setupFiles: [
    '@dynatrace/strato-components-preview/testing', 
    '@dynatrace-sdk/user-preferences/testing',
    '@dynatrace-sdk/navigation/testing',
    '@dynatrace-sdk/app-environment/testing'
  ],
  transform: {
    '^.+\\.(t|j)sx$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/actions/tsconfig.widget.test.json',
        isolatedModules: true,
      },
    ],
  },
};
