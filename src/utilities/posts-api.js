import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function create(post) {
    return sendRequest(`${BASE_URL}/create`, 'POST', post);
}

export function getUserPosts() {
    return sendRequest(`${BASE_URL}/userposts`);
}
export function getFilteredPosts(filter) {
    return sendRequest(`${BASE_URL}/filteredposts`, 'POST', filter);
}

export function deletePost(post) {
    return sendRequest(`${BASE_URL}/deletepost`, 'POST', post);
}