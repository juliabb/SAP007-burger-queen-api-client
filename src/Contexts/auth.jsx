export const logout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("id")
        localStorage.removeItem("email")
        localStorage.removeItem("role")
    };
    
export const getToken = (() => localStorage.getItem("token"));
