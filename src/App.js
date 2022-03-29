import { useEffect, useState } from "react";
import Container from "./components/Layout/Container";
import Card from "./components/ui/Card";
import img_pattern from "./assets/pattern-divider-desktop.svg";
import img_dice from "./assets/icon-dice.svg";
import Spinner from "./assets/Spinner.svg";
function App() {
  const [quotes, setQuotes] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchQuotes() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setQuotes(data.slip);
    }
    fetchQuotes();
  }, []);
  const onClickHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setIsLoading(false);
    setQuotes(data.slip);
  };

  return (
    <Container>
      <Card>
        {!quotes ? (
          <div>
            <img src={Spinner} width={100} height={100} alt="spinner" />
          </div>
        ) : (
          <>
            <div className="quotes_advice_number">Advice #{quotes.id}</div>
            <div className="quotes_advice">"{quotes.advice}"</div>
            <img src={img_pattern} alt="divider" />

            <button className="quotes__btn" onClick={onClickHandler}>
              {isLoading ? (
                <img src={Spinner} alt="dice" />
              ) : (
                <img src={img_dice} alt="dice" />
              )}
            </button>
          </>
        )}
      </Card>
    </Container>
  );
}

export default App;
