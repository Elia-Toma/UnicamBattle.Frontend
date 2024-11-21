import Card from "@app/components/card/Card";
import CardBody from "@app/components/card/CardBody";
import Personaggio from "@app/models/dtos/Personaggio";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface PersonaggioCardProps {
    personaggio: Personaggio;
}

const PersonaggioCard = (props: PersonaggioCardProps) => {
    const { personaggio } = props;
    const [t] = useTranslation();
    const navigate = useNavigate();

    return (
        <Card>
            <img
                src={personaggio.immagineUrl}
                alt={personaggio.nome}
                className="w-full h-48 object-cover rounded-md"
            />
            <CardBody>
                <h5 className="text-2xl font-bold">{personaggio.nome}</h5>
                <button
                    className="card-shadow"
                    onClick={() => {
                        navigate(`/fight/${personaggio.idPersonaggio}`);
                    }}
                >
                    {t('pages.personaggi.buttons.fight')}
                </button>
            </CardBody>
        </Card>
    );
}

export default PersonaggioCard;