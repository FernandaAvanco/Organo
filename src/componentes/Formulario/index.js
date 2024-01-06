import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Front-End')

    const aoSalvar = (event) => {
        event.preventDefault()

        //criação mais enxuta de um objeto js, que tambem e parecido com um json, ent a chave sera nome e o valor desse chave sera o valor da variavel nome
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="seu Nome"
                    valor={nome}
                    aoAlterado= {valor => setNome(valor)}  
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="seu Cargo" 
                    valor={cargo}
                    //Esta é uma sintaxe que esta atribuindo a uma variável, uma função, que recebe esse valor, como parametro e executa uma outra função
                    aoAlterado= {valor => setCargo(valor)}  
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="o endereço da imagem" 
                    valor={imagem}
                    aoAlterado= {valor => setImagem(valor)}  
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado= {valor => setTime(valor)}   
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario