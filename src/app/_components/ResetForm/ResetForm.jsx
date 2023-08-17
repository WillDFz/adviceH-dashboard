import React from 'react'
import Image from 'next/image';

import styles from "./ResetForm.module.scss"
import Link from 'next/link';

const ResetForm = () => {

    return (
        <div>
            <div className={`${styles.formContainer} p-3`}>
                <form>

                    <h5 className='text-center font-bold text-info-gradient my-4'>Recuperar senha</h5>
                    <label className='font-12 mb-2' htmlFor="email">E-mail *</label>
                    <div className='position-relative mb-3'>
                        <Image className='input-icon ms-3' src={'/svg/user.svg'} width={12} height={12} alt="" />
                        <input className='custom-input ps-5' type="email" name="email" placeholder='exemplo@email.com' />
                    </div>
                    <button className='w-100 bg-info-gradient custom-btn btn font-12 mb-3'>Enviar e-mail para recuperar senha</button>
                </form>

                <div className='text-center'>
                    <Link href="/auth/login" className='font-12 text-info'>
                        Cancelar
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ResetForm
