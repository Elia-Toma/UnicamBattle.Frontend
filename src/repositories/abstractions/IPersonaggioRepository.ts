import Personaggio from "@app/models/dtos/Personaggio";

export interface IPersonaggioRepository {
    getAll(): Promise<Personaggio[]>;
}