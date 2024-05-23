// Import the CryptoJS library
const CryptoJS = require("crypto-js");

// Function to encrypt text using AES
function encrypt(text, passphrase) {
  return CryptoJS.AES.encrypt(text, passphrase).toString();
}

// Function to decrypt text using AES
function decrypt(encryptedText, passphrase) {
  const bytes = CryptoJS.AES.decrypt(encryptedText, passphrase);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Example usage
const plaintext = "Hello, World!";
const passphrase = "mySecretPassphrase"; // This is the encryption key

// Encrypt the plaintext
const encryptedText = encrypt(plaintext, passphrase);
console.log("Encrypted:", encryptedText);

// Decrypt the encrypted text
const decryptedText = decrypt(encryptedText, passphrase);
console.log("Decrypted:", decryptedText);
