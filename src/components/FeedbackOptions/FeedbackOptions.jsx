import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};
