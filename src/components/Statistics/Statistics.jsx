import { List, ListItem, Span } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage,
}) => {
  return (
    <List>
      <span>
        <ListItem>
          Good:<Span>{good}</Span>
        </ListItem>
        <ListItem>
          Neutral: <Span>{neutral}</Span>
        </ListItem>
        <ListItem>
          Bad:<Span>{bad}</Span>
        </ListItem>
      </span>
      <span>
        <ListItem>
          Total: <Span>{total}</Span>
        </ListItem>
        <ListItem>
          Positive feedback: <Span>{positivePercentage}%</Span>
        </ListItem>
      </span>
    </List>
  );
};
