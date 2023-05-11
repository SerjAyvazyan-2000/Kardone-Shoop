import {useState} from "react";

export const useFetching = (callback) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetching() {
        try {
            setLoading(true)
            await callback()
        } catch (e) {
           setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    return [fetching,loading,error]

}