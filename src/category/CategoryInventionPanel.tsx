import React, {useEffect, useState} from 'react';
import BoosterPanel from "../booster/BoosterPanel";
import { Boosters } from "../data/Booster";
import Category from '../data/Category'
import { Inventor, InventorsByCategory, InventorsByCode } from "../data/Inventor";
import { Item, ItemsByCategory, ItemsByName } from "../data/Item";
import InventorListPanel from "../inventor/InventorListPanel";
import ItemListPanel from "../item/ItemListPanel";
import LinePanel from "../line/LinePanel";
import './Category.scss'


interface CategoryProps {
    category: Category
}

function CategoryInventionPanel({category}:CategoryProps) {
    const useLocalStorageState = <T,>(name:string,defaultValue:T):[T,React.Dispatch<React.SetStateAction<T>>] => {
        const key = `${category}:${name}`;
        const startState = JSON.parse(localStorage.getItem(key) || 'null') || defaultValue;
        const [state,setState] = useState<T>(startState);

        useEffect(() => {
            localStorage.setItem(key,JSON.stringify(state))
        },[key,state])

        return [state,setState];
    };
    // const [hasBooster, setHasBooster] = useState<boolean>(false);
    const [hasBooster, setHasBooster] = useLocalStorageState<boolean>("hasBooster",false);
    const [lineInventorCodes, setLineInventorCodes] = useLocalStorageState<string[]>("lineInventors",[]);
    const [activeItemName, setActiveItemName] = useLocalStorageState<string>("activeItemName","");
    const [activeInventorCode, setActiveInventorCode] = useLocalStorageState<string>("activeInventorCode","");
    const [targetCost, setTargetCost] = useState<number>(0);

    const addLineInventor = (inventor:Inventor) => {
        if (lineInventorCodes.length < 3) {
            setLineInventorCodes([...lineInventorCodes,inventor.code]);
        }
    }

    const removeLineInventor = (inventor:Inventor) => {
        if (lineInventorCodes.find(lineInventorCode => lineInventorCode === inventor.code)) {
            setLineInventorCodes(lineInventorCodes.filter(lineInventorCode => lineInventorCode !== inventor.code))
        }
    }
    
    const toggleBooster = () => {
        setHasBooster(!hasBooster);
    }

    const setActiveInventor = (inventor:Inventor) => {
        setActiveInventorCode(inventor.code)
        if (activeItem)
            setActiveItemName("")
    }

    const setActiveItem = (item:Item) => {
        setActiveItemName(item.name);
        if (activeInventor)
            setActiveInventorCode("");
    }

    const lineInventors = lineInventorCodes.map(code => InventorsByCode[code]);
    const activeItem = activeItemName ? ItemsByName[activeItemName] : undefined;
    const activeInventor = activeInventorCode ? InventorsByCode[activeInventorCode] : undefined;
    
    const rating = lineInventors.map(inventor => inventor.ratings[category] || 0).reduce((rating,total) => rating + total,0) + (hasBooster ? 20 : 0);

    return <div className="Category-container" onClick={() => {setActiveItemName(""); setActiveInventorCode("");}}>
        <div className="Category-left">
            <InventorListPanel 
                inventors={InventorsByCategory[category]} 
                lineInventors={lineInventors}
                addLineInventor={addLineInventor}
                removeLineInventor={removeLineInventor}
                activeItem={activeItem}
                activeCategory={category}
                setActiveInventor={setActiveInventor}
                activeInventor={activeInventor}
            />
            <LinePanel
                lineInventors={lineInventors}
                addLineInventor={addLineInventor}
                removeLineInventor={removeLineInventor}
                lineCategory={category}
                targetCost={targetCost}
                setTargetCost={setTargetCost}
                activeInventor={activeInventor}
                setActiveInventor={setActiveInventor}
                activeItem={activeItem}
                lineRating={rating}
            />
        </div>
        <div className="Category-right">
            <BoosterPanel 
                booster={Boosters[category]} 
                hasBooster={hasBooster} 
                toggleBooster={toggleBooster}
            />
            <ItemListPanel 
                items={ItemsByCategory[category]}
                lineInventors={lineInventors}
                activeInventor={activeInventor}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                targetCost={targetCost} 
                lineRating={rating}     
                setTargetCost={setTargetCost}       
            />
        </div>
    </div>;
}


export default CategoryInventionPanel;