export function validateEmail(data) {
    let validate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data);
    return validate;
}

export function validatePhoneNumber(data) {
    let validate = /^[0]\d{10}$/g.test(data);
    return validate;
}
