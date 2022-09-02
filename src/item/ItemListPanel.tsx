import React from 'react';
import { Inventor } from "../data/Inventor";
import { Item } from "../data/Item";
import './Item.scss'
import ItemSummaryPanel from "./ItemSummaryPanel";

interface ItemListProps {
    items?:Item[]
    lineInventors:Inventor[]
    activeInventor?:Inventor
    activeItem?:Item
    setActiveItem:(item:Item) => void
    targetCost:number
    lineRating:number
    setTargetCost:(cost:number) => void
}
function ItemListPanel({items,lineInventors,activeInventor,activeItem,setActiveItem,targetCost,setTargetCost,lineRating}:ItemListProps){
    if (!items) return <div>No Items</div>
    const itemPanels = items.map((item,index) => 
        <ItemSummaryPanel
            key={index}
            item={item}
            lineInventors={lineInventors}
            activeInventor={activeInventor}
            activeItem={activeItem}
            setActive={() => setActiveItem(item)}
            targetCost={targetCost}
            lineRating={lineRating}
            setTargetCost={setTargetCost}
        />
    );
    return <div className="Item-list">
        {itemPanels}
    </div>
}

export default ItemListPanel;