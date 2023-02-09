import './index.css'
export function Sum(props){   
    return(
            <div>
                <h1>The sum is:{
                    props.numbers.reduce((sum, item)=> sum + item)
                }</h1>
            </div>
        )
    }


export default Sum