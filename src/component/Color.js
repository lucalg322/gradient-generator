
export default function Color({Color, ColorDegree,Rotation}) {

    
    return (
        <div className="color-group">
            <div>background: linear-gradient({Rotation}deg, {Color[0]} {ColorDegree[0]}%, {Color[1]} {ColorDegree[1]}%, {Color[2]} {ColorDegree[2]}%);</div>
            {/* show this css in div */}
            <div className="color-group-box"></div>
            <style>{`
                .color-group-box{
                    background: linear-gradient(${Rotation}deg, ${Color[0]} ${ColorDegree[0]}%, ${Color[1]} ${ColorDegree[1]}%, ${Color[2]} ${ColorDegree[2]}%);
                    width: 80%;
                    height: 200px;
                    margin: 0 auto;

                }
            `}</style>
            

        </div>
        
    );
}