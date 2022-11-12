import axios from 'axios';

async function PostUser(url, body, config=null){
    return await axios.post('https://localhost:7266/' + url, body, config);
}

async function PostLeaderboard(url, body, config=null){
    return await axios.post('https://localhost:7033/' + url, body, config);
}

export default PostUser;

export {
    PostUser,
    PostLeaderboard
}