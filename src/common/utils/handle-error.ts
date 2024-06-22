import { Dispatch } from "redux";
import { isAxiosError } from "axios";
import { setAppError, setStatusAC } from "../../app/app-reducer";

export type ErrorType = {
    errorMessages: { field: string, message: string }[]
}

export const handleError = (e: unknown, dispatch: Dispatch) => {
    let errorMessage: string
    if (isAxiosError<ErrorType>(e)) {
        errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
    } else {
        errorMessage = (e as Error).message
    }
    dispatch(setAppError(errorMessage))
}
