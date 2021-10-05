import {getErrorMessage} from "./formErrors";
import {ErrorsEnum} from "../constants/errorEnum";

describe('Form errors', () => {
    it('should test get required message', () => {
        const error = {
            type: 'required'
        }
        expect(getErrorMessage(error)).toEqual(ErrorsEnum.REQUIRED_FIELD)
    })
    it('should  test get max length message', () => {
        const error = {
            type: 'maxLength'
        }
        expect(getErrorMessage(error)).toEqual(ErrorsEnum.MAX_LENGTH)
    })
    it('should  test get default message', () => {
        const error = {
            type: 'unknown'
        }
        expect(getErrorMessage(error)).toEqual(ErrorsEnum.DEFAULT_MESSAGE)
    })
})