import "./Bonus.scss"
interface BonusPanelProps {
    cost:number
    time:number
}
function BonusPanel({time,cost}:BonusPanelProps) {
    return <div className="Bonuses">
        <Bonus
            label="Time"
            amount={time}
        />
        <Bonus
            label="Cost"
            amount={cost}
        />
    </div>
}

interface BonusProps {
    label:string,
    amount:number
}
function Bonus({label,amount}:BonusProps) {
    return <span className="Bonuses-bonus">{label}: <span className={amount > 0 ? "positive" : amount < 0 ? "negative": ""}>{amount >= 0 ? "+" : ""}{amount}%</span></span>
}

export default BonusPanel;