export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  // Every action has two values, type and payload.
  // Payload - clarifies the condition of the action being triggered
  // Type - describes the purpose of the action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
