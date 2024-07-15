import logo from "../../assets/image/Z int school logo.jpg";
import uk from "../../assets/image/Uk.jpg";
import islamik from "../../assets/image/islamik.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-blue-600 text-center m-5">
        Why choose us ?
      </h1>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="ZIS"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex">
            <div>
              <img className="lg:w-60" src={logo} alt="" />
            </div>
            <div className="w-2/3">
              <p className="space-y-2 pl-6">
                <h1 className="font-bold text-xl text-blue-500 pb-3">
                  At Z International School we offer:
                </h1>
                1.Superb Quality British education <br />
                2.Unique Islamic Schooling <br />
                3.Opportunity to become Hafez & Hafeza and lots more <br />
                Our young talented students must be prepared with something more
                than bookish skills as the world we live in shrinks due to
                technology. They need access to the best learning resources
                available in order to develop into our country’s intellectual
                elite – the leaders who will form the country’s future destiny –
                in the coming years. <br />
                They receive an education at Guidance International School that
                reinforces their heart of awareness through our program and aims
                to exceed academic expectations through a completely diverse
                variety of extra-curricular and co-curricular events, as well as
                additional opportunities to cultivate a culturally and
                academically diverse mindset toward globalization. When you
                choose Guidance International School, you will be confident that
                your child can achieve our shared objective of becoming global
                citizens who are mindful of their responsibilities in this life
                and in the afterlife while still leading a good life as they
                adapt their religious traditions to everyday life.
              </p>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="British Education"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex">
            <div>
              <img className="lg:w-60" src={uk} alt="" />
            </div>
            <div className="w-2/3">
              <p className="space-y-2 pl-6">
                <h1 className="font-bold text-xl text-red-700 pb-3">
                  Superb Quality British education{" "}
                </h1>
                GIS focuses on the holistic, the social, emotional, mental,
                physical, and cognitive development of each student. It prepares
                the child for life, not just for the future assessments. <br /> At GIS,
                we prepare students all-round through a globally recognized
                curriculum of the Cambridge Pathway (Cambridge Primary,
                Cambridge Lower Secondary, Cambridge Upper Secondary and
                Cambridge Advanced) with qualification checkpoints designed to
                ensure a solid foundation up to Cambridge O Level and A Level
                qualifications. <br /> Preparing young pupils is a challenging
                endeavour in itself and therefore at GIS, we ensure that our
                students complete all of their schooling under our tutelage and
                do not require any private tuition all the way up to A-Level,
                Alhamdulillah.
              </p>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Islamic Schooling"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex">
            <div>
              <img className="lg:w-60" src={islamik} alt="" />
            </div>
            <div className="w-2/3">
              <p className="space-y-2 pl-6">
                <h1 className="font-bold text-xl text-orange-500 pb-3">
                Unique Islamic Schooling
                </h1>
                GIS focuses on the holistic, the social, emotional, mental,
                physical, and cognitive development of each student. It prepares
                the child for life, not just for the future assessments. <br /> At GIS,
                we prepare students all-round through a globally recognized
                curriculum of the Cambridge Pathway (Cambridge Primary,
                Cambridge Lower Secondary, Cambridge Upper Secondary and
                Cambridge Advanced) with qualification checkpoints designed to
                ensure a solid foundation up to Cambridge O Level and A Level
                qualifications. <br /> Preparing young pupils is a challenging
                endeavour in itself and therefore at GIS, we ensure that our
                students complete all of their schooling under our tutelage and
                do not require any private tuition all the way up to A-Level,
                Alhamdulillah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
