import CardWrapper from "../wrapper/CardWrapper";
import { ChildProps } from "../wrapper/LayoutWrapper";

const OuterPostCard: React.FC<ChildProps> = ({ children ,triggerHandler}) => {
  return (
    <CardWrapper triggerHandler={triggerHandler} extra_styling="cursor-pointer bg-darkgray border-2-bordergray ">
      {children}
    </CardWrapper>
  );
};

export default OuterPostCard