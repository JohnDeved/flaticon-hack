
function init () {
  console.log('init hack')
  // download page
  $('div.download').parent().append(`<button onclick="getSvg()" class="ayy bj-button fullwidth">Pirate that shit (needs login)</button>`)
  getSvg = () => {
    const iconId = typeof icon_id === 'number' ? icon_id : $(icon_id).attr('value')
    fetch(`/editor/icon/svg/${iconId}?type=${RESOURCE_TYPE}`)
      .then(r => r.json())
      .then(r => {
        const a = document.createElement('a')
        a.href = r.url
        a.download = `${$('#keyword').attr('value')}.svg`
        a.click()
      })
  }
  
  // check if button is already there
  if ($('.ayy2').length) return
  // editor page
  $("div.edit-icons-user-actions").after('<button onclick="grabSvg()" class="ayy2 bj-button mg-left-lv1">pirate that shit</button>')
  grabSvg = () => {
    const svg = $('.icon-holder').html().replace(/(width|height)="[^"]*"/g, '')
    const url = `data:image/svg+xml,${encodeURIComponent(svg)}`
    const a = document.createElement('a')
    a.href = url
    a.download = `${$('#keyword').attr('value')}.svg`
    a.click()
  }
}

init()

// observe for page with .download and .ayy missing next to each other
const observer = new MutationObserver((mutations, observer) => {
  $('div.download').each((i, el) => {
    if (!$(el).parent().find('.ayy').length) {
      init()
    }
  })
})
observer.observe(document.body, { childList: true, subtree: true })
