import styled from "styled-components";

export default function ColorPalette({ colors }) {
  console.log("colors in colorpalette: ", colors);
  return (
    <>
      <div className="color-palette__container">
        {colors.map((color) => {
          return (
            <StyledColor key={color} $color={color}>
              .
            </StyledColor>
          );
        })}
      </div>
    </>
  );
}

const StyledColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$color};
  color: ${(props) => props.$color};
  border-radius: 25px;
  height: 20px;
  width: 20px;
`;
