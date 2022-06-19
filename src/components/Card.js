import React from "react";
import getAdvice from "../services/adviceAPI";
import icon from '../images/icon-dice.svg'
import divider from '../images/pattern-divider-desktop.svg'

function Card(){
    const [advice, setAdvice] = React.useState('');
    const [adviceId, setAdviceId] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        
        setLoading(true);
        randomAdvice();
    },[])

    async function randomAdvice(){
        const ad = await getAdvice();
        setAdvice(ad.advice);
        setAdviceId(ad.id);
    }
    
    return (
        <div className="card">
            
            {loading?
                <div className="advice">
                    <p className="advice-id">ADVICE #{adviceId}</p>
                    <p>"{advice}"</p>
                </div>
            :
                <span>Aqui va un spiner</span>}
            
            <img src={divider} alt="Divider"/>
            <div className="button" onClick={randomAdvice}>
                <img src={icon} alt="icono"/>
            </div>
        </div>
    )
}
export default Card;