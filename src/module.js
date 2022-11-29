console.log('module');

async function startup() {
  return await Promise.resolve('async start')
}
startup().then(console.log);

