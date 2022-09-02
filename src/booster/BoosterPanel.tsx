import { Booster } from "../data/Booster";
import "./Booster.scss"

interface BoosterPanelProps {
    booster: Booster|undefined,
    hasBooster: boolean,
    toggleBooster: () => void
}

function BoosterPanel({booster,hasBooster,toggleBooster}:BoosterPanelProps) {
    if (!booster) {
        return <div className="Booster-card">No Booster</div>
    }

    const location = `Location: ${booster.location}`;
    const onClick = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBooster();
    }
    
    return <div title={location} className="Booster-card" onClick={onClick}>
        <label>
        <input 
            type="checkbox"
            checked={hasBooster}
            /> Booster (Rating +20)
        <h2>{booster.name}</h2>
        </label>
    </div>;
}

export default BoosterPanel;