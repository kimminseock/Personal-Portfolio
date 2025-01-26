
function MyButton() {
    const [isClicked, selISClicked] = React.useState(false);

    return React.createElement(
            "button",
        {onClick: () =>  selISClicked(true) },
            isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));