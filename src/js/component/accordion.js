export default $(".faq__item--title").click(function(e) {
    e.preventDefault();
  
    let $this = $(this);
  
    if ($this.parent().hasClass("open")) {
      $this.parent().removeClass("open");
    } else {
      $this
        .parent()
        .find(".faq__item")
        .removeClass("open");
      $this.parent().find(".faq__item");
      $this.parent().toggleClass("open");
    }
  });