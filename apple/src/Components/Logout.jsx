import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("user", "");
        navigate("/Signin");
    }, [navigate]);

  return null
}

export default Logout