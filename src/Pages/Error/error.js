export function Errors(codeError) {
    switch (codeError) {
        case 400:
            return "Dados inválidos ou ausentes";
        case 401:
            return "Usuário não encontrado";
        case 403:
            return "Acesso negado, tente outro e-mail";
        case 404:
            return "Usuário não encontrado";
        default:
            return "Ocorreu algum erro";
    }
}

// export const messageError = {
//     "400": "Dados inválidos ou ausentes",
//     "401": "Usuário não encontrado",
//     "403": "Acesso negado, tente outro e-mail",
//     "404": "Usuário não encontrado",
//     // "default": "Ocorreu algum erro",
// };

// export const messageError = {
//     "400": "Dados inválidos ou ausentes"
//      },
//      {
//     "401": "Usuário não encontrado"
//      },
//     {
//     "403": "Acesso negado, tente outro e-mail"
//      },
//      {
//     "404": "Usuário não encontrado"
//      },
//      {
//     "default": "Ocorreu algum erro",
//      },
//      };