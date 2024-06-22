export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-STATUS':
      return { ...state, status: action.status }
    case 'SET-ERROR-MESSAGE':
      return { ...state, error: action.e }
    default:
      return state
  }
}

type ActionsType = StatusType | SetAppError

export const setStatusAC = (status: RequestStatusType) => ({ type: 'SET-STATUS', status } as const)
export const setAppError = (e: string | null) => ({ type: 'SET-ERROR-MESSAGE', e } as const)

type StatusType = ReturnType<typeof setStatusAC>
type SetAppError = ReturnType<typeof setAppError>


