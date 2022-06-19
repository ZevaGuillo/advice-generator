import React from "react";
import getAdvice from "../services/adviceAPI";

function Card(){
    const [advice, setAdvice] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        randomAdvice();
    },[])

    async function randomAdvice(){
        setLoading(false);
        const ad = await getAdvice();
        setAdvice(ad.advice);
        setLoading(true);
    }
    
    return (
        <div className="card">
            <p>{loading?advice:<span>Aqui va un spiner</span>}</p>
            <button onClick={randomAdvice}>click</button>
        </div>
    )
}
export default Card;