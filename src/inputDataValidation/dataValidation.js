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
    let { userName, email, password } = value

    if (!isValid(userName)) {
        return "user name is required.";
    }
    let regex = /^[a-zA-Z]+ [a-zA-Z]+$/

    if (!regex.test(userName)) {
        return `${userName} should be in valid format`;
    }

    if (!isValid(email)) {
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



const isValideUpdate = (value) => {
    let { userName, email, password } = value

    if (userName) {
        if (!isValid(userName)) {
            return "user name is required.";
        }
        let regex = /^[a-zA-Z]+ [a-zA-Z]+$/

        if (!regex.test(userName)) {
            return `${userName} should be in valid format`;
        }
    }

    if (email) {
        if (!isValid(email)) {
            return "email is required and should be a string";
        }
        const regexForEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!regexForEmail.test(email)) {
            return `${email} should be in valid format`;
        }
    }

    if (password) {
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

}



module.exports = { isValideAdmin, isValideStudent, isValideUpdate }