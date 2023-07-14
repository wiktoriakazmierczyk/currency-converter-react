import Form from "./Form";
import Container from "./Container";

function App() {
  //   const calculateResult = ({ currency, amount, exchange }) => {

  //     const ratePLN = 1.00;
  //     const rateEUR = 4.73;
  //     const rateGBP = 5.37;
  //     const rateCHF = 4.78;
  //     const rateUSD = 4.46;


  //     switch (true) {

  //       case currency === "EUR" && exchange === "EUR":
  //         return amount / rateEUR * rateEUR;

  //       case currency === "EUR" && exchange === "PLN":
  //         return amount / ratePLN * rateEUR;

  //       case currency === "EUR" && exchange === "GBP":
  //         return amount / rateGBP * rateEUR;

  //       case currency === "EUR" && exchange === "CHF":
  //         return amount / rateCHF * rateEUR;

  //       case currency === "EUR" && exchange === "USD":
  //         return amount / rateUSD * rateEUR;


  //       case currency === "PLN" && exchange === "EUR":
  //         return amount / rateEUR * ratePLN;

  //       case currency === "PLN" && exchange === "PLN":
  //         return amount / ratePLN * ratePLN;

  //       case currency === "PLN" && exchange === "GBP":
  //         return amount / rateGBP * ratePLN;

  //       case currency === "PLN" && exchange === "CHF":
  //         return amount / rateCHF * ratePLN;

  //       case currency === "PLN" && exchange === "USD":
  //         return amount / rateUSD * ratePLN;



  //       case currency === "GBP" && exchange === "EUR":
  //         return amount / rateEUR * rateGBP;

  //       case currency === "GBP" && exchange === "PLN":
  //         return amount / ratePLN * rateGBP;

  //       case currency === "GBP" && exchange === "GBP":
  //         return amount / rateGBP * rateGBP;

  //       case currency === "GBP" && exchange === "CHF":
  //         return amount / rateCHF * rateGBP;

  //       case currency === "GBP" && exchange === "USD":
  //         return amount / rateUSD * rateGBP;


  //       case currency === "CHF" && exchange === "EUR":
  //         return amount / rateEUR * rateCHF;

  //       case currency === "CHF" && exchange === "PLN":
  //         return amount / ratePLN * rateCHF;

  //       case currency === "CHF" && exchange === "GBP":
  //         return amount / rateGBP * rateCHF;

  //       case currency === "CHF" && exchange === "CHF":
  //         return amount / rateCHF * rateCHF;

  //       case currency === "CHF" && exchange === "USD":
  //         return amount / rateUSD * rateCHF;


  //       case currency === "USD" && exchange === "EUR":
  //         return amount / rateEUR * rateUSD;

  //       case currency === "USD" && exchange === "PLN":
  //         return amount / ratePLN * rateUSD;

  //       case currency === "USD" && exchange === "GBP":
  //         return amount / rateGBP * rateUSD;

  //       case currency === "USD" && exchange === "CHF":
  //         return amount / rateCHF * rateUSD;

  //       case currency === "USD" && exchange === "USD":
  //         return amount / rateUSD * rateUSD;
  //     }
  //   }

  // const updateResult = ({ result, exchange }) => {
  //   result = `${result.toFixed(2)} ${exchange}`;
  // }

  // const init = () => {
  //   const formElement = ("input", () => {

  //     const currency = currency.value;
  //     const amount = amount.value;
  //     const exchange = exchange.value;

  //     let result = calculateResult(currency, amount, exchange);

  //     updateResult(result, exchange);
  //   });
  // }

  // init();

  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;
