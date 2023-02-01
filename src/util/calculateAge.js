export function calculateAge (date) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    };
    return age;
};

export function validateAge (age) {
    if(age < 0) {
        return "Hello time traveler";
    }
    return age;
}

