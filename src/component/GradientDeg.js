
export default function GradientDeg({Deg,setDeg ,nbr}){
    
    const handleInput = (e) => {
        const {name, value} = e.target;
        // set the value of the input in GradientColorList at the index nbr with the old value
        setDeg(
            previousDeg => {
                const previousDegList = [...previousDeg];
                previousDegList[nbr] = value;
                return previousDegList;
            }
        );
    };



    return (
        <input type="range" className="gradientDeg" onChange={handleInput}></input>
    );
}