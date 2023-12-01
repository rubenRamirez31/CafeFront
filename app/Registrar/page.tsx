'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ILogin } from '../models/ILogin';
import Swal from 'sweetalert2';
import styles from '@/app/styles.module.css'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

const RegistrarPage = () => {
    const [errors, SetError] = useState<string>("");
    const { handleSubmit, register } = useForm<ILogin>();
    const router = useRouter();

    const onSubmit = handleSubmit(async (formData, event) => {
        event?.preventDefault();


        const responseLogin = await signIn("credentials", {
            username: formData.username,
            password: formData.password,
            redirect: false,
        });

        if (responseLogin?.error) {
            Swal.fire({
                title: "¡Ups!",
                text: "Parece que tu correo o contraseña son incorrectos",
                icon: "error",
            });
            return;
        }

        router.push("..");
    });

    return (
        <>

            <MDBContainer className="my-4">

                <MDBCard>
                    <MDBRow className='g-0'>


                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex justify-content-center'>
                                    <img src="/logo-removebg.svg" alt="Logo Cafe Contigo" width={150} height={150} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h5 className="fw-normal my-1 pb-3" style={{ letterSpacing: '1px' }}>Crea una cuenta para ingresar</h5>
                                </div>
                                <form onSubmit={onSubmit}>

                                    <div className='d-lg-flex justify-content-lg-between'>
                                        <div className="col-sm-12 col-lg-3 my-3 ">
                                            <label htmlFor="nombre">Nombre</label>
                                            <input type="text" name='nombre' className="form-control form-control-sm" required />
                                        </div>
                                        <div className="col-sm-12 col-lg-3 my-3">
                                            <label htmlFor="apePat">Apellido Paterno</label>
                                            <input type="text" name='apePat' className="form-control form-control-sm" required />
                                        </div>
                                        <div className="col-sm-12 col-lg-3 my-3">
                                            <label htmlFor="apeMat">Apellido Materno</label>
                                            <input type="text" name='apeMat' className="form-control form-control-sm" required />
                                        </div>
                                    </div>

                                    <div className="col-12 my-3">
                                        <label htmlFor="numTelefono">Numero telefonico</label>
                                        <input type="tel" name='numTelefono' className="form-control form-control-sm" required
                                            pattern="[0-9]{10}"
                                            title="El número telefónico debe tener 10 dígitos sin espacios ni guiones"
                                            maxLength={10} />
                                    </div>

                                    <div className="col-12 my-3">
                                        <label htmlFor="correo">Correo electronico</label>
                                        <input type="email" name='correo' className="form-control form-control-sm" required />
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className="col-5 my-3 ">
                                            <label htmlFor="password">Contraseña</label>
                                            <input type="password" className="form-control form-control-sm" />
                                        </div>
                                        <div className="col-5 my-3 ">
                                            <label htmlFor="password2">Confirma tu contraseña</label>
                                            <input type="password" className="form-control form-control-sm" />
                                        </div>
                                    </div>


                                    <div >
                                        <button type="submit" style={{ width: '100%' }} className={styles.btnprincipal}>Registrarme</button>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardImage src='/CafeRegistro.jpg' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>

        </>

    )
}

export default RegistrarPage