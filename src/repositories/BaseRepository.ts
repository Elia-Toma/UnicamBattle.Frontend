import useFetch from "@app/hooks/useFetch";
import ApiError from "@app/models/errors/ApiError";
import { handleDates } from "@app/utils/dateUtils";
import { injectable } from "inversify";

@injectable()
export class BaseRepository {

    static async execApi<T>(execFn: any): Promise<T> {
        let api = useFetch();

        try {
            let data = await execFn(api);
            if (data.success == false) {
                throw new ApiError("Error executing api call", data.errors);
            }
            return handleDates(data.result);
        }
        catch (e) {
            if (e instanceof ApiError) {
                throw e;
            }
            else {
                throw new Error("Unexpected api call");
            }
        }
    }

    static async execPaginationApi<T>(execFn: any): Promise<[T[], number]> {
        let api = useFetch();
        try {
            let data = await execFn(api);
            if (data.success == false) {
                throw new ApiError("Error executing api call", data.errors);
            }
            return [data.result, data.totResultNumber];
        }
        catch (e) {
            if (e instanceof ApiError) {
                throw e;
            }
            else {
                throw new Error("Unexpected api call");
            }
        }
    }

}