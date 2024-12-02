class ApiResponse {
    constructor(res) {
        this.res = res;
    }

    send(statusCode, payload = null, message = null) {
        const response = {
            status: statusCode,
            message: message || (statusCode < 400 ? 'Success' : 'Error'),
            success: statusCode < 400,
        };

        if (payload) {
            response.data = payload;
        }

        return this.res.status(statusCode).json(response);
    }
}

export const apiResponse = (res) => new ApiResponse(res);