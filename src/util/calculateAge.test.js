import {test, expect} from '@jest/globals';
import {calculateAge} from './calculateAge.js';

const testCases = [  
    { dateOfBirth: "1998-01-01", expectedAge: 25 },
    { dateOfBirth: "2000-02-29", expectedAge: 22 }, 
    { dateOfBirth: "2023-02-01", expectedAge: 0 }, 
    { dateOfBirth: "2030-01-01", expectedAge: -7 },
    { dateOfBirth: "1990-12-19", expectedAge: 32 },];

test.each(testCases)("calculates age correctly for %o", (tc) => {
    expect(calculateAge(tc.dateOfBirth)).toBe(tc.expectedAge);
});

