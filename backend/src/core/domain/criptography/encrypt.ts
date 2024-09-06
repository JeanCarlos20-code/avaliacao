export abstract class Encrypt {
  abstract decrypt(ciphertext: string): Promise<string>;
  abstract encrypt(plaintext: string): Promise<string>;
}
