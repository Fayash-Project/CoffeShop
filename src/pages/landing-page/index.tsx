import { useLocation } from "react-router-dom";
import { data } from "../../dummy/card.json";
import ReusableText from "../../components/ReusableText";
import ReusableContainer from "../../components/ReusableContainer";
import Card from "../../components/Card";

const LandingPage = () => {
  const location = useLocation();

  const handleCardClick = () => {
    alert("Daffascript");
  };

  return (
    <main className="container">
      <div>React App</div>
      <h4>Props from auth page: {location?.state?.text}</h4>
      <ReusableText description="This is ReusableText property" />
      <ReusableText description="can change twice" />
      <ReusableContainer>
        <button>This is a childern</button>
      </ReusableContainer>
      <div className="card-layout">
        {data?.map((item: any) => {
          return (
            <Card
              title={item?.title}
              description={item?.description}
              imageUrl={item?.imageUrl}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
    </main>
  );
};

export default LandingPage;
