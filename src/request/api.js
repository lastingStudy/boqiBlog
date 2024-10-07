import instance from "./request";

//获取文章内容
export function GetTextApi(){
    return instance.get("/selectText")
}

//获取排序后文章内容
export function GetSortTextApi(){
    return instance.get("/soltText")
}

//登录验证
export function LoginApi(user){
    return instance.post("/users",user)
}

//注册用户
export function EnrollApi(username,password,petName){
    return instance.post("/enroll",{username,password,petName})
}

//获取推荐
export function tuijianApi(){
    return instance.get("/randomTexts")
}

//点赞
export function clickGoodApi(id,textId){
    return instance.post("/clickGoodText",{id,textId})
}

//更新点赞数
export function UpdateCountApi(text){
    return instance.post("/updateText",text)
}

//获取文章内容
export function selectText(id){
    return instance.post("/selectIdText",{id})
}