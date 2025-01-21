export default class APIErrorResponse extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}
