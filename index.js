$(function() {
  $('form').submit(event=> {
    event.preventDefault();
    const entry = $(this).find('input[id="shopping-list-entry"]').val();
    if(entry != ''){
      const item = $(`<li><span class="shopping-item">${entry}</span><div class="shopping-item-controls"><button class="shopping-item-toggle button-check"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
      
      $('.shopping-list').append(item);
      $(this).find('input[id="shopping-list-entry"]').val('');
    } else {
      alert('Are you shopping for nothin\'? :)')
    }

  });
  
  $('ul').on('click','.shopping-item-toggle',(function(event){
    event.stopPropagation();
    const clickedButton = $(event.currentTarget);
    clickedButton.parent().prev().toggleClass('shopping-item__checked');
  }));

  $('ul').on('click','.shopping-item-delete',(function(event){
    event.stopPropagation();
    const clickedButton = $(event.currentTarget);
    clickedButton.parent().parent().remove();
  }));


  
});
  
