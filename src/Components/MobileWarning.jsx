import PropTypes from "prop-types";

const MobileWarning = ({ onClose }) => {
  return (
    <div className="fixed top-0 px-10  w-full h-screen bg-neutral-900 bg-opacity-95 flex justify-center items-center z-[200]">
      <div id="element" className="w-full h-screen mr-4 flex justify-center items-center">
        <div
          id="responsive"
          className="bg-white p-6 rounded-lg w-full sm:w-[80%] md:w-[60%] lg:w-[40%]  text-center"
          style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <p className="text-gray-800">
            Sinto muito, o site ainda não é compatível com dispositivos móveis. <br /> Estou trabalhando nisso. 🔧📱
          </p>
          <p className="text-gray-800">Recomendo acessá-lo a partir de um computador.</p>
          <button
            onClick={onClose}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

MobileWarning.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MobileWarning;
