export const AddButton = ({ text, onClick, style }) => {
  return (
    <button
      style={
        style === undefined
          ? { backgroundColor: "#196d91", color: "#fff" }
          : style
      }
      type="button"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export const CancelButton = ({ onClick, style }) => {
  return (
    <button
      style={{ backgroundColor: "#ff0000", color: "#fff" }}
      type="button"
      onClick={() => onClick()}
    >
      Cancel
    </button>
  );
};

export const SubmitButton = ({text}) => {
  return (
    <button style={{ backgroundColor: "#196d91", color: "#fff" }} type="submit">
      {text}
    </button>
  );
};
