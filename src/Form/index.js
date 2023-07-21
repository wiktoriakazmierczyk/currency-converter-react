import "./style.css";

const Form = () => (
    <div className="container">
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend"><b>KALKULATOR WALUTOWY</b></legend>

            <p>
                <label>
                    <span className="form__label"><b>Przelicz z:</b></span>
                    <select className="form__field--select">
                        <option value="EUR">EUR (euro)</option>
                        <option value="PLN" selected>PLN (polski złoty)</option>
                        <option value="GBP">GBP (funt brytyjski)</option>
                        <option value="CHF">CHF (frank szwajcarski)</option>
                        <option value="USD">USD (dolar amerykański)</option>
                    </select>
                    <input className="form__field" placeholder="wpisz kwotę" type="number" min="0.01"
                        step="any" required />
                </label>
            </p>

            <p>
                <label>
                    <span className="form__label"><b>Przelicz na:</b></span>
                    <select className="form__field--select">
                        <option value="EUR" selected>EUR (euro)</option>
                        <option value="PLN">PLN (polski złoty)</option>
                        <option value="GBP">GBP (funt brytyjski)</option>
                        <option value="CHF">CHF (frank szwajcarski)</option>
                        <option value="USD">USD (dolar amerykański)</option>
                    </select>
                    <input className="form__field form__field--special" readonly />
                </label>
            </p>

            <p className="form__footer">Bieżące kursy średnie walut obcych pochodzą ze strony internetowej Narodowego
                Banku Polskiego.<br />
                Tabela nr 039/A/NBP/2023 z dnia 2023-02-24.
            </p>

        </fieldset>
    </form>
    </div>
);

export default Form;