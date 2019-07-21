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

  const formDesktopReg = document.querySelector('.tab__inner--item.regular');
  const formDesktopPink = document.querySelector('.tab__inner--item.pink');
  const formDesktopRed = document.querySelector('.tab__inner--item.red');
  const formDesktopParty = document.querySelector('.tab__inner--item.party');
  
  function calcForm(offer, special, initSum){
    let sum = initSum;

    offer.querySelector('input.offer__price--sum').value = sum + ' p.';

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
          offer.querySelector('input.offer__price--sum').value = sum + ' p.';
        } else if (checkBox.checked == true){
          checkBox.checked = false;
          sum -= services[i].price;
          offer.querySelector('input.offer__price--sum').value = sum + ' p.';
        } else {
          checkBox.checked = true;
          sum += services[i].price;
          offer.querySelector('input.offer__price--sum').value = sum + ' p.';
        }
      })

      if(checkBox.checked == true && special === true) {
        options[i].classList.add('checked');
      }
    }

    for(let i = 0; i < hours.children.length; i++) {
      hours.addEventListener('change', function(e) {
        if(hours.children[1].selected === true) {
          offer.querySelector('input.offer__price--sum').value = 1000 + sum + ' p.';
        } else if(hours.children[2].selected === true) {
          offer.querySelector('input.offer__price--sum').value = 1500 + sum + ' p.';
        } else offer.querySelector('input.offer__price--sum').value = sum + ' p.';
      })
    }
      
    for(let i = 0; i < people.children.length; i++){
      people.addEventListener('change', function(e) {
        if(people.children[1].selected === true) {
          offer.querySelector('input.offer__price--sum').value = 9000 + sum + ' p.';
        } else if(people.children[2].selected === true) {
          offer.querySelector('input.offer__price--sum').value = 17000 + sum + ' p.';
        } else offer.querySelector('input.offer__price--sum').value = sum + ' p.';
      })
    }
  }

  function calcDesktop(offer, special, initSum){
    let sum = initSum;
    let time = 0;
    let checks = 0;
    let crowd = 0;
    offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';

    const options = Array.from(offer.querySelectorAll('li.list__item'));
    const hours = offer.querySelector('select.select.select__time');
    const people = document.querySelector('.tab__inner--item.party select.select.select__people');
    const contactBtn = offer.querySelector('a.button.contact__btn');
    const offerItemContact = offer.querySelector('.offer__item--contact');
    const closeBtn = offer.querySelector('.offer__item--contact a.close');

    contactBtn.addEventListener('click', function(e) {
      offerItemContact.classList.add('open');
    });

    closeBtn.addEventListener('click', function(e) {
      offerItemContact.classList.remove('open');
    });

    for(let i = 0; i < options.length; i++) {
      const checkBox = options[i].children[2].children[0];
      options[i].addEventListener('click', function(e) {
        options[i].classList.toggle('checked');
        if(checkBox.checked == true && special === true && i === 3) {
          offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';
        } else if (checkBox.checked == true){
          checkBox.checked = false;
          sum -= services[i].price;
          offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';
        } else {
          checkBox.checked = true;
          sum += services[i].price;
          offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';
        }
      })

      if(checkBox.checked == true && special === true) {
        options[i].classList.add('checked');
      }
    }

    for(let i = 0; i < hours.children.length; i++) {
      hours.addEventListener('change', function(e) {
        if(hours.children[0].selected === true) {
          time = 0;
        } else if(hours.children[1].selected === true) {
          time = 1000;
        } else if(hours.children[2].selected === true) {
          time = 1500;
        } else {
          time = 0;
        } 
        offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';
        return time;
      })
    }

    for(let i = 0; i < people.children.length; i++){
      people.addEventListener('change', function(e) {
        if(people.children[1].selected === true) {
          crowd = 9000;
        } else if(people.children[2].selected === true) {
          crowd = 17000;
          offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';
        } else {
          crowd = 0;
        } 
        offer.querySelector('.order input.price').value = checks + time + sum + crowd + ' p.';
        return crowd;
      })
    }
  }
  
  calcForm(formReg, false, 5500);
  calcForm(formPink, true, 6500);
  calcForm(formRed, true, 13000);
  calcForm(formParty, false, 12000);

  calcDesktop(formDesktopReg, false, 5500);
  calcDesktop(formDesktopPink, true, 6500);
  calcDesktop(formDesktopRed, true, 13000);
  calcDesktop(formDesktopParty, false, 12000);

}

export default calc();