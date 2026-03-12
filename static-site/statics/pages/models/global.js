module.exports = () => {
  return {
    content: {
      appTitle: 'static-site',
      pageTitle: '{content.appTitle}', // override this on a per route level
      titleTag: '{content.appTitle} — {content.pageTitle}'
    }
  }
}
