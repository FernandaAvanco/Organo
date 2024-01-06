import './Banner.css'

//Este modo serve para que se voce tiver uma composição de componentes, voce poderá escolher qual deles irá exportar ou não
export const Banner = () => {
    // JSX
    return (
        <header className = 'banner'>
             <img src = "/imagens/banner.png" alt = "Banner Principal da página"/>
        </header>
    )
}

