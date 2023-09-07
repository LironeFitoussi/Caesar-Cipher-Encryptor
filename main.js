function caesarCipherEncrypt(message, rotation) {
    if (typeof message !== 'string' || typeof rotation !== 'number') {
        return 'Invalid input. Please provide a valid message and rotation.';
    }

    rotation = rotation % 26; // Ensure rotation is within the range [0, 25]

    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char.match(/[a-z]/i)) {
            const isUpperCase = char === char.toUpperCase();
            const charCode = char.charCodeAt(0);
            let encryptedCharCode;

            if (isUpperCase) {
                encryptedCharCode = ((charCode - 65 + rotation) % 26) + 65;
            } else {
                encryptedCharCode = ((charCode - 97 + rotation) % 26) + 97;
            }

            encryptedMessage += String.fromCharCode(encryptedCharCode);
        } else {
            encryptedMessage += char;
        }
    }

    return encryptedMessage;
}

document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message');
    const rotationInput = document.getElementById('rotation');
    const encryptBtn = document.getElementById('encryptBtn');
    const encryptedMessage = document.getElementById('encryptedMessage');

    encryptBtn.addEventListener('click', function () {
        const message = messageInput.value;
        const rotation = parseInt(rotationInput.value);

        const encrypted = caesarCipherEncrypt(message, rotation);
        encryptedMessage.textContent = encrypted;
    });
});
