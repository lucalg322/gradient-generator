import Gradient from "../component/Gradient";
import GradientDeg from "../component/GradientDeg";
import Color from "../component/Color";
import Rotation from "../component/Rotation";
import {useState} from "react";

export default function GradientGroup(){

    const [GradientColorList, setGradientColorList] = useState(['#000000','#000000','#000000']);
    const [GradientDegree, setGradientColorDeg] = useState(['25','50','75']);
    const [RotationValue, setRotation] = useState('90');
    // const [Color, setColor] = useState(['0','0','0','0','0','0','0']);
    return (
        <div className="gradient-group">
            <Gradient nbr={0} GradientColor={GradientColorList} setGradient={setGradientColorList}/>
            <GradientDeg nbr={0} Deg={GradientDegree} setDeg={setGradientColorDeg}/>
            <br></br>
            <Gradient nbr={1} GradientColor={GradientColorList} setGradient={setGradientColorList}/>
            <GradientDeg nbr={1} Deg={GradientDegree} setDeg={setGradientColorDeg}/>
            <br></br>
            <Gradient nbr={2} GradientColor={GradientColorList} setGradient={setGradientColorList}/>
            <GradientDeg nbr={2} Deg={GradientDegree} setDeg={setGradientColorDeg}/>
            <br></br>
            
            <div>{GradientColorList[0]}</div>
            <div>{GradientDegree[0]}</div>
            <br></br>

            <div>{GradientColorList[1]}</div>
            <div>{GradientDegree[1]}</div>
            <br></br>

            <div>{GradientColorList[2]}</div>
            <div>{GradientDegree[2]}</div>
            <br></br>

            <div><Rotation RotationValue={RotationValue} setRotation={setRotation}/></div>
            <div>{RotationValue}</div>


            <Color Color={GradientColorList}  ColorDegree={GradientDegree} Rotation={RotationValue}/>

            
            

        </div>
    );
}