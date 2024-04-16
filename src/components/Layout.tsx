import styled from "styled-components";

const StyledLayout = styled.div`
    max-width: 768px;
    margin: 0 auto;
    transform: translateY(5rem);
    display: flex;
    flex-direction: column;
    gap: var(--size-400);
`;

function Layout({ children }: { children: React.ReactNode }) {
    return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
