import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

//Criação do Hook Customizado
function useFormularioSimples(estadoInicial = "") {
    const [nome, setNome] = useState(estadoInicial);

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    const handleSubmitManual = (e) => {
        e.preventDefault();
        alert(`(Formulário Simples) Nome: ${nome}`);
    };

    //Retornamos os dados e funções necessárias
    return {
        nome,
        handleChange,
        handleSubmitManual
    };
}

// 2. Componente Form utilizando os Hooks
function Form() {
    //Consumindo a lógica isolada no nosso Hook Customizado
    const { nome, handleChange, handleSubmitManual } = useFormularioSimples("");

    //Lógica Formulário React Hook Form
    const { register, handleSubmit } = useForm();

    const onHookSubmit = (data) => {
        alert(`Email: ${data.email}\nMensagem: ${data.mensagem}`);
    };

    return (
        <>
            <h3>Form Simples</h3>
            <form onSubmit={handleSubmitManual}>
                <input type="text" name="nome" onChange={handleChange} value={nome} />
                <input type="submit" value="Enviar" />
            </form>

            <h3>React Hook Form</h3>
            <form onSubmit={handleSubmit(onHookSubmit)}>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register("email", { required: true })} />
                </div>

                <div>
                    <label>Mensagem:</label>
                    <textarea {...register("mensagem", { required: true })} />
                </div>

                <button type="submit">Enviar com Hook Form</button>
            </form>
        </>
    );
}

export default Form;