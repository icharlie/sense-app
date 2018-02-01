// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//
const searchInPage = require('electron-in-page-search').default
const electron = require('electron')
const {remote} = electron
const Mousetrap = require('mousetrap')
const inPageSearch = searchInPage(remote.getCurrentWebContents());



Mousetrap.bind([ 'command+f', 'ctrl+f' ], () => {
  inPageSearch.openSearchWindow()
})
