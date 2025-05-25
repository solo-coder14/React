export const helper = {};

helper.display = (text, setCards, cards) => {
    setCards(text.slice(0, 2));
    console.log(cards);
}
helper.display2 = (text, setCards, cards) => {
    setCards(text.slice(0, 3));
    console.log(cards);
}
