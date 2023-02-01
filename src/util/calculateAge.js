const DISPLAY_MONTHS = process.env.REACT_APP_DISPLAY_MONTHS || false;

export function calculateAge (date) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    };
    console.log(DISPLAY_MONTHS)
    if (DISPLAY_MONTHS) {
        return age = `${age} years and ${month < 0 ? 12 + month : month} months`
        }
    else {
        return age;
    }
};

export function validateAge (age) {
    if(age < 0) {
        return "Hello time traveler";
    }
    return age;
}

