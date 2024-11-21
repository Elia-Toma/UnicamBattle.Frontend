import { getAccessToken } from '../utils/getAccesstoken';

let useFetch = () => {




    let originalRequest = async (url: any, config: any) => {
        let response = await fetch(url, config)
        let data = await response.json()

        return { response, data }
    }

    let refreshToken = async (authTokens: any) => {

        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authTokens.refresh })
        })
        let data = await response.json()
        localStorage.setItem('authTokens', JSON.stringify(data))
        //setAuthTokens(data)
        //setUser(jwt_decode(data.access))
        return data
    }

    let callFetch = async (url: any, config: any) => {
        let accessToken = await getAccessToken();

        config['headers'] = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }

        let { response, data } = await originalRequest(url, config)
        return { response, data }
    }

    return callFetch
}

export default useFetch;