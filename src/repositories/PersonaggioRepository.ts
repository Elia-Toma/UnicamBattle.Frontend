import { injectable } from "inversify";
import { IPersonaggioRepository } from "./abstractions/IPersonaggioRepository";
import { BaseRepository } from "./BaseRepository";
import Personaggio from "@app/models/dtos/Personaggio";

@injectable()
export class PersonaggioRepository extends BaseRepository implements IPersonaggioRepository {
    async getAll(): Promise<Personaggio[]> {
        return PersonaggioRepository.execApi(async (api: any) => {
            let { response, data } = await api(import.meta.env.VITE_API_URL + "/Personaggi/all", {
                method: 'GET',
            });
            return data;
        });
    }
}