import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title}  --travlog`
    },[title])
}
export default useTitle;