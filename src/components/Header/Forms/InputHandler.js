import { useState } from 'react'

export const InputHandler = (initValue) => {
    const [ value,setValue ] = useState(initValue)

    return{
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value)
            }
        }
    }
}