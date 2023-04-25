
import "./style.scss"

const MySelect = ({optionList,defaultValue,onchange,name,errorText}) => {
    const handleChange = (e) => {
        onchange(e,name)
    }

    return <>
        <select  onChange={handleChange} placeholder={defaultValue} className="my-select">
        {optionList ?
            <>
            {optionList.map((item,index)=>{
                return <option value={index}>
                    {item.name}
                </option>
            })}
            </>
            :  null

        }
    </select>
  <p style={{color:"red"}}>{errorText}</p>
        </>
}
export default MySelect