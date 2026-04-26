import { create } from 'zustand'

const useCreate = create((set) => {
    return {
        count: 1,
        name: 'jai',
        increment: () => {
            set({
                count: 5
            })
        }
    }
})

export default useCreate