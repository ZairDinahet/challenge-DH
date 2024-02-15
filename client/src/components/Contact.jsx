import React, { useState, useEffect } from 'react';



function Contact(props){
    
    return (
        <>
        {/* ========== Start CONTACT ========== */}
        <div className=" w-full flex flex-col">
            
            
            <div className={!props.isMobileMenuOpen ? "block" : "hidden sm:block"} id="mobile-menu">
        <div className="m-8">
            <h2 className="text-3xl text-teal-700">Contacta con Digital House</h2>
        </div>
        <div className="w-full xl:flex ">
        <section className="m-0 p-7 xl:w-3/4 sm:full">
        <div className="p-4 mb-4 rounded-md border-2 bg-white border-stone-300">
            <p className="pb-5 mb-5 text-2xl text-stone-500 border-b-2 border-stone-300">Preguntas frecuentes</p> 
            <p><a href="#" target="_blank" className="link-external">¿Por qué mi perfil está pendiente de moderación?</a>
            </p>
            <p><a href="#" target="_blank" className="link-external">¿Qué necesito para subir de nivel en mi perfil?</a>
            </p>
            <p><a href="#" target="_blank" className="link-external">¿Qué sucede si comparto datos de contacto o pagos externos?</a>
            </p>
            <p><a href="#" target="_blank" className="link-external">Razones para suspensión de propuestas y cierre de cuentas</a>
            </p>
            <p><a href="#" target="_blank" className="link-external">Tipos de proyectos: por hora y por precio fijo</a>
            </p>
        </div>
        <div className="p-4 rounded-md border-2 bg-white border-stone-300">
            <p className="pb-5 mb-5 text-2xl text-stone-500 border-b-2 border-stone-300">Centro de ayuda</p>    
            <div className="grid grid-cols-3">
                <div className="">
                    <span className="bi bi-1-circle-fill text-teal-700"></span> 
                    <small>     Aplica tu perfil de consulta</small>
                </div>
                <div className="">
                    <span className="bi bi-2-circle-fill text-teal-700"></span>
                    <small>   Aplica al panel de ayuda</small>
                </div>
                <div className="">
                    <span className="bi bi-3-circle-fill text-teal-700"></span>
                    <small>   La solución a tu consulta disponible</small>
                </div>
            </div>
        </div>
        <div className="p-4 mt-4 rounded-md border-2 bg-white border-stone-300">
            <p className="text-2xl text-stone-500">Formulario de contacto</p>
                <span>
                    <form action="#" method="POST" className="form_changes">
                    <div className="grid grid-cols-2">
                        <div className="">
                            <label for="Name">Nombre</label> 
                            <div className="block">
                                <input className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500" type="text" name="name" placeholder="   Nombre"  /> 
                            </div>
                        </div>
                        <div className="">
                            <label for="Lastname">Apellido</label> 
                            <div className="block">
                                <input className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500" type="text"  placeholder="   Apellido"/> 
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="">
                            <label for="Email">Email</label> 
                            <div className="block">
                                <input className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500" type="email" name="email" placeholder="   Email"/>
                            </div>
                        </div>
                    </div> 
                   
                    <span>
                        <div className="form-group untouched pristine required">
                            <label for="Message">Dejanos tu mensaje</label> 
                            <div className="block">
                                <textarea name="message" rows="6" placeholder="  Mensaje" className="bg-stone-100 mt-3 mb-3 w-3/4 rounded-md border border-stone-500"></textarea> 
                            </div>
                        </div>
                    </span>
                    <div class="w-full">
                        <label for="file-upload" class="mt-4 mb-4 p-2 relative cursor-pointer bg-stone-100 rounded-md border border-stone-500 font-medium text-stone-500 hover:text-teal-700 focus-within:outline-none focus-within:ring-2">
                            <i className="bi bi-paperclip mr-1"></i>
                            <span>Adjuntar archivo</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                        </label>
                        <p id="file-upload-filename" class="mt-2 text-sm text-gray-500"></p>
                    </div>
                 {/** */}
                            <button type="submit" className="mt-2 p-2 relative cursor-pointer bg-teal-700 rounded-md border border-stone-500 font-medium text-stone-100 hover:text-stone-800 focus-within:outline-none focus-within:ring-2" >
                                <span>Enviar consulta</span>
                                <i className="control-spinner wk2-icon wk2-icon-spinner wk2-icon-spin"></i>
                            </button>
                       
                    {/** */}
                        </form>
                    </span>
                    </div>
        </section>

        <section className="m-0 p-7 xl:w-1/4 sm:full ">
            <section className="rounded-lg border-2 bg-white border-stone-300">
                <div className="p-4">
                    <div className="pb-5 text-2xl text-stone-500 border-b-2 border-stone-300">Enlaces útiles</div>
                    <div className="">
                        <div className="">
                            <article className="text-center mb-6">
                                <p className="mb-4"><a href="#" target="_blank">Blog</a></p>
                                <p className="mb-4"><a href="#" target="_blank">Glosario</a></p>
                                <p className="mb-4  "><a href="#" target="_blank">Centro de ayuda</a></p>
                            </article>
                        </div>
                        </div> 
                        <article className="text-center border-t-2 border-stone-300">
                            <p className="mb-4"><strong>Email</strong></p> 
                            <p className="mb-4">Completa el formulario de contacto situado en el panel de ayuda para enviarnos un correo electrónico.</p>
                        </article>
                        <article className="text-center border-t-2 border-stone-300">
                            <p className="mb-4"><strong>Nuestras redes</strong></p> 
                            <div className="footer__social-icons"><a href="#" target="_blank"  title="Míranos en YouTube">
                                <span className="pr-3 bi bi-youtube"></span></a><a href="#" target="_blank"  title="Síguenos en Instagram">
                                <span className="pr-3 bi bi-instagram"></span></a><a href="#" target="_blank"  title="Síguenos en Facebook">
                                <span className="pr-3 bi bi-facebook"></span></a><a href="#" target="_blank"  title="Síguenos en Twitter">
                                <span className="pr-3 bi bi-twitter"></span></a><a href="#" target="_blank"  title="Síguenos en Linkedin">
                                <span className="pr-3 bi bi-linkedin"></span></a>
                            </div>
                        </article>
                </div>
            </section>
        </section>
        </div>
            </div>
        </div>
        
        {/* ========== End PROFESIONES ========== */}  
        
        </>
    )
}

export default Contact