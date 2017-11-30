export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/file-drop.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.file-drop',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common'
    }
}