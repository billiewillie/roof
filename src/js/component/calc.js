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
  
  function calcForm(offer, special, initSum){
    let sum = initSum;
    offer.querySelector('span.offer__price--sum').innerHTML = sum + ' p.';
    const options = Array.from(offer.querySelectorAll('li.list__item'));
    const hours = offer.querySelector('select.select.select__time');
    const people = document.querySelector('form.offer__item.party select.select.select__people');
    const addBtn = offer.querySelector('a.additional__button');
    const optionsClose = offer.querySelector('.options__close');
    const offerBtn = offer.querySelector('.options a.button');
    const contactBtn = offer.querySelector('a.button.contact__btn');
    const closeBtn = offer.querySelector('.offer__item--contact a.close');

    addBtn.addEventListener('click', function(e) {
      e.target.parentNode.children[7].classList.add('open');
    });

    optionsClose.addEventListener('click', function(e) {
      e.target.parentNode.parentNode.parentNode.classList.remove('open');
    });

    offerBtn.addEventListener('click', function(e) {
      e.target.parentNode.parentNode.classList.remove('open');
    });

    contactBtn.addEventListener('click', function(e) {
      e.target.parentNode.children[8].classList.add('open');
    });

    closeBtn.addEventListener('click', function(e) {
      e.target.parentNode.classList.remove('open');
    });

    for(let i = 0; i < options.length; i++) {
      const checkBox = options[i].children[2].children[0];
      options[i].addEventListener('click', function(e) {
        options[i].classList.toggle('checked');
        if(checkBox.checked == true && special === true && i === 3) {
          options[i].classList.add('checked');
          offer.querySelector('span.offer__price--sum').innerHTML = ' p.';
        } else if (checkBox.checked == true){
          checkBox.checked = false;
          sum -= services[i].price;
          offer.querySelector('span.offer__price--sum').innerHTML = sum + ' p.';
        } else {
          checkBox.checked = true;
          sum += services[i].price;
          offer.querySelector('span.offer__price--sum').innerHTML = sum + ' p.';
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
          offer.querySelector('span.offer__price--sum').innerHTML = 1000 + sum + ' p.';
        } else if(hours.children[2].selected === true) {
          offer.querySelector('span.offer__price--sum').innerHTML = 1500 + sum + ' p.';
        } else offer.querySelector('span.offer__price--sum').innerHTML = sum + ' p.';
      })
    }
      
    for(let i = 0; i < people.children.length; i++){
      people.addEventListener('change', function(e) {
        if(people.children[1].selected === true) {
          offer.querySelector('span.offer__price--sum').innerHTML = 9000 + sum + ' p.';
        } else if(people.children[2].selected === true) {
          offer.querySelector('span.offer__price--sum').innerHTML = 17000 + sum + ' p.';
        } else offer.querySelector('span.offer__price--sum').innerHTML = sum + ' p.';
      })
    }
  }
  
  calcForm(formReg, false, 5500);
  calcForm(formPink, true, 6500);
  calcForm(formRed, true, 13000);
  calcForm(formParty, false, 12000);

}

export default calc();