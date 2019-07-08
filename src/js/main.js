import axios from 'axios';
import * as burger from './component/nav';
import Item from './component/item';

const list = document.querySelector('.list');
const title = document.querySelector('h1.title');
const button = document.querySelector('.button');
const content = document.querySelector('.content');

const state = {
  show: 12,
  visible: 0
};

const getData = () => {

  axios('./assets/data/data.json')
    .then(result => {
      
      const res = result.data;

      switch (res.length.toString().slice(-1)) {
        case '-1':
          title.innerHTML = `Найдена ${result.data.length} квартира`;
          break;
        case '-2':
        case '-3':
        case '-4':
          title.innerHTML = `Найдены ${result.data.length} квартиры`;
          break;
        default:
          title.innerHTML = `Найдено ${result.data.length} квартир`;
          break;
      }

      const showItems = (start, length, array) => {

        const visibleLength = start;

        if ((visibleLength + length) <= array.length) {
          for (let i = visibleLength; i < (visibleLength + length); i++) {
            const item = new Item(array[i]);
            list.append(item.getItem());
            state.visible++;
          }
        } else {
          for (let i = visibleLength; i < array.length; i++) {
            const item = new Item(array[i]);
            list.append(item.getItem());
            state.visible++;
            button.style.display = 'none';
          }
        }
      }

      showItems(state.visible, state.show, res);
    })
    .catch(error => console.log(error));
};

getData();

content.addEventListener('click', function (e) {
  getData();
});