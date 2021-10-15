import * as React from 'react'

type State<T> = Partial<T> | ((arg: T) => Partial<T>)
function useSetState<T>(initState: T): [T, (arg: State<T>) => void] {
    const [state, set] = React.useState(initState)
    const setState = React.useCallback(
        (params: State<T>) => {
            set((prev) => {
                const newState = typeof params === 'function' ? params(prev) : params
                return { ...prev, ...newState }
            })
        },
        [set],
    )
    return [state, setState]
}
export { useSetState }
