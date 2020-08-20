import axios from 'axios'
export async function getNews(id){
    if(id==null || id==""){
        return "404";
    }
    var resp=await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization:'APPCODE 1b1b68134c5c4778a80d4755bac05b3a'
        },
        params:{
            channelId:id
        }
    })
    return resp;
}