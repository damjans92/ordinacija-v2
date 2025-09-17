import React from "react";
import Hero from "../../components/Hero";

const ReviewsPage = () => {
  return (
    <main>
      <Hero title="Utisci" imageSrc="/banner-home2.jpg" />
      <section id="reviews">
        <div className="container mx-auto ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
            <div className="flex flex-col justify-between border-1 p-10">
              <p>
                My dentist anxiety turned to happiness after a visit that
                wasn&apos;t scary at all. Dr Savković is very kind, patient,
                meticulous, and explains every step. He also lets you take the
                time you need to adjust. I&apos;ll be going back for sure 😊 …
              </p>
              <span className="uppercase">Marko Petrović</span>
            </div>
            <div className="flex flex-col justify-between border-1 p-10">
              <p>
                For years I was struggling with my dentist anxiety and pain
                intolerance until I started visiting Dr. Savkovic. He is one of
                the most patient and caring dentist I have ever met, extremely
                professional and always goes an extra mile for his patients. He
                became our family dentist, my kids adore him as each visit is
                full of intresting demonstrantions and improtant lessons related
                to teeth hygene ;) . Thank you Dr. Vitor
              </p>
              <span className="uppercase">Marko Petrović</span>
            </div>
            <div className="flex flex-col justify-between border-1 p-10">
              <p>
                I recently found out about this office and my first experience
                was great. The dentist is friendly, professional and
                trustworthy, willing to explain the entire process. Everything
                went quickly and painlessly. Highly recommended!
              </p>
              <span className="uppercase">Marko Petrović</span>
            </div>
            <div className="flex flex-col justify-between border-1 p-10">
              <p>
                I am very satisfied with the service! The dentist is
                professional, attentive and explains everything well. He is
                dedicated to his patients and inspires confidence. Highly
                recommended!
              </p>
              <span className="uppercase">Marko Petrović</span>
            </div>
            <div className="flex flex-col justify-between border-1 p-10">
              <p>
                Vitor is, above all, a great person and a professional in his
                field, who loves people and meets everyone&apos;s needs, with
                care and an approach that allows him to reach every patient. He
                has a lot of knowledge and always has the right solution for a
                dazzling smile. Every recommendation for this wonderful doctor
                🙂 …
              </p>
              <span className="uppercase">Marko Petrović</span>
            </div>
            <div className="flex flex-col justify-between border-1 p-10">
              <p>
                After a long search for a suitable dentist, I can honestly say
                that there are few like Dr. Savković. I have never seen such
                dedication and thorough approach to work. Thank you endlessly to
                Dr. Vitor for restoring my lost trust in this profession. All
                recommendations from my side 🤗 …
              </p>
              <span className="uppercase">Marko Petrović</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewsPage;
