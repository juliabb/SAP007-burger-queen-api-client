export function codeError(response) {
    switch (response.status) {
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




