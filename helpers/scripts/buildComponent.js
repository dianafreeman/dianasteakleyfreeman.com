const fs = require('fs')

const COMPONENT_DIR = './src/components'

fs.readdir('./src/components', (err, files) => {
  if (err) {
    return console.error(err)
  }
  files.forEach(f => {
    console.log(typeof f)
  })
})



function getFolderContent() {
  fs.readdir('./src/components', (err, files) => {
    files.forEach(f => {
      console.log(typeof f)
    })
  })
}

function getByComponentName(searchName) {
  fs.readdir('./src/components', (err, files) => {
    try {
      files.forEach(f => {
        console.log(typeof f)
      })
    } catch (err) {}
  })
}
