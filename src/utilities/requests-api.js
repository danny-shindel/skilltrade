import sendRequest from './send-request';

const BASE_URL = '/api/requests';

export function create(requestInfo) {
    return sendRequest(BASE_URL, 'POST', requestInfo);
}