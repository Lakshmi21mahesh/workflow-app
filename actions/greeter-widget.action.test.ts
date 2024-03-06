/**
 * @jest-environment @dynatrace/runtime-simulator/lib/test-environment
 */

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import actionsGreeterWidgetTsx from './actions-greeter-widget-tsx.action';

enableFetchMocks();

describe('actions-greeter-widget-tsx', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should produce expected results', async () => {
    fetchMock.mockResponse(
      JSON.stringify({
        schemaId: 'actions-greeter-widget-tsx-connection',
        value: {
          name: 'My Connection',
          token: 'abc123',
          url: 'https://foo.bar',
        },
        summary: 'My Connection',
      }),
    );
    const result = await actionsGreeterWidgetTsx({ name: 'Mark', connectionId: 'actions-greeter-widget-tsx-connection-object-id' });
    expect(result).toEqual({ message: 'Hello Mark!' });
    expect.assertions(1);
  });
});
