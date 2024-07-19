const URL= "http://localhost:4000"

export const registerUser = async (credentials) => {
    // validar la data que voy a enviar
    if (credentials.email === "" || credentials.password === "") {
        return console.log("No Email or Password");
    }
    // consumir la api
    const request = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    const result = await request.json();

    return result;
}