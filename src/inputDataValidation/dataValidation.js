const mongoose = require('mongoose')


/** 
 * @param {string} password: bodyData validation function.
 */

const isValid = (values) => {
    if (typeof values == "undefined" || values == null) return false;
    if (typeof values == "string" && values.trim().length > 0) return true;
};

const isValidBool = (values) => {
    if (typeof values == "undefined" || values == null) return false;
    if (typeof values == "boolean") return true;
};

const isValids = (values) => {
    if (typeof values == "undefined" || values == null) return false;
    if (typeof values == "number") return true;
};

const isValidRequestBody = function (object) {
    return Object.keys(object).length > 0;
};

// All input data validation


const isValideAdmin = (value) => {
    const { email, password } = value
    if (!isValid(password)) {
        return "email is required and should be a string";
    }
    const regexForEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regexForEmail.test(email)) {
        return `${email} should be in valid format`;
    }
    if (!isValid(password)) {
        return "password is required.";
    }

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(password)) {
        return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password)) {
        return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(password)) {
        return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(password)) {
        return "Password must contain at least one Digit.";
    }

    const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password)) {
        return "Password must contain at least one Special Symbol.";
    }

    const isValidLength = /^.{8,15}$/;
    if (!isValidLength.test(password)) {
        return "Password must be 8-15 Characters Long.";
    }
}

//Creact student data validation.

const isValideStudent = (value) => {
    let { fname, lname, subjects, number } = value

    if (!isValid(fname)) {
        return "first name is required.";
    }
    let regex = /^[a-zA-Z]*$/

    if (!regex.test(fname)) {
        return `${fname} should be in valid format`;
    }

    if (!isValid(lname)) {
        return "last name is required.";
    }

    if (!regex.test(lname)) {
        return `${lname} should be in valid format`;
    }
    if (!isValid(subjects)) {
        return "subjects is required.";
    }

    if (!regex.test(subjects)) {
        return `${subjects} should be in valid format`;
    }
    let values = ['Mathematics', 'English', 'Communication', 'Philosophy', 'Natural', 'Social'];
    let inct = values.includes(subjects)
    if (!inct) {
        return `${subjects} is invalid subject use ${value}`;
    }

    if (!isValids(number)) {
        return "number is required.";
    }

}



const isValideUpdate = (value) => {
    let { fname, lname, subjects, number } = value

    let regex = /^[a-zA-Z]*$/
    if (fname) {
        if (!isValid(fname)) return "first name is required.";
        if (!regex.test(fname)) return `${fname} should be in valid format`;
    }

    if (lname) {
        if (!isValid(lname)) return "last name is required.";
        if (!regex.test(lname)) return `${lname} should be in valid format`;
    }

    if (subjects) {
        if (!isValid(subjects)) return "subjects is required.";
        if (!regex.test(subjects)) return `${subjects} should be in valid format`;
        let values = ['Mathematics', 'English', 'Communication', 'Philosophy', 'Natural', 'Social'];
        let inct = values.includes(subjects)
        if (!inct) return `${subjects} is invalid subject use ${value}`;
    }

    if (number) {
        if (!isValids(number)) return "number is required.";
    }
}



module.exports = { isValideAdmin, isValideStudent, isValideUpdate }