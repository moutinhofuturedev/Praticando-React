import '../styles/react.scss'

type ReactUIProps = {
    text?: string // o sinal de interrogacão representa que a props não é obrigatória
}

export function ReactUI(props: ReactUIProps) {
    return(
        <div className='component_react'>
            <p>{props.text}</p>
        </div>
    )
}

