import api from "./base"

const getAllWeapon = () => api.get("/weapons/query", {
    headers: {
        'X-Auth-Token': localStorage.getItem("userToken"),
    }
})

export { getAllWeapon }