export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About us
            </h2>
            <p className="mt-6 text-gray-600">Welcome to FakeShop!</p>
            <p className="mt-6 text-gray-600">
              At FakeShop, we&apos;re passionate about providing you with the
              best online shopping experience. Whether you&apos;re looking for
              the latest fashion trends, gadgets, home essentials, or gifts for
              your loved ones, we&apos;ve got you covered.
            </p>

            <p className="mt-6 text-gray-600">
              Whether you&apos;re browsing for yourself or searching for the
              perfect gift, we&apos;re here to make your shopping journey
              seamless. Thank you for choosing FakeShop, where convenience meets
              quality.
            </p>
            <p className="mt-6 text-gray-600">Happy Shopping!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
