import ApplicationErrorDto from "../dtos/ApplicationErrorDto";

class ApiError extends Error {
    
    constructor(message:string,errors:ApplicationErrorDto[]) {
        super(message);
        this.errors = errors;
    }
    errors: ApplicationErrorDto[]
}

export default ApiError;