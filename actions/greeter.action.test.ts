/**
 * @jest-environment @dynatrace/runtime-simulator/lib/test-environment
 */

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import greeter from './greeter.action';

enableFetchMocks();

describe('greeter', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should produce expected results', async () => {
    fetchMock.mockResponse(
      JSON.stringify({
        schemaId: 'greeter-connection',
        value: {
          name: 'My Connection',
          token: 'abc123',
          url: 'https://foo.bar',
        },
        summary: 'My Connection',
      }),
    );
    const result = await greeter({ name: 'Mark', connectionId: 'greeter-connection-object-id' });
    expect(result).toEqual({ message: 'Hello Mark!' });
    expect.assertions(1);
  });
});
