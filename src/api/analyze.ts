import list from './json/list.json';

function sleep(time) {
  return new Promise(reslove => setTimeout(reslove, time));
}

export async function getSalesIPS() {
  await sleep(3 * 1000);

  return {
    code: 0,
    data: {
      data: list,
      total: list.length
    },
    message: 'ok',
    timestamp: new Date().toString()
  };
}
