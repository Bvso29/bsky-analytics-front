// // src/components/Forms/RegisterForm/index.jsx
// "use client";

// import { useForm } from "react-hook-form";
// import { Input } from "../Input/index.jsx";

// export const RegisterForm = () => {
//     const onSubmit = (e) => {
//         console.log(e);
//     };

//     const { register, handleSubmit } = useForm();


//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Input label={"Nome"} placeholder={'Digite um nome'} {...register("nome")} />
//             <Input label={"Senha"} placeholder={'Digite uma senha'} type={'password'} {...register("senha")} />
//             <button type="submit">Registrar</button>
//         </form>
//     );
// };