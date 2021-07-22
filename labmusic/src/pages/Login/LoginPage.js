import React from 'react'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../routes/coordinator"
import { login } from '../../services/user'

const LoginPage = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const history = useHistory()


  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history)
  }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <input
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                fullWidth
                required
                type={"email"}
            />
            <input
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                fullWidth
                required
                type={"password"}
            />
            <button
              type={"submit"}
              fullWidth
            
            >
              Fazer Login

            </button>
        </form>

        <a onClick={() => goToSignUp(history)}> Não é cadastrado? Cadastre-se aqui!</a>

    </div>
  )
}

export default LoginPage;