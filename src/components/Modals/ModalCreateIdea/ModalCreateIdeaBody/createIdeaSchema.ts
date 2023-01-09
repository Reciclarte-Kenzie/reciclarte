import * as yup from "yup";

export const createIdeaSchema = yup.object().shape({
  title: yup.string().required("O título é obrigatório"),
  steps: yup.string().required("O passo a passo é obrigatório"),
  estimatedCost: yup
    .number()
    .typeError("Insira um número válido")
    .required("O custo estimado é obrigatório"),
  materials: yup.string().required("Selecione ao menos um material"),
  categories: yup.string().required("Selecione ao menos uma categoria"),
  imgs: yup
    .string()
    .required("Insira ao menos a URL de uma foto")
    .test(
      "test-image",
      "A URL deve terminar em: .png, .jpg ou .gif",
      (value) =>
        value?.endsWith(".png") ||
        value?.endsWith(".jpg") ||
        value?.endsWith(".gif") ||
        false
    ),
});
