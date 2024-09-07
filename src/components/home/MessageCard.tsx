import CardWrapper from "../wrapper/CardWrapper";
import { ChildProps } from "../wrapper/LayoutWrapper";

const MessageCard: React.FC<ChildProps> = ({ children }) => {
  return (
    <CardWrapper extra_styling="grid grid-cols-10  rounded-md gap-8 bg-lightblack">
      {children}
    </CardWrapper>
  );
};

export default MessageCard;
