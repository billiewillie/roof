function calc(){

  const services = [
    {
      title: 'Живая музыка', 
      price: 2500
    },
    {
      title: 'Профессиональная фотосессия', 
      price: 2500
    },
    {
      title: 'Лепестки роз (на столе или путь от лифта к шатру)', 
      price: 1000
    },
    {
      title: 'Дизайнерский букет', 
      price: 2500
    },
    {
      title: 'Декор воздушными шарами', 
      price: 1500
    },
    {
      title: 'Прокат фотоаппарата InstaX (+ кассета на 10 снимков)', 
      price: 2000
    },
    {
      title: 'Урок по сальсе с профессиональным преподавателем', 
      price: 2000
    },
    {
      title: 'Дополнительный час', 
      price: 1000
    },
  ];
  
  const formReg = document.querySelector('form.offer__item.regular');
  const formPink = document.querySelector('form.offer__item.pink');
  const formRed = document.querySelector('form.offer__item.red');
  const formParty = document.querySelector('form.offer__item.party');
  
  function calcForm(offer, special, initSum, time){
    let sum = initSum;
    offer.querySelector('span.offer__price--sum').innerHTML = sum + 'p.';
    const options = Array.from(offer.querySelectorAll('li.list__item'));
    const hours = offer.querySelector('select.select.select__time');


    for(let i = 0; i < options.length; i++) {
      const checkBox = options[i].children[2].children[0];
      options[i].addEventListener('click', function(e) {
        options[i].classList.toggle('checked');
        if(checkBox.checked == true && special === true && i === 3) {
          options[i].classList.add('checked');
          offer.querySelector('span.offer__price--sum').innerHTML = 'p.';
        } else if (checkBox.checked == true){
          checkBox.checked = false;
          sum -= services[i].price;
          offer.querySelector('span.offer__price--sum').innerHTML = sum + 'p.';
        } else {
          checkBox.checked = true;
          sum += services[i].price;
          offer.querySelector('span.offer__price--sum').innerHTML = sum + 'p.';
        }
      })

      if(special === true) {
        options[3].classList.add('checked');
        options[3].children[2].children[0].checked = true;
        options[3].children[2].children[0].disabled = true;
      }
      
    }

    for(let i = 0; i < hours.children.length; i++) {
      hours.addEventListener('change', function(e) {
        if(hours.children[1].selected === true) {
          offer.querySelector('span.offer__price--sum').innerHTML = 1000 + sum + 'p.';
        } else if(hours.children[2].selected === true) {
          offer.querySelector('span.offer__price--sum').innerHTML = 1500 + sum + 'p.';
        } else offer.querySelector('span.offer__price--sum').innerHTML = sum + 'p.';
      })
      
    }
  }
  
  calcForm(formReg, false, 5500, 2);
  calcForm(formPink, true, 6500, 2);
  calcForm(formRed, true, 13000, 3);
  calcForm(formParty, false, 12000, 4);

}

export default calc();