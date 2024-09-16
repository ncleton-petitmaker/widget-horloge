const WidgetHorloge = () => {
    const [heure, setHeure] = React.useState('');
    const [jour, setJour] = React.useState('');

    React.useEffect(() => {
        const mettreAJourHeure = () => {
            const maintenant = new Date();
            setHeure(maintenant.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false }));
            setJour(maintenant.toLocaleDateString('fr-FR', { weekday: 'long' }).toUpperCase());
        };

        mettreAJourHeure();
        const intervalle = setInterval(mettreAJourHeure, 1000);

        return () => clearInterval(intervalle);
    }, []);

    return (
        <div>
            <div className="heure">{heure}</div>
            <div className="jour">{jour}</div>
        </div>
    );
};

ReactDOM.render(<WidgetHorloge />, document.getElementById('root'));
