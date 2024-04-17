import styled from "styled-components";

const StyledLayout = styled.div`
    max-width: 576px;
    margin: 0 auto;
    transform: translateY(var(--size-1300));
    display: flex;
    flex-direction: column;
`;

function Layout({ children }: { children: React.ReactNode }) {
    return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
