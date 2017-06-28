/* global window, require */

require.config({

    //waitSeconds: 60,

    paths: {
        montage: './node_modules/montage/montage',
        bluebird: './node_modules/bluebird/js/browser/bluebird',
        mr: './node_modules/mr/bootstrap'
    },

    shim: {

        montage: {
            deps: []
        }
    }
});
