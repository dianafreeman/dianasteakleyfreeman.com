import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import { FlexColumn, FlexRow, FlexDiv } from "../components/Flex";

// const Section = styled(FlexRow)`
//   padding: ${({ theme }) => theme.spacing.sm} 0;
//   margin: auto;
// `;

// const Display1 = styled.h1`
//   font-size: 4.5rem;
//   font-weight: 300;
//   text-align: center;
//   margin: unset;
//   line-height: 1.2;
//   @media screen and (min-width: 768px) {
//     font-size: calc(4.5rem + 2vw);
//   }
// `;

// const Sub2 = styled.p`
//   font-size: 1.5rem;
//   font-weight: 300;
//   line-height: 1.2;
//   margin: unset;
//   text-align: center;
//   @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
//     font-size: calc(1.5rem + 0.5vw);
//   }
// `;

// const FlexSceneArea = styled(FlexDiv)`
//   min-height: 370px;
//   margin: unset;
//   height: 50vh;
//   }
// `;

function ErrorPage() {
  const [ready, setReady] = useState(false);

  // delay even the attempt at rendering
  useEffect(() => void setTimeout(() => setReady(true), 500), []);

  return (
    <div>
      {/* <Helmet>
        <title>404 Not Found | DSF.com</title>
      </Helmet>

      <Section justify="center">
        <FlexColumn justify="center">
          <FlexColumn justify="center">
            <Display1 style={{ color: colors.text }}>404</Display1>
            <Sub2 style={{ color: colors.text }}>
              This is not the page you&apos;re looking for.
            </Sub2>
          </FlexColumn>
          <FlexSceneArea>
            {ready ? (
              <Scene modelText="?" />
            ) : (
              <a.div
                style={{
                  width: "100%",
                  height: "100%",
                  color: colors.text,
                  textAlign: "center",
                }}
              >
                <p>Loading...</p>
              </a.div>
            )}
          </FlexSceneArea>
        </FlexColumn>
      </Section> */}
    </div>
  );
}

export default ErrorPage;