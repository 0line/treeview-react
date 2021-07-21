import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export const BtnLogin = ()=>{
    const { loginWithRedirect } = useAuth0();
    return <Button className="btn-login"  variant="contained" size="large" onClick={() => loginWithRedirect()} endIcon={<PermIdentityIcon />}>Log In </Button >;
    
}

