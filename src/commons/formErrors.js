import {ErrorsEnum} from "../constants/errorEnum";

export const getErrorMessage = (error) => {
    switch (error.type) {
        case "required":
            return ErrorsEnum.REQUIRED_FIELD;
        case "maxLength":
            return ErrorsEnum.MAX_LENGTH;
        default:
            return ErrorsEnum.DEFAULT_MESSAGE;
    }
}