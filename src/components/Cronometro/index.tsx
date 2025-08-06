import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "../Cronometro/Cronometro.module.scss"

export default function Cronometro() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicio o cronometro</p>
        <div className={style.relogioWrapper}>
            <Relogio/>
        </div>
           <Botao>
            Comecar!
           </Botao>
        </div>
    )
}

