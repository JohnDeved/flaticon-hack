// download page
$('.download').parent().append(`<button onclick="getSvg()" class="bj-button fullwidth">Pirate that sh*t</button>`)
getSvg = () => {
  fetch("/editor/icon/svg/"+$('#icon_id').attr('value')+'?type=sticker')
    .then(r => r.json())
    .then(r => {
      const a = document.createElement('a')
      a.href = r.url
      a.download = `${$('#keyword').attr('value')}.svg`
      a.click()
    })
}

// editor page
$(".edit-icons-user-actions").after('<button onclick="grabSvg()" class="bj-button mg-left-lv1">pirate that sh*t</button>')
grabSvg = () => {
  const svg = $('.icon-holder').html().replace(/(width|height)="[^"]*"/g, '')
  const url = `data:image/svg+xml,${encodeURIComponent(svg)}`
  const a = document.createElement('a')
  a.href = url
  a.download = `${$('#keyword').attr('value')}.svg`
  a.click()
}
