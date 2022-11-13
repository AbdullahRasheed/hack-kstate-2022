import axios from 'axios';

var uid = '';

async function PostUser(url, body){
    return await axios.post('https://localhost:7266/' + url, body, {withCredentials: true, 
    headers: {
        "access-control-request-headers": "*"
    }});
}

async function PostLeaderboard(url, body){
    return await axios.post('https://localhost:7033/' + url, body);
}

async function GetLeaderboards(url){
    var res;
    await axios.get('https://localhost:7266/' + url, {withCredentials: true}).then(response => (res = response))
        .catch(res = null);

    return res;
}

async function GetLeaderboardData(url, body){
    var data;
    await axios.get(url, body).then(response => (data = response));
    return data;
}

async function PostNewLeaderboard(url, body){
    return await axios.post('https://localhost:7033/' + url, body);
}

export default PostUser;

export {
    PostUser,
    PostLeaderboard,
    GetLeaderboards,
    GetLeaderboardData,
    PostNewLeaderboard
}