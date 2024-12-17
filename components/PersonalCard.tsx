import Card from "./PersonalCard/Card";
import MyPicture from "./PersonalCard/MyPicture";

const PersonalCard = () => {
  return (
    <div className="pt-48 flex flex-col justify-center items-center relative">
      <MyPicture />
      <Card />
    </div>
  );
};

export default PersonalCard;
