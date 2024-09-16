import SpeakerCard from "./bytes/SpeakerCard";

const SpeakersGrid = () => {
  return (
    <div className="grid gap-1 place-content-center lg:grid-cols-2 xl:grid-cols-3  mt-16">
      <SpeakerCard
        name="Devinder Maheshwari"
        details="Founder at Beebom"
        image="/assets/speakers/devinder_maheshwari.jpg"
        link="https://www.linkedin.com/in/devindermaheshwari/"
      />
      <SpeakerCard
        name="Parimal Kalikar"
        details="Lickster CEO"
        image="/assets/speakers/parimal_kalikar.jpg"
        link="https://www.linkedin.com/in/parimal-kalikar-053a1784/"
      />
      <SpeakerCard
        name="Ankita Rath"
        details="10X Growth Accelerator"
        image="/assets/speakers/ankita_rath.jpg"
        link="https://www.linkedin.com/in/ankita-rath-900722169/"
      />

      <SpeakerCard
        name="Pragati Gokhale"
        details="MarketMirchi Co-Founder and CEO"
        image="/assets/speakers/pragati_gokhale.jpg"
        link="https://www.linkedin.com/in/pragati-gokhale-32313773"
      />
      <SpeakerCard
        name="Shailesh Awale"
        details="HCL Technologies Center Head and Director"
        image="/assets/speakers/shailesh_awale.jpg"
        link="https://www.linkedin.com/in/shaileshawale"
      />
      <SpeakerCard
        name="Arvind Kumar"
        details="Tata Consultancy Services Center Head"
        image="/assets/speakers/arvind_kumar.jpg"
        link="https://www.linkedin.com/in/arvind-kumar-2556716"
      />
    </div>
  );
};

export default SpeakersGrid;
