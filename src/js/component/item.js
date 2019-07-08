export default class Item {
  constructor(el) {
    this.el = el;
  }

  getItem() {
    const item = document.createElement('li');
    item.classList.add('item');
    if (this.el.status === 'продано') {
      item.classList.add('sold');
    } else if (this.el.status === 'забронировано') {
      item.classList.add('booked');
    };

    const itemTop = document.createElement('div');
    itemTop.classList.add('item__top');
    item.append(itemTop);

    const itemTopText = document.createElement('div');
    itemTopText.classList.add('item__top--text');
    itemTop.append(itemTopText);

    const itemDiscount = document.createElement('span');
    itemDiscount.classList.add('item__discount');
    itemDiscount.innerHTML = `-${this.el.discount}%`;
    if (this.el.discount > 0) {
      itemTopText.append(itemDiscount);
    }

    const itemAttention = document.createElement('span');
    itemAttention.classList.add('item__attention');
    itemAttention.innerHTML = `шок цена!`;
    if (this.el.discount > 6) {
      itemTopText.append(itemAttention);
    }

    const itemTopStar = document.createElement('div');
    itemTopStar.classList.add('item__top--star');
    itemTop.append(itemTopStar);

    const itemTopStarImg = document.createElement('img');
    itemTopStarImg.setAttribute('src', '/assets/img/star-1.svg');
    itemTopStarImg.setAttribute('alt', 'star');
    itemTopStar.append(itemTopStarImg);

    const itemContent = document.createElement('div');
    itemContent.classList.add('item__content');
    item.append(itemContent);

    const itemPic = document.createElement('div');
    itemPic.classList.add('item__pic');
    itemContent.append(itemPic);

    const itemPicImg = document.createElement('img');
    itemPicImg.setAttribute('src', `./assets/img/rooms/${this.el.image}`);
    itemPicImg.setAttribute('alt', 'pic');
    itemPic.append(itemPicImg);

    const itemTitle = document.createElement('h2');
    let roomCount;
    switch (this.el.rooms) {
      case 1:
        roomCount = `однокомнаятная`;
        break;
      case 2:
        roomCount = `двухкомнатная`;
        break;
      case 3:
        roomCount = `трехкомнатная`;
        break;
      case 3:
        roomCount = `четырехкомнатная`;
        break;
      default:
        roomCount = `студия`;
        break;
    };
    itemTitle.innerHTML = `${roomCount} №${this.el.number}`;
    itemTitle.classList.add('item__title');
    itemContent.append(itemTitle);

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item__info');
    itemContent.append(itemInfo);

    const itemGarnish = document.createElement('p');
    itemGarnish.classList.add('item__garnish');
    itemGarnish.innerHTML = `${this.el.garnish}`;
    itemInfo.append(itemGarnish);

    const itemArea = document.createElement('p');
    itemArea.classList.add('item__area');
    itemArea.innerHTML = `${this.el.area} M²`;
    itemInfo.append(itemArea);

    const itemFloor = document.createElement('p');
    itemFloor.classList.add('item__floor');
    itemFloor.innerHTML = `${this.el.floor}/${this.el.floorTotal}`;
    itemInfo.append(itemFloor);

    const itemStatus = document.createElement('p');
    itemStatus.classList.add('item__status');
    itemStatus.innerHTML = `${this.el.status}`;
    item.append(itemStatus);

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item__price');
    itemPrice.innerHTML = `${this.el.price.toLocaleString()} руб.`;
    itemContent.append(itemPrice);

    const infoExtra = function (e) {
      const getExtra = document.createElement('span');
      getExtra.classList.add('info__extra');
      if (e === itemArea) {
        getExtra.innerHTML = `площадь`;
      } else if (e === itemFloor) {
        getExtra.innerHTML = `этаж`;
      };
      e.append(getExtra);
    }

    infoExtra(itemArea);
    infoExtra(itemFloor);

    return item;
  }
}