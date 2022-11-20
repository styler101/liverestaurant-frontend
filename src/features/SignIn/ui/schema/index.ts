import * as yup from 'yup'

const schema = () => {
  return yup.object({
    email: yup.string().required('Email é Obrigatório').email('Por favor informe um email válido!'),
    password: yup.string().required('Senha é Obrigatório').min(5, 'O mínimo 5 caracteres')
  }).required()
}

export default schema
