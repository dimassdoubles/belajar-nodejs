function simplePromise() {
    return Promise.resolve("Eko");
}

async function run() {
    const name = await simplePromise();
    console.info(name);
}

run();
