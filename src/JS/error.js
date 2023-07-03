const styleSheet = document.createElement("style");   //style for the error card
styleSheet.textContent = `
.error-card{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  font-family: "Helvetica", "Arial", sans-serif;
  padding: 3rem 5rem;
  background-color: #FAE6E6;
  box-shadow: inset 6px 0 #CC0000;
  font-size: 1.5rem;
`;

const createErrorCard = (error) => {
  // Create a new div element to hold the error card.
  const errorCard = document.createElement("div");
  errorCard.className = "error-card";

  // Add the error message to the error card.
  const errorMsg = document.createElement("p");
  errorMsg.textContent = error.message;
  errorCard.appendChild(errorMsg);

  document.head.appendChild(styleSheet);
  // Return the error card.
  return errorCard;
};

export {createErrorCard}