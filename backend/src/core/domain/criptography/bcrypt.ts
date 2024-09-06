export abstract class Bcrypt {
  abstract hash(plaintext: string): Promise<string>;
  abstract compare(plaintext: string, hash: string): Promise<boolean>;
}
