import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Bcrypt } from 'src/core/domain/criptography/bcrypt';

@Injectable()
export class BcryptAdapter implements Bcrypt {
  async hash(plaintext: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(plaintext, salt);
  }

  async compare(plaintext: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plaintext, hash);
  }
}
