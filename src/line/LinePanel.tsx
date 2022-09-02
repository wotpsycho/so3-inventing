import BonusPanel from "../bonus/BonusPanel";
import Category from "../data/Category";
import { Inventor } from "../data/Inventor";
import { Item } from "../data/Item";
import InventorPanel from "../inventor/InventorPanel";
import "./Line.scss"

interface LinePanelParams {
    lineInventors:Inventor[],
    addLineInventor:(inventor:Inventor) => void
    removeLineInventor:(inventor:Inventor) => void
    lineCategory:Category
    targetCost:number
    setTargetCost:(cost:number) => void
    activeInventor?:Inventor
    setActiveInventor:(inventor:Inventor) => void
    activeItem?:Item
    lineRating:number

}
function LinePanel({lineInventors,addLineInventor,removeLineInventor,lineCategory,lineRating,targetCost,setTargetCost,activeInventor,setActiveInventor,activeItem}:LinePanelParams) {
    const categoryCode = Object.entries(Category).find(([key,value]) => value === lineCategory)?.[0] || "UNKN";
    return <div className="Line">
        <div className="LineInventors">
            {[0,1,2].map(i =>
                <InventorPanel 
                    key={i}
                    inventor={lineInventors[i]}
                    removeFromLine={() => removeLineInventor(lineInventors[i])}
                    canMakeActiveItem={activeItem?.inventors.includes(lineInventors[i]) || false}
                    setActiveInventor={setActiveInventor} 
                    lineInventors={lineInventors} 
                    addToLine={() => addLineInventor(lineInventors[i])}
                    activeCategory={lineCategory}
                    activeInventor={activeInventor}
                />
            )}
        </div>
        <div className="Line-category">
            {categoryCode}
        </div>
        <div className="Line-costRating">
            <BonusPanel
                time={lineInventors.reduce((time,inventor) => time + inventor.time, 0)}
                cost={lineInventors.reduce((cost,inventor) => cost + inventor.cost, 0)}
            />
            <div>Rating: {lineRating}</div>
            <div><label>Cost: <input type="number" value={targetCost || ""} onClick={e => e.stopPropagation()}onChange={(e) => setTargetCost(Number(e.target.value))}/></label></div>
        </div>
    </div>;
}

export default LinePanel;