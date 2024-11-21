import { injectable } from "inversify";
import { IMossaRepository } from "./abstractions/IMossaRepository";
import { BaseRepository } from "./BaseRepository";
import Mossa from "@app/models/dtos/Mossa";

@injectable()
export class MossaRepository extends BaseRepository implements IMossaRepository {
    async getByIdPersonaggio(idPersonaggio: number): Promise<Mossa[]> {
        return MossaRepository.execApi(async (api: any) => {
            let { response, data } = await api(import.meta.env.VITE_API_URL + "/Mosse/personaggio/" + idPersonaggio, {
                method: 'GET',
            });
            return data;
        });
    }
}