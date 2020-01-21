import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Title = styled.h1`
  ${tw`text-1x text-3xl lg:text-3xl text-white mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const BigTitle = styled.h1`
  ${tw`font-serif text-4xl lg:text-5xl text-white mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
