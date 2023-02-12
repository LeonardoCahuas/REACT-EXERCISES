import { useMemo } from "react"

export function FilteredList(props){
    
    const agedList = useMemo(()=>props.li.filter(el => el.age >=18), [props.li])
    return(
        <ul>
            {agedList.map(element=> <li>{element.name}</li>)}
        </ul>
    )
}

export default FilteredList