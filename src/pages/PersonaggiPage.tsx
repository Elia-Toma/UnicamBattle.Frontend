import { useTranslation } from "react-i18next";
import ContentHeader from "../components/content-header/ContentHeader";
import { useEffect, useState } from "react";
import Personaggio from "../models/dtos/Personaggio";
import { dicontainer } from "@app/services/Container";
import { IPersonaggioRepository } from "@app/repositories/abstractions/IPersonaggioRepository";
import PersonaggioCard from "@app/views/PersonaggioCard";

const PersonaggiPage = () => {
    //Instantiating repositories from the dependency injection container.
    const PersonaggioRepository = dicontainer.get<IPersonaggioRepository>("PersonaggioRepository");

    const [t] = useTranslation();
    const [personaggi, setPersonaggi] = useState<Personaggio[]>([]);

    const fetchData = async () => {
        try {
            const fetchPersonaggiPromises = PersonaggioRepository.getAll();

            const [personaggiData] = await Promise.all([fetchPersonaggiPromises]);

            setPersonaggi(personaggiData);
            //console.log(personaggiData);
        }
        catch (err) {

            return;
        }
    }

    useEffect(() => {
        fetchData();
    },
        []);

    return (
        <div>
            <ContentHeader title={t('pages.personaggi.title')} />
            <section className="content">
                <div className="container-fluid">
                    <div className="card-container">
                        {personaggi.map((personaggio) => (
                            <PersonaggioCard key={personaggio.idPersonaggio} personaggio={personaggio} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PersonaggiPage;