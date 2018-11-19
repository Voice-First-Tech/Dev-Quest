'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.tell('Hi My Name Neil Patel, I love building apps on Amazon Alexa. Check out www.neilpatel.co/voice for more information.');
    },
});

module.exports.app = app;
