const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="border flex flex-col justify-between py-3 w-[20rem] rounded-md p-2 bg-gray-900">
            <div className="p-5 font-extrabold rounded-full bg-gray-500 inline-block self-center text-lg m-2 ">WD</div>
            <div className=" capitalize p-2 text-lg m-2">
              <p>we provide the best website design with user friendly UI.</p>
              <p>Try to give us a try. and we will make you confirm that your decision would the best to choose us</p>
            </div>
              <button className="border self-center px-5 rounded-md p-2 ">Contact</button>
            {/* <div className="flex">
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
