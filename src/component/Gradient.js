import {useEffect} from "react";
export default function Gradient({nbr,GradientColor,setGradient}){
    
    const handleInput = (e) => {
        const {name, value} = e.target;
        // set the value of the input in GradientColorList at the index nbr with the old value
        setGradient(
            previousGradient => {
                const previousGradientList = [...previousGradient];
                previousGradientList[nbr] = value;
                return previousGradientList;
            }
        );
    };



    return (
        <input type="color" className="gradient" id={nbr} onChange={handleInput}></input>
    );
}