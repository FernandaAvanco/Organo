import { useState } from 'react'
import './Campo.css'

const Campo = (props) => {

    let { type = "text" } = props;

    const placeholderModificada = `Digite ${props.placeholder}`


    //Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função. O hook que vamos usar aqui é o useState. Sempre que encontrarem um o use, saibam que é um hook. O React já importa ele direto.

    //Ele vai nos retornar dois valores, o valor em si e uma função que é nosso setter. Quando queremos alterar esse valor, vamos chamar essa função, não podemos alterar o valor direto por atribuição. Então temos as variáveis valor e setValor.

    //No react para que alterações em um input sejam automaticamente atualizadas na sua variável, é assim que deve ser feito

    // const [valor, setValor] = useState('Ferdinanda')

    // const aoDigitado = (evento) => {
    //     props.aoAlterado(evento.target.value)
    // } 

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input
                type={type}
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                placeholder={placeholderModificada}>
            </input>
        </div>
    )
}

export default Campo