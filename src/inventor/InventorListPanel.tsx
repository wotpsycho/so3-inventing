import { Inventor } from "../data/Inventor";
import { Item } from "../data/Item";
import InventorPanel from "./InventorPanel";
import './Inventor.scss'
import Category from "../data/Category";

interface InventorListPanelProps {
    inventors:Inventor[]|undefined,
    lineInventors:Inventor[],
    addLineInventor: (x:Inventor) => void
    removeLineInventor: (x:Inventor) => void
    activeItem?: Item,
    activeCategory?: Category,
    setActiveInventor:(inventor:Inventor) => void
    activeInventor?: Inventor,
}

function InventorListPanel({inventors,lineInventors,addLineInventor,removeLineInventor,activeItem,activeCategory,setActiveInventor,activeInventor}:InventorListPanelProps) {
    if (!inventors || inventors.length === 0) {
        return <span>No Inventors?</span>
    }
    return <div className="Inventor-listContainer">
        {inventors.map((inventor,index) => 
            <div className="Inventor-inventorContainer" key={index}>
                <InventorPanel 
                    inventor={inventor}
                    lineInventors={lineInventors}
                    addToLine={() => addLineInventor(inventor)}
                    removeFromLine={() => removeLineInventor(inventor)}
                    canMakeActiveItem={!!activeItem && activeItem.inventors.includes(inventor)}
                    activeCategory={activeCategory}
                    activeInventor={activeInventor}
                    setActiveInventor={setActiveInventor}
                />
            </div>
        )}
    </div>
}

export default InventorListPanel;