import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {


    // let colaboradoresAtualizado = colaboradores
    // colaboradoresAtualizado.push(colaborador)
    // setColaboradores(colaboradoresAtualizado)

    const novoColaborador = { ...colaborador, id: uuidv4(), favorito: false }
    setColaboradores([...colaboradores, novoColaborador])

    //Fazer isto é a mesma coisa que excutar o código comentado acima, porém deste modo, acontece que o React atualiza o estado de maneira assíncrona. Isso significa que, quando você chama setColaboradores([...colaboradores, colaborador]), o React agenda uma atualização do estado, mas não a executa imediatamente.
    // Logo após essa chamada, quando você faz console.log(colaboradores), o estado ainda não foi atualizado, por isso você vê a lista vazia. O estado será atualizado em algum momento no futuro, antes do próximo render, por isso usamos o useEffect logo abaixo para 

  }

  // useEffect(() => {
  //   colaboradores.forEach(element => {
  //     console.log(element.nome)
  //   });
  //   console.log(colaboradores);  // aqui, colaboradores terá o valor atualizado
  // }, [colaboradores]);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} cadastrarTime={cadastrarTime} />
      {times.map(time =>
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
