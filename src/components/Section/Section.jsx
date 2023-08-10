// import { Statistics } from 'components/Statistics/Statistics';
import { Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
