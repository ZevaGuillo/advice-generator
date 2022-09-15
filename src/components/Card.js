import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import getAdvice from "../services/adviceAPI";
import icon from '../images/icon-dice.svg'
import divider from '../images/pattern-divider-desktop.svg'

function Card(){
    const [advice, setAdvice] = React.useState("Don't take it personally.");
    const [adviceId, setAdviceId] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        
        randomAdvice();
        setLoading(false)
    },[])

    async function randomAdvice(){
        const ad = await getAdvice();
        setAdvice(ad.advice);
        setAdviceId(ad.id);
    }
    
    return (
        <div className="card">
            
            {loading?
                <ClipLoader color='#00A854' loading={loading} size={50} />
            :
                <div className="advice">
                    <p className="advice-id">ADVICE #{adviceId}</p>
                    <p>"{advice}"</p>
                </div>
            }
            
            <img src={divider} alt="Divider"/>
            <div className="button" onClick={randomAdvice}>
                <img src={icon} alt="icono"/>
            </div>
        </div>
    )
}
export default Card;
