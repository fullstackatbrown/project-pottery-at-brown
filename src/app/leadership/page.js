import Image from "next/image";

function Profile(props) {
  return (
    <div className="pb-10 flex flex-col rounded-lg justfy-center items-center drop-shadow-2xl text-center">
      <h2 className="font-bold text-xl text-[#513223] pb-4 font-inter">
        {props.title}
      </h2>
      <Image
        src={props.image}
        alt={props.name}
        width={200}
        height={200}
        className="rounded-full border-4 border-[#513223]"
      />
      <h1 className="text-3xl text-[#513223] font-normal font-hedvig">
        {props.name}
      </h1>
      <h1 className="text-2xl text-[#513223] font-normal pb-4 font-hedvig">
        {props.pronouns}
      </h1>
      <p className="text-lg text-[#513223] pb-4 font-inter">
        {props.description}
      </p>
    </div>
  );
}

export default function Workshops() {
  return (
    <main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-10 h-full">
      <div className="flex flex-col min-h-full justify-center items-center">
        <h1 className="text-[50px] font-hedvig text-[#513223]">Admin</h1>
        <div className="grid grid-cols-3 grid-rows-2 px-55">
          <Profile
            title="Co President"
            name="Zavion H. '27"
            pronouns="(he/him)"
            description="Architecture + Urban Studies"
            image="/Leadership/Admin/president.png"
          />
          <Profile
            title="President"
            name="Jasper L. '25"
            pronouns="(he/him)"
            description="Chemical Physics & Applied Math"
            image="/Leadership/Admin/president2.png"
          />
          <Profile
            title="Vice President"
            name="Rachel H. '27"
            pronouns="(she/her)"
            description="English"
            image="/Leadership/Admin/vice-pres.png"
          />
          <Profile
            title="Technical Officer"
            name="Fuka I. '26"
            pronouns="(she/her)"
            description="Engineering"
            image="/Leadership/Admin/technical-officer.png"
          />
          <Profile
            title="Finanical Officer"
            name="Sarah N. '27"
            pronouns="(she/her)"
            description="Mechanical Engineering"
            image="/Leadership/Admin/financial-officer.png"
          />
          <Profile
            title="Events Officer"
            name="Julia G. 27"
            pronouns="(she/her)"
            description="Computer Science and Cognitive Neuroscience"
            image="/Leadership/Admin/events-officer.png"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-full justify-center items-center">
        <h1 className="text-[50px] font-hedvig text-[#513223]">Studio Aids</h1>
        <div className="grid grid-cols-4 grid-rows-2">
          <Profile
            title=""
            name="Victoria L. '28"
            pronouns="(she/her)"
            description="English"
            image="/Leadership/Studio/victoria.png"
          />
          <Profile
            title=""
            name="Noah P. '28"
            pronouns="(he/him)"
            description="Applied Math-Econ & History of Art and Architecture"
            image="/Leadership/Studio/noah.png"
          />
          <Profile
            title=""
            name="Niahan G. '28"
            pronouns="(she/her)"
            description="Art and Computation"
            image="/Leadership/Studio/nihan.png"
          />
          <Profile
            title=""
            name="Naja W. '27"
            pronouns="(she/her)"
            description="History & Africana Studies"
            image="/Leadership/Studio/naja.png"
          />
          <Profile
            title=""
            name="Katelynn P. '26"
            pronouns="(she/her)"
            description="Biology"
            image="/Leadership/Studio/kaitlyn.png"
          />
          <Profile
            title=""
            name="Kaitlin D. '27"
            pronouns="(she/her)"
            description="Applied Math-Biology"
            image="/Leadership/Studio/kaitlin.png"
          />
          <Profile
            title=""
            name="Jolin Z. '28"
            pronouns="(she/her)"
            description="Glass"
            image="/Leadership/Studio/jolin.png"
          />
          <Profile
            title=""
            name="Isidora S. '28"
            pronouns="(she/her)"
            description="Environmental Science"
            image="/Leadership/Studio/isadora.png"
          />
          <Profile
            title=""
            name="Hellie C. '27"
            pronouns="(she/her)"
            description="Mechanical Engineering"
            image="/Leadership/Studio/hellie.png"
          />
          <Profile
            title=""
            name="Emmi G. '28"
            pronouns="(she/her)"
            description="Undecided"
            image="/Leadership/Studio/emmie.png"
          />
          <Profile
            title=""
            name="Celia P. '8"
            pronouns="(she/her/ella)"
            description="Sociology and IAPA"
            image="/Leadership/Studio/celi.png"
          />
          <Profile
            title=""
            name="Ari S. '6"
            pronouns="(she/they)"
            description="Biology and Geochemistry"
            image="/Leadership/Studio/ari.png"
          />
        </div>
      </div>
    </main>
  );
}
