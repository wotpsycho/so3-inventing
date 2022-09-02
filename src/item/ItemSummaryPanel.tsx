import { Inventor } from "../data/Inventor";
import { Item } from "../data/Item";


interface ItemProps {
    item:Item
    lineInventors:Inventor[]
    activeInventor?:Inventor
    activeItem?:Item
    setActive:() => void
    targetCost:number
    lineRating:number
    setTargetCost:(cost:number) => void
}
function ItemSummaryPanel({item,lineInventors,activeInventor,activeItem,setActive,targetCost,lineRating,setTargetCost}:ItemProps) {
    const lineCosts = getCosts(item,lineInventors);
    const classNames = ["ItemSummary"];
    if (item === activeItem) classNames.push("activeItem");
    if (activeInventor && item.inventors.includes(activeInventor)) classNames.push("activeInventor");
    if (targetCost && lineCosts.includes(targetCost)) classNames.push("targetedCost");
    if (lineRating > item.rating) classNames.push("lineRated");
    if (lineInventors.find(inventor => item.inventors.includes(inventor))) classNames.push("lineInventor")
    const lineCostLinks = lineCosts.map(cost => 
        <span className="ItemTargetCost" onClick={(e) => {e.preventDefault();e.stopPropagation();setTargetCost(cost);}}>{cost}</span> 
    );

    return <div className={classNames.join(" ")} onClick={(e) => {e.stopPropagation(); setActive();}}>
        <div className="ItemName">{item.name}</div>
        <div className="ItemRatingCost">
            <div className="ItemRating">Rating: {item.rating}</div>
            <div className="ItemCost">Base Cost: {item.cost} Fol</div>
        </div>
        <div className="ItemDetails">
            <div className="ItemChance">Line Chance: {Math.min(100,Math.max(0,lineRating-item.rating))}%</div>
            <div className="ItemCosts">Line Costs: {lineCostLinks.reduce((composite:any[],link) => composite.length === 0 ? [link] : [...composite,", ",link], [])}</div>
        </div>
    </div>;
}


const getCosts = (item:Item, lineInventors:Inventor[]) => {
    const costPercentage = lineInventors.reduce((costPercentage,inventor) => costPercentage + inventor.cost,100)
    const baseCost = item.cost * costPercentage/100;
    return [-0.05,-0.04,-0.03,-0.02,-0.01,0,0.01,0.02,0.03,0.04,0.05].map(offset => 
        Math.round(baseCost * (1+offset))
    ).filter((value,index,costs) => index === costs.indexOf(value))
}

export default ItemSummaryPanel;