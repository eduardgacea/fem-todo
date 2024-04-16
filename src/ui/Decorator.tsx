import styled from "styled-components";

type DecoratorProps = {
    onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const StyledDecorator = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid gray;
`;

function Decorator({ onClick }: DecoratorProps) {
    return <StyledDecorator onClick={onClick}></StyledDecorator>;
}

export default Decorator;
