export default function Contact() {
    return (
        <>
        <div className="pt-20 ">
            <div className="contact__title text-center font-bold fond text-3xl">Contacto</div>
            <div className="contact__msj text-center text-xl py-10">Dejanos tu mensaje!
            Nos pondremos en contacto a la brevedad</div>
            <div className="contact__form flex flex-col items-center">
                <div className="contact__form--input flex gap-8">
                    <div className="contact__form--input1 w-70">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend ">Cual es tu nombre?</legend>
                            <input type="text" className="input" placeholder="Escribe aqui" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Numero de telefono</legend>
                            <input type="number" className="input" placeholder="Escribe aqui" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">E-mail</legend>
                            <input type="email" className="input" placeholder="Escribe aqui" />
                        </fieldset>
                    </div>
                    <div className="contact__form--input2 w-70 ">
                        <textarea className="textarea h-full" placeholder="Reseña"></textarea>
                    </div>
                </div>
                <div className="contact__form--button ">
                <div className=" p-6">
                    <button className="btn btn-neutral btn-outline bg-white hover:text-red-500">Enviar</button>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}