import type { NextApiRequest, NextApiResponse } from 'next'
import { create } from 'ipfs-http-client'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const client = create()
  //   const data = client.files.ls("/");
  //   const go = await client.files.stat("/");
  //   const directory = await client.ls(
  //     "QmfSt9W5N5d2wRRVop35yKGWS7iRB3CuJAL4C2rJbGSqoj"
  //   );
  const ggg = await client.ls('QmdoFqwrWar4718bCjR2LRZmNRDjTjiv1yEFB27xMT9DFp')
  console.log('ggg', ggg)
  //   console.log("GDFGDFGDF", directory);
  const items = []
  for await (const c of ggg) {
    console.log('MFS Entry', c)
    items.push(c)
  }
  //   let string = "";
  //   const decoder = new TextDecoder();
  //   for await (const file of ggg) {
  //     console.log("SDFS", file);
  //     items.push(file);
  //     //   string += decoder.decode(chunk);
  //   }
  res.status(200).json({ data: items })
}
