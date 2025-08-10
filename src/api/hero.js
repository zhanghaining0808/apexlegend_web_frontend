// 1.从当前目录下的base.js文件中导入已经配置好的axios实例(api)
// (这个api是之前定义好的,包含了后端地址和超时设置)
import api from "./base"

// 2.定义一个名为getALLHero的异步函数,用来获取所有英雄数据
// const getAllHero = async () => {
// 3.调用api.get方法,请求后端的/heroes/query接口
// 注意:这里直接返回请求的promise对象 外部需要用await 或 .then()获取数据
// return api.get("/heroes/query")
// }

const getAllHero = () => api.get("/heroes/query", {
    headers: {
        'X-Auth-Token': localStorage.getItem("userToken"),
    }
})

// 后续可以在这里添加更多英雄相关操作函数
// 比如：getHeroByld(根据ID查英雄)，addHero(新增英雄)等

export { getAllHero }