import styled from '@emotion/native';

interface StyledTextProps {
  color: string;
}

const StyledText = styled.Text<StyledTextProps>((props) => ({
  color: props.color,
}));

export default StyledText;
