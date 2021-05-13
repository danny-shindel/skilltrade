import sendRequest from './send-request';

const BASE_URL = '/api/requests';

export function create(requestInfo) {
    return sendRequest(`${BASE_URL}/create`, 'POST', requestInfo);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function updateStatus(status) {
    return sendRequest(`${BASE_URL}/update`, 'POST', status);
}

export function deleteRequest(requestId) {
    return sendRequest(`${BASE_URL}/${requestId}`, 'DELETE');
}