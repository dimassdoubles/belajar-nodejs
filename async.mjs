function simplePromise() {
    return Promise.resolve("Eko");
}

const name = await simplePromise();
console.info(name);
