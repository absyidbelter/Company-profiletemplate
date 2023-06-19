import one from "../../../Resources/pdf/experience.pdf";
import "../../../Resources/css/project.css";

const ContinarExperience = () => {
  return (
    <section className="peralatan-section">
      <div className="peralatan-container">
        <embed
          src={`${one}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          width="100%"
          height="500"
          type="application/pdf"
          fullscreen="true"
        />
      </div>{" "}
    </section>
  );
};

export default ContinarExperience;
