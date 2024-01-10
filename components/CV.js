import { useSelector } from "react-redux";


export function CV (props) {
const language = useSelector((state) => state.language.value)
const engData = {
    b : 'Close'
}
const frData = {
    b : 'Fermer'
}
let data = {}
const handleClose = () => {
    props.handleClose()
}
if(language === 'english'){
    data = engData
} else {
    data = frData
}
    return (
      <div className="flex fixed flex-col justify-center items-center inset-0 z-50 bg-[#334155] bg-opacity-50">
        <div className="flex flex-col justify-center items-center w-9/12 h-full bg-gray-100 ">
          <div className="flex flex-row w-full pr-10 pb-6 justify-end">
            <button
              className="mt-6 bg-slate-800 text-cyan-400 w-1/12 h-10 rounded-xl"
              onClick={() => handleClose()}
            >
              {data.b}
            </button>
          </div>
          <iframe src="CV2024.pdf" width="90%" height="90%" />
        </div>
      </div>
    );
}

export default CV