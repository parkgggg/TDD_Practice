import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  //APP 컴포넌트 렌더링
  render(<App />);
  //Screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const counterElement = screen.getByTestId("counter");
  //ID가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
    render(<App />);
    const buttonElement = screen.getByTestId("minus-button");
    //ID가 counter인 엘레멘트의 텍스트가 "-"인지 테스트
    expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  //ID가 counter인 엘레멘트의 텍스트가 "+"인지 테스트
  expect(buttonElement).toHaveTextContent("+");
})

test('When the + button pressed, the counter changes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  //buttonElement에 대해 클릭 이벤트를 발생시킨다(테스트를 위해)
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  //0이었던 count가 1로 변하는지 체크
  expect(counterElement).toHaveTextContent(1);
})

test('Is onoff button color blue', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("onoff-button");
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"});
})

test('When onoff button clicked, +- button being disabled.', () => {
  render(<App />);
  const onoffButton = screen.getByTestId("onoff-button");
  fireEvent.click(onoffButton);
  const plusButton = screen.getByTestId("plus-button");
  expect(plusButton).toBeDisabled();
})


