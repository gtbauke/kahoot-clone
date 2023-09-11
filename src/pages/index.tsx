// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
// import Link from "next/link";

// import { api } from "~/utils/api";

export default function Home() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => {
        if (timer <= 0) {
          clearInterval(interval);
          return 0;
        }

        return timer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Kahoot Clone</title>
        <meta name="description" content="Kahoot Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-950">
        <p className="mb-8 text-3xl text-white">{timer}</p>

        <h2 className="text-4xl text-white">
          O que é a função de onda na mecânica quântica?
        </h2>

        <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-4 px-32">
          <div className="flex flex-row items-center gap-4 rounded-md bg-green-500 p-8 text-xl text-white">
            <div className="h-[40px] w-[40px] rounded bg-green-800" />
            <span className="flex-1">
              Representação do estado de um sistema de partículas quânticas
            </span>
          </div>

          <div className="flex flex-row items-center gap-4 rounded-md bg-red-500 p-8 text-xl text-white">
            <div className="h-[40px] w-[40px] rounded-full bg-red-800" />
            <span className="flex-1">
              Descrição do movimento de uma partícula qualquer
            </span>
          </div>

          <div className="flex flex-row items-center gap-4 rounded-md bg-yellow-500 p-8 text-xl text-white">
            <div className="h-[40px] w-[40px] rotate-45 rounded bg-yellow-800" />
            <span className="flex-1">
              Função que representa a energia do sistema em qualquer instante
            </span>
          </div>

          <div className="flex flex-row items-center gap-4 rounded-md bg-blue-500 p-8 text-xl text-white">
            <div className="mx-auto h-0 w-0 rounded border-b-[40px] border-l-[25px] border-r-[25px] border-solid border-b-blue-800 border-l-transparent border-r-transparent" />
            <span className="flex-1">
              Função que representa a probabilidade de encontrar uma partícula
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
