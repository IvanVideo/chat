import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import './Login.css';
import { Context } from '../../index';
import firebase from 'firebase/compat/app';

function Login() {
  const { auth } = useContext(Context);

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user)
  }

  return (
    <Container>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justify={'center'}>
        <Grid style={{ width: 400, background: 'lightgray' }}
          container
          alignItems={'center'}
          direction={'column'}>
          <Box p={5}>
            <Button onClick={handleLogin} variant={'outlined'}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;