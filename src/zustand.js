import { create } from 'zustand'

const useCreate = create((set, get) => {
    return {
        count: 1,
        name: 'jai',
        increment: () => {
            set((state) => ({
                count: state.count + 1
            }))
        },

        capital: () => {
            const { name } = get()
            set({
                name: name.charAt(0).toUpperCase() + name.slice(1)
            })
        }
    }
})

export default useCreate