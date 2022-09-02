
import BonusPanel from "../bonus/BonusPanel";
import Category from "../data/Category";
import { Inventor } from "../data/Inventor";
import './Inventor.scss'

interface InventorPanelProps {
    inventor?:Inventor,
    lineInventors:Inventor[],
    addToLine: () => void,
    removeFromLine: () => void,
    canMakeActiveItem:boolean,
    activeCategory?:Category
    setActiveInventor:(invent:Inventor) => void
    activeInventor?:Inventor
}
function InventorPanel({inventor,lineInventors,addToLine,removeFromLine,setActiveInventor,canMakeActiveItem,activeCategory,activeInventor}:InventorPanelProps) {
    if (!inventor) return null;
    const classes = ["Inventor-inventorCard"];
    if (activeInventor === inventor) classes.push("activeInventor");
    if (canMakeActiveItem) classes.push("activeItem");
    return <div className={classes.join(" ")} onClick={(e) => {e.stopPropagation();setActiveInventor(inventor);}}>
        <InventorTitleControls 
            inventor={inventor}
            lineInventors={lineInventors}
            addToLine={addToLine}
            removeFromLine={removeFromLine}
        />
        <BonusPanel 
            time={inventor.time}
            cost={inventor.cost}
        />
        <InventorRatings 
            inventor={inventor} 
            activeCategory={activeCategory}
        />
    </div>
}

interface InventorTitleProps {
    inventor:Inventor,
    lineInventors:Inventor[],
    addToLine:(inventor:Inventor) => void,
    removeFromLine:(inventor:Inventor) => void
}
function InventorTitleControls({inventor,lineInventors,addToLine,removeFromLine}:InventorTitleProps) {
    return <div className="Inventor-titleControls">
        <button disabled={!lineInventors.includes(inventor)} onClick={(e) => {e.stopPropagation(); removeFromLine(inventor)}}>-</button>
        {inventor.name}
        <button disabled={lineInventors.includes(inventor) || lineInventors.length >=3} onClick={(e) => {e.stopPropagation();addToLine(inventor)}}>+</button>
    </div>;
}


interface InventorRatingsProps {
    inventor:Inventor,
    activeCategory?:Category
}
function InventorRatings({inventor,activeCategory}:InventorRatingsProps) {
    const content = InventorRating({inventor,category:activeCategory}) || Object.values(Category).map (category => InventorRating({inventor,category}));
        return <div className="Inventor-ratings">
            {content}
        </div>
}

interface InventorRatingProps {
    inventor:Inventor,
    category?:Category
}
function InventorRating({inventor,category}:InventorRatingProps) {
    if (category && inventor.ratings[category])
        return <span className="Inventor-rating">{category}: {inventor.ratings[category]}</span>
}

export default InventorPanel;