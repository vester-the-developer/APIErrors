import HTTPClientError from '../HTTPClientError';

describe('HTTPClientError', () => {
  it('should be an instance of Error', () => {
    expect(new HTTPClientError() instanceof Error).toBeTruthy();
  });
  it('should pass an error object back', () => {
    const testObject = { message: 'testing ' };
    expect(() => {
      throw new HTTPClientError(testObject);
    }).toThrowError(JSON.stringify(testObject));
  });
  it('should pass an error string back', () => {
    const testString = 'testing';
    expect(() => {
      throw new HTTPClientError(testString);
    }).toThrowError(testString);
  });
});
