import { MOBILE_SIZE, MOBILE_BREAKPOINT, DESKTOP_SIZE } from "../config/config";

import styled from "styled-components";

const StyledLayout = styled.div`
    max-width: ${MOBILE_SIZE};
    margin: 0 auto;
    transform: translateY(var(--size-1300));
    display: flex;
    flex-direction: column;

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        max-width: ${DESKTOP_SIZE};
    }
`;

function Layout({ children }: { children: React.ReactNode }) {
    return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
