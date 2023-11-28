interface InfoMessageProps {
  searchQuery: string;
  haveSelected: boolean;
  shipsFound: number;
}

export default function InfoMessage({
  searchQuery,
  haveSelected,
  shipsFound,
}: InfoMessageProps) {
  const selectedShipsMessage = () => {
    if (!haveSelected) {
      return 'Nothing selected. To begin, please choose a category below or set filters/search query above.';
    }

    return `${searchQuery ? `Search query: "${searchQuery}".` : ''}  ${
      shipsFound > 0
        ? `Total ships found: ${shipsFound}`
        : 'Nothing found with the specified parameters.'
    }`;
  };

  return (
    <div>
      <span>{selectedShipsMessage()}</span>
    </div>
  );
}
