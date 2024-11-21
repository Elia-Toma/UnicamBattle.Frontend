import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [t] = useTranslation();
    const navigate = useNavigate();

    return (
        <div>
            <section className='content'>
                <div className='container-fluid'>
                    <h1 className="card-shadow">{t('pages.home.title')}</h1>
                    <button
                        className="card-shadow"
                        onClick={() => {
                            navigate('/personaggi');
                        }}
                    >
                        {t('pages.home.play')}
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;