import axios from "axios";

export const FetchInstance = async(payload) => {
    try{
        let url = `https://utlhq.com/msme_dev/api/${payload.apiName}`
        let {data:{data: {mobile}}} = await axios({ method: payload.method, url: url, data: payload.parameter })
        console.log(mobile)
        return mobile
    }catch(error){
        throw JSON.stringify(error); 
    }
}