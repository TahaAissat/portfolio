import { useSelector } from "react-redux";
import { useRef , useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  const language = useSelector((state) => state.language.value);
  const form = useRef();
  const [error,setError] = useState('')
  const engData = {
    p1: "Get in touch",
    i1: "Name",
    i2: "Email Adress",
    i3: "Your message ... ",
    b: "Send",
  };
  const frData = {
    p1: "Contactez-moi",
    i1: "Nom",
    i2: "Adresse mail",
    i3: "Votre message ...",
    b: "Envoyer",
  };
  let data = {};
  let message = {}

  if (language === "english") {
    data = engData;
  } else {
    data = frData;
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(message.name && message.email && message.content){
    props.handleSend();
    emailjs
      .sendForm(
        "service_dhdxcof",
        "template_p04f16g",
        form.current,
        "IYD2LlCZY7MJ5aazJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      setError('')
    } else {
      if(language === 'english'){
      setError('Please fill the form before sending !')
      } else {
        setError('Veuillez remplir le formulaire avant de l\'envoyer !')
      }
    }
  };

  const handleClose = () => {
    props.handleSend()
    setError('')
  }

  return (
    <div className="flex fixed flex-col justify-center items-center inset-0 z-50 bg-[#334155] bg-opacity-50">
      <form
        ref={form}
        onSubmit={handleClick}
        className="flex flex-col justify-evenly w-1/3 h-96 bg-gray-100 p-10"
      >
        <div className="flex flex-row justify-end  w-full">
          <p className=" font-bold text-slate-900 text-3xl mb-10">{data.p1}</p>
          <span className="w-1/3 flex justify-end">
            <FontAwesomeIcon
              icon={faXmarkCircle}
              size="xl"
              onClick={() => handleClose()}
            />
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            name="user_name"
            placeholder={data.i1}
            className="px-2 bg-slate-900 h-10 text-white"
            value={message.name}
          />
          <input
            type="email"
            name="user_email"
            placeholder={data.i2}
            className="px-2 bg-slate-900 h-10 text-white"
            value={message.email}
          />
          <textarea
            name="message"
            placeholder={data.i3}
            className="px-2 bg-slate-900 h-20 text-white"
            value={message.content}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" mt-6 bg-slate-800 text-cyan-400 w-1/4 h-10"
          >
            {data.b}
          </button>
        </div>
        <p className=" flex text-red-600 justify-center">{error}</p>
      </form>
    </div>
  );
}
export default Contact;
