import { FieldContainer, LegendContainer, Label } from "./inputStyle"

function InputRadio({ id, pergunta, options, onChange, value }){
    return(
        <FieldContainer>
            <LegendContainer>{pergunta}</LegendContainer>
            {options.map((option, index) => (
                <Label key={index}> 
                    <input required type="radio" checked={value === option} value={option} id={id} name={id} onChange={onChange} />
                    {option}
                </Label>
            ))}
        </FieldContainer>
    )
}

export default InputRadio