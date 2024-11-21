import Mossa from "@app/models/dtos/Mossa";

export interface IMossaRepository {
    getByIdPersonaggio(idPersonaggio: number): Promise<Mossa[]>;
}