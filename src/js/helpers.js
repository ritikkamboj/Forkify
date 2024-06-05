
import { TIMEOUT_SEC } from "./config";





const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };



export const getJson = async function(url)
{
    try
    {
        const res = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]) ;  // here this url is for specific id as we can see also

    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      throw new Error(`${data.message}, ${res.status}`)
    }
    return data;
}
catch(err)
{
   throw err;
// console.log(`${err} error in helper file `)

}
}