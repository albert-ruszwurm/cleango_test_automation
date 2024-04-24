export function generateRandomPhoneNumber() : string {
    let phoneNumber = '+3630';
    phoneNumber += Math.floor(100000 + Math.random() * 9000000);
    return phoneNumber;
}