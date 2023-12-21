import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Welcome to Cloud Vault:

        <span className="sm:block"> Cloud as a Service </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Introducing Cloud Vault, your key to effortless and secure cloud storage. 
        With Cloud Vault, enjoy the perfect fusion of convenience and privacy as you effortlessly store, organize, and access your data from 
        anywhere. 
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href={'/dashboard'}>
          <div
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto cursor-pointer"
          >
            Get Started
          </div>
        </Link>
       

        <div
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto cursor-pointer"
        >
          Learn More
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
