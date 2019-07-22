export default $(".block__title").click(function(e) {
    let $this = $(this);
  
    if ($this.siblings().hasClass("open")) {
      $this.siblings().removeClass("open");
      $this.children('h2.title').removeClass("open");
    } else {
      $this.siblings().addClass("open");
      $this.children('h2.title').addClass("open");
    }
  });