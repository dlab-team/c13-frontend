// Import Spinner css
import "./spinner.css";

const SpinnerLogo = () => {
  return (
    <div className="spinner">
      <span> Cargando...  </span>
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="-57.96 -57.96 695.49 695.49"
        stroke="#000000"
        strokeWidth="0.005795670000000001"
        className="spinner-svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M117.29,113.17h71.634v57.245l73.792-42.604l73.79-42.603l-73.79-42.604L188.924,0v57.243H89.327 c-15.444,0-27.963,12.52-27.963,27.963v135.962h55.927L117.29,113.17L117.29,113.17z"></path>{" "}
              <path d="M518.944,184.805V85.206c0-15.444-12.521-27.963-27.965-27.963H355.018v55.927h107.998v71.635h-57.244l42.604,73.792 l42.604,73.792l42.604-73.792l42.605-73.791L518.944,184.805L518.944,184.805z"></path>{" "}
              <path d="M462.276,466.395h-71.635v-57.242l-73.791,42.604l-73.792,42.604l73.792,42.604l73.791,42.604v-57.244h99.6 c15.443,0,27.963-12.521,27.963-27.964V358.397h-55.928V466.395z"></path>{" "}
              <path d="M116.551,394.761h57.243l-42.604-73.79l-42.603-73.792l-42.604,73.792l-42.604,73.79h57.245v99.599 c0,15.442,12.52,27.964,27.963,27.964h135.962v-55.928H116.551V394.761z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

export default SpinnerLogo;
