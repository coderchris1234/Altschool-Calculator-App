import { useContext } from "react"
import { CalContext } from "../context/calcContext"


const Screen = () =>{
    const  { Calc } = useContext(CalContext)
    return(
        <div className="screen" max={70} mode="single">{Calc.num ? Calc.num : Calc.res}</div>
    )
}

export default Screen