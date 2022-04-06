
export default function Rotation({RotationValue, setRotation}) {
    const handleInput = (e) => {
        const {value} = e.target;
        setRotation(value);
    };

    
    return (
       
        <input type="range" min="0" max="360" className="rotation" onChange={handleInput}></input>
    );
}