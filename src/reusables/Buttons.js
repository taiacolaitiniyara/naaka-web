export const AddButton = ({ text, onClick, width }) => {
  return (
    <button
      style={{ backgroundColor: "#004c61", color: "#fff", width: `${width}px` }}
      type="button"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export const CancelButton = ({ onClick, width }) => {
  return (
    <button
      style={{ backgroundColor: "#ff0000", color: "#fff", width: `${width}px` }}
      type="button"
      onClick={() => onClick()}
    >
      Cancel
    </button>
  );
};

export const SubmitButton = ({ text, width }) => {
  return (
    <button
      style={{ backgroundColor: "#004c61", color: "#fff", width: `${width}px` }}
      type="submit"
    >
      {text}
    </button>
  );
};
