import * as yup from 'yup'

const schema = () => {
  return yup.object({
    email: yup.string().required('Email é obrigatório').email('Por favor informe um email válido!'),
    password: yup.string().required('Senha é obrigatório')
  }).required()
}

export default schema
