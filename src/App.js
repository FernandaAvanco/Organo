import { useState } from 'react';
import { useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {


    // let colaboradoresAtualizado = colaboradores
    // colaboradoresAtualizado.push(colaborador)
    // setColaboradores(colaboradoresAtualizado)

    setColaboradores([...colaboradores, colaborador])

    //Fazer isto é a mesma coisa que excutar o código comentado acima, porém deste modo, acontece que o React atualiza o estado de maneira assíncrona. Isso significa que, quando você chama setColaboradores([...colaboradores, colaborador]), o React agenda uma atualização do estado, mas não a executa imediatamente.
    // Logo após essa chamada, quando você faz console.log(colaboradores), o estado ainda não foi atualizado, por isso você vê a lista vazia. O estado será atualizado em algum momento no futuro, antes do próximo render, por isso usamos o useEffect logo abaixo para 

  }

  useEffect(() => {
    colaboradores.forEach(element => {
      console.log(element.nome)
    });
    console.log(colaboradores);  // aqui, colaboradores terá o valor atualizado
  }, [colaboradores]);

  return (
    <div className="App">
      <Banner />
      <Formulario times = {times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />
      {times.map(time => <Time  
       key = {time.nome} 
       nome = {time.nome} 
       corPrimaria = {time.corPrimaria} 
       corSecundaria = {time.corSecundaria}
       colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)} 
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
