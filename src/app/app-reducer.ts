export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, status: action.status }
    case 'ERROR':
      return { ...state, error: action.message }
    default:
      return state
  }
}

type ActionsType = LoadingType | ErrorType

export const setLoadingAC = (status: RequestStatusType) => ({ type: 'LOADING', status } as const)
export const setErrorAC = (message: string | null) => ({ type: 'ERROR', message } as const)

type LoadingType = ReturnType<typeof setLoadingAC>
type ErrorType = ReturnType<typeof setErrorAC>

