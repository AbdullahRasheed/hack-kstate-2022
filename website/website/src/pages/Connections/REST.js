import axios from 'axios';

async function PostUser(url, body){
    return await axios.post('https://localhost:7266/' + url, body, {withCredentials: true});
}

async function PostLeaderboard(url, body){
    return await axios.post('https://localhost:7072/' + url, body);
}

async function GetLeaderboards(url){
    var res;
    await axios.get('https://localhost:7266/' + url, {withCredentials: true}).then(response => (res = response.data))
        .catch(res = null);

    return res;
}

async function GetLeaderboardData(url, body){
    var data;
    await axios.post('https://localhost:7072/' + url, body).then(response => (data = response.data));
    return data;
}

async function PostNewLeaderboard(url, body){
    return await axios.post('https://localhost:7072/' + url, body);
}

export default PostUser;

export {
    PostUser,
    PostLeaderboard,
    GetLeaderboards,
    GetLeaderboardData,
    PostNewLeaderboard
}