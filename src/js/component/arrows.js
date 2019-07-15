function arrows(e){

  const left = Array.from(document.querySelectorAll('.arrows .left'));
  const right = Array.from(document.querySelectorAll('.arrows .right'));

  for(let i = 0; i < right.length; i++){
    right[i].addEventListener('click', function(e) {
      let mRight = getComputedStyle(e.target.parentNode.parentNode).marginRight;
      e.target.parentNode.parentNode.style.marginRight = 'calc(100%+' + parseInt(mRight) - 60 + 'px)';
      console.log(e.target.parentNode.parentNode.style.marginRight);
    });
  }

  for(let i = 0; i < left.length; i++){
    left[i].addEventListener('click', function(e) {
      let mLeft = getComputedStyle(e.target.parentNode.parentNode).marginLeft;
      e.target.parentNode.parentNode.style.marginLeft = '' + parseInt(mLeft) - 60 + 'px';
      console.log(e.target.parentNode.parentNode.style);
    });
  }
}

export default arrows();