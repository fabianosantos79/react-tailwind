import Input from "../Input/Input";

const Form = ({ onSubmit }) => {

    const saveSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        alert({ name })
        onSubmit({ name, email })
    }

    return (
        <form onSubmit={saveSubmit} className="-mt-80 flex flex-col items-center justify-center gap-5 mx-5">
            <Input type="text" placeholder="Digite seu nome" required />
            <Input type="email" placeholder="Digite seu e-mail" required />
            <button className="button-form" type="submit">Enviar</button>
        </form>
    )
}

export default Form