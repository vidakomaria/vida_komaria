import { dataProfile } from "../Content/dataSummary"

export default function Summary(){
    const data = dataProfile
    // console.log(data);
    return(
        <div>
            {
                data.name
            }
        </div>
    )
}