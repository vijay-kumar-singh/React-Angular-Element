const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/ng-profile/main.js',
        './dist/ng-profile/polyfills.js',
        './dist/ng-profile/runtime.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/ng-profile.js')
    console.info('Angular Elements created successfully!')

})()
