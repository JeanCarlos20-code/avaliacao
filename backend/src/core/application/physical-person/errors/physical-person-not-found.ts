import { ApplicationError } from 'src/core/errors/ApplicationError';

export class PhysicalPersonNotFound extends ApplicationError {
  constructor() {
    super('Provided criteria not found');
  }
}
