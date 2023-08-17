import React from 'react'
import ResetForm from '../../_components/ResetForm/ResetForm';

const page = () => {

    const style = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/images/login_bg.png')",
        backgroundSize: "cover",
    }
    return (
        <div style={style}>
            <ResetForm />
        </div>
    )
}

export default page
