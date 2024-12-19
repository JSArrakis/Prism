import APIErrorResponse from '../api/APIErrorResponse';

export const SECONDS = 1000;
export const MINUTES = 60 * SECONDS;
export const HOURS = 60 * MINUTES;

const retryableStatusCodes = [408, 500, 502, 503, 504];

/** Determine if a react-query request can be retried */
export function retry(failureCount: number, error: Error) {
  if (
    error instanceof APIErrorResponse &&
    !retryableStatusCodes.includes(error.status)
  ) {
    return false;
  }
  return failureCount < 3;
}
