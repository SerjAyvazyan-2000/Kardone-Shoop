
import "./style.scss"

const MySelect = ({optionList,defaultValue}) => {

    return <select className="my-select">
        <option value="">{defaultValue}</option>
        {optionList.map(option =>
            <option value=''>
                {option.name}
            </option>
        )}
    </select>
}
export default MySelect