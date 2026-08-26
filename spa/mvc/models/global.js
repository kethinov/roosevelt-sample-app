module.exports = (req, res) => {
  const model = {
    content: {
      appTitle: 'My Roosevelt Sample App',
      pageTitle: '{content.appTitle}', // override this on a per route level
      titleTag: '{content.appTitle} — {content.pageTitle}'
    }
  }
  return model
}
