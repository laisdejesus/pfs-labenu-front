import React from 'react'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../routes/coordinator"
import { signup } from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = () => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const history = useHistory()


  const onSubmitForm = (event) => {
    event.preventDefault()
    signup(form, clear, history)
  }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <input
                name={"name"}
                value={form.name}
                onChange={onChange}
                label={"E-mail"}
                fullWidth
                required
                type={"text"}
            />
            <input
                name={"nickname"}
                value={form.nickname}
                onChange={onChange}
                label={"E-mail"}
                fullWidth
                required
                type={"text"}
            />
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
              Cadastrar

            </button>
        </form>

        <a onClick={() => goToSignUp(history)}> Fazer Login</a>

    </div>
  )
}

export default SignUpPage;