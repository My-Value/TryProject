import axios from 'axios'
export async function news(){
    var resp=await axios.get("http://ali-news.showapi.com/channelList",{
        headers:{
            Authorization:'APPCODE 1b1b68134c5c4778a80d4755bac05b3a'
        }
    })
    return resp;
}