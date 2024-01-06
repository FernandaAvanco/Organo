import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required = {props.required} onChange = {evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key =  {item}>{item}</option>)}
            </select>
        </div>
    )

}

// isso é a msm coisa
// {props.itens.map(item => <option>{item}</option>)}

// que isso
// {
//     props.itens.map(item => {
//         return <option>{item}</option>
//     })
// }


export default ListaSuspensa