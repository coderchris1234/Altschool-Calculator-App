import { createContext, useState } from "react"



export const CalContext = createContext()
const CalcProvider = ({children}) =>{
    const [Calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const providerValue = {
        Calc, setCalc
    }
    return(
        <CalContext.Provider value={providerValue}>
            {children}
        </CalContext.Provider>
    )
}


export default CalcProvider

 