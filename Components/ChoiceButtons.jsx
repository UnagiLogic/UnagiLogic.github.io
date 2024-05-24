// ChoiceButtons.jsx
function ChoiceButtons({ choices, onChoiceSelected }) {
  return (
    <div className="choice-buttons">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onChoiceSelected(index)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
}
