import Card from "@app/components/card/Card";
import CardBody from "@app/components/card/CardBody";
import ContentHeader from "@app/components/content-header/ContentHeader";
import Mossa from "@app/models/dtos/Mossa";
import { IMossaRepository } from "@app/repositories/abstractions/IMossaRepository";
import { dicontainer } from "@app/services/Container";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const DuelloPage = () => {
    //Instantiating repositories from the dependency injection container.
    const MossaRepository = dicontainer.get<IMossaRepository>("MossaRepository");

    const { idPersonaggio } = useParams();
    const [t] = useTranslation();
    const [mosse, setMosse] = useState<Mossa[]>([]);

    const fetchData = async () => {
        try {
            const fetchMossePromises = MossaRepository.getByIdPersonaggio(Number(idPersonaggio));

            const [mosseData] = await Promise.all([fetchMossePromises]);

            setMosse(mosseData);
            //console.log(mosseData);
        }
        catch (err) {

            return;
        }
    }

    useEffect(() => {
        fetchData();
    },
        []);

    // Funzione per dividere l'array in chunk di dimensione specificata
    const chunkArray = (arr: any[], size: number) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const mosseRows = chunkArray(mosse, 2);

    return (
        <div>
            <ContentHeader title={t('pages.duello.title')} />
            <section className="content">
                <div className="container-fluid">
                    <Card>
                        <CardBody>
                            {mosseRows.map((row, rowIndex) => (
                                <Form.Group className="row" key={rowIndex}>
                                    {row.map((mossa, index) => (
                                        <button
                                            key={index}
                                            className="card-shadow mossa-button"
                                            onClick={() => {
                                                // TODO: Implementa la logica del duello.
                                            }}
                                            style={{ margin: "32px" }}
                                        >
                                            {mossa.nome}
                                        </button>
                                    ))}
                                </Form.Group>
                            ))}
                        </CardBody>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default DuelloPage;