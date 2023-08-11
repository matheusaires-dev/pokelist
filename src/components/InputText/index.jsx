import InputTextStyle from './inputText.module.scss'
const InputText = ({ id, name, type, placeholder, icon, value, onChange }) => {
    return (
        <div className={InputTextStyle.inputBox}>
            <input id={id} name={name} type="text" placeholder={placeholder} value={value} onChange={onChange}/>
            {icon? <div className={InputTextStyle.icon}>{icon}</div> : ""}
        </div>
    );
}

export default InputText;