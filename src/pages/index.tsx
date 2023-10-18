import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import {Button} from "~/components/Button";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PoE Strategies</title>
      </Head>
        <body className="h-screen bg-blue-200 flex items-center justify-around">
        <aside className="grid grid-rows-3 h-1/3 pt-2 px-2 bg-red-200 rounded-md place-items-center">
            <h1 className="text-center"> This is the calculation bar</h1>
            <div className="flex-col">
                <label className="flex"> Runs:
                    <input className=""/>
                </label>
                <label className="flex">
                    Time / Run:
                    <input/>
                </label>
            </div>
            <Button label={"Calculate!"}/>
        </aside>
        <div className="flex h-2/3 w-2/3 pt-2 px-2 justify-between bg-red-200 rounded-md">
            <Button label="Shaper Fragments"/>
            <Button label="Shaper Fragments"/>
            <Button label="Shaper Fragments"/>

        </div>
        </body>
    </>
  );
}
