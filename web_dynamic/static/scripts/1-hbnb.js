window.addEventListener('load', function () {
  // task 2
  const amenityIdSave = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIdSave[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityIdSave[$(this).attr('data-id')];
    }
    if (Object.keys(amenityIdSave).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityIdSave).join(', '));
    }
  });
});
