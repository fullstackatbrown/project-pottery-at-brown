import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="join-us-container grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-semibold text-center sm:text-left">Join Us</h1>
        <p className="text-lg text-center sm:text-left mb-8">
          Become a member of the Pottery at Brown community! Enjoy access to our
          studio, events, and more.
        </p>

        <section className="membership-details mb-8">
          <h2 className="text-2xl font-semibold text-center sm:text-left mb-4">
            Membership Benefits
          </h2>
          <ul className="list-inside list-disc text-base text-center sm:text-left">
            <li>Access to the studio during open hours</li>
            <li>Discounts on workshops and events</li>
            <li>Exclusive member-only events</li>
            <li>And much more!</li>
          </ul>
        </section>

        <section className="membership-levels mb-8">
          <h2 className="text-2xl font-semibold text-center sm:text-left mb-4">
            Membership Levels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="membership-level p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">Basic Membership</h3>
              <p className="text-base">Access to the studio during open hours.</p>
              <p className="font-semibold text-lg mt-4">$50/month</p>
            </div>

            <div className="membership-level p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">Premium Membership</h3>
              <p className="text-base">Access to the studio + Discounts on workshops.</p>
              <p className="font-semibold text-lg mt-4">$100/month</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/sign-up"
          >
            <span className="text-base">Sign Up Now</span>
          </a>
        </div>
      </main>
    </div>
  );
}
