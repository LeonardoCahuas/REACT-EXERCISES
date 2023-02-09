import './index.css'
export function Sum({numbers = [1,7, 24]}){   
    return(
            <div>
                <h1>The sum is:{
                    numbers.reduce((sum, item)=> sum + item)
                }</h1>
            </div>
        )
    }


export default Sum