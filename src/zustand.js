import { create } from 'zustand'

const useCreate = create(() => {
    return {
        count: 1,
        name: 'jai'
    }
})

export default useCreate