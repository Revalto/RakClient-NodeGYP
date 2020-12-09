const { connect } = require('./build/Debug/samp');

const onCallbackSAMP = (msg) => {
    console.log(`[ onCallbackSAMP ]: ${msg}`);
}

const start = () => {
    connect(onCallbackSAMP);
}

start();