/**
 * Handles an error by logging it to the console and if the error is not an instance of Error,
 * it wraps it in a new Error.
 *
 * @param _error The error to handle
 * @param _errorSetter The function to set the error
 * @returns The error
 */
export const handleError = (_error: unknown, _errorSetter: (_err: Error) => void) => {
  console.error(_error);

  if (_error instanceof Error) {
    _errorSetter(_error);
  } else {
    _errorSetter(new Error('Unknown error occurred'));
  }

  return _error instanceof Error ? _error : new Error('Unknown error occurred');
};
