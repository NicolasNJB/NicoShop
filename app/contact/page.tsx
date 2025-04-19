export default function Contact() {
    return (
        <>
        <div className="px-4 ">
            <div className="contact__title text-center font-bold fond text-3xl">Contacto</div>
            <div className="contact__msj text-center text-xl py-10">Dejanos tu mensaje!
            Nos pondremos en contacto a la brevedad</div>
            <div className="contact__form flex flex-col items-center w-full max-w-5xl mx-auto">
                <div className="contact__form--input flex flex-col md:flex-row gap-8 w-full">
                <div className="contact__form--input1 w-full md:w-1/2 flex flex-col gap-4">
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
                        <div className="contact__form--input2 w-full md:w-1/2 flex">
                            <fieldset className="fieldset w-full h-full">
                                <textarea className="textarea w-full h-full resize-none min-h-[220px]" placeholder="Escribe tu reseña"></textarea>
                            </fieldset>
                        </div>
                </div>
                    <div className="contact__form--button mt-6">
                        <button className="btn btn-neutral btn-outline bg-white hover:text-red-500">Enviar</button>
                    </div>

                </div>
            </div>
        
        </>
    )
}