import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const useDarkText = (path: string) => {

    const [ darkText, setDarkText ] = useState(false)

    const pathname = usePathname()

    useEffect(()=>{

        if(pathname === path){
            setDarkText(true)
        }

  }, [pathname])

  return { darkText }
}

export default useDarkText