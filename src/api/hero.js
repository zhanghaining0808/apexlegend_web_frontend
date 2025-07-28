import api from "./base"

const getAllHero = async () => {
    return api.get("/heroes/query")
}

// 后续可以实现更多对后端中的hero操作功能

export { getAllHero }