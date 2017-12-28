import { createStore } from 'redux';

function simplelist(state = [], action) {
    if (action.type === 'ADD') {
        return [ 
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(simplelist);

const addbutt = document.querySelectorAll('.add')[0];
const pointInput = document.querySelectorAll('.listInput')[0];
const list = document.querySelectorAll('.list')[0];



store.subscribe(() => {
    console.log('subscribe', store.getState());
    list.innerHTML = '';
    pointInput.value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
}) 

addbutt.addEventListener('click', () => {
    const pointName = pointInput.value;
    store.dispatch({ type: 'ADD', payload: pointName });
});