import "./style.scss"

const MySelect = ({optionList, defaultValue, onchange, nameOptionList, errorText, value}) => {
    const handleChange = (e) => {
        onchange(e.target.value, nameOptionList)
    }

    return <>
        <select value={value} name={nameOptionList} onChange={handleChange} className="my-select">
            {optionList ?
                <>
                    <option disabled  value=''>{defaultValue}</option>
                    {optionList.map((item, index) => {
                        return <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    })}
                </>
                : null
            }
        </select>
        <p style={{color: "red"}}>{errorText}</p>
    </>
}
export default MySelect