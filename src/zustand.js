import { create } from 'zustand'

const useCreate = create((set) => {
    return {
        count: 1,
        name: 'jai',
        increment: () => {
            set((state) => ({
                count: state.count + 1
            }))
        }
    }
})

export default useCreate