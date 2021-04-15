import React from 'react'
import {Button,Typography, AppBar,Toolbar, CssBaseline,Container, CardMedia} from '@material-ui/core';
import {Card,CardActions,CardActionArea,CardContent,Grid} from '@material-ui/core';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import useHomeStyles from './styles';


export default function HomePage() {

    const homeStyle = useHomeStyles();
    return (
        <div>
            <CssBaseline />
            <AppBar className={homeStyle.navbar} position="sticky">
                <Toolbar>
                    <FastfoodRoundedIcon className={homeStyle.icon}/>
                    <Typography variant="h6">
                        Culinarians
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">

                        <Card className={homeStyle.card}>
                            <CardActionArea>
                            <CardContent>
                                <Typography variant="h5" color="textPrimary" align="center" gutterBottom>
                                    Private Chef
                                </Typography>
                                    <Typography variant="subtitle2" align="center" color="textSecondary" paragraph component="p">
                                    Enjoy a customized culinary experience with a Private Chef - all in the comfort of your own home!
                                </Typography>
                    
                            </CardContent>
                            </CardActionArea>

                            <CardActions className={homeStyle.actionButton}>
                                <Button variant="contained" size="large" color="secondary" component="p">
                                    Start
                             </Button>
                             </CardActions>

                        </Card>
                    </Container>

                    <Container maxWidth="sm" className={homeStyle.container1}>
                        <Typography variant="h5" color="textPrimary" align="center" gutterBottom>
                            Turn your home into a restaurant with a Private Chef.
                            
                        </Typography>
                    </Container>

                        <div>
                        
                        <Container className={homeStyle.cardGrid}>
                        <Grid container spacing={5}>

                            <Grid item key={`homeCardImage1`} xs={12} sm={6} md={6}>
                                <Card className={homeStyle.simpleCard}>
                                    <CardMedia
                                        className={homeStyle.cardMedia}
                                        style={{ height: '50vh'}}
                                        image={"https://images.unsplash.com/photo-1590091626142-167ee3798ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"}
                                        title="We'll be cooking at your home kitchen"
                                    />
                                </Card>
                            </Grid>

                            <Grid item key={`homeCardContent1`} xs={12} sm={6} md={6}>
                                <Card className={homeStyle.simpleCard}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5">
                                                We'll be cooking in your home kitchen
                                         </Typography>

                                            <Typography gutterBottom>
                                                A few hours prior to your private dining experience, your personal chef will arrive and start preparing the menu agreed upon.

                                                Watch and learn new recipes from your chef as he cooks in your home kitchen!
                                         </Typography>

                                        </CardContent>
                                </Card>

                            </Grid>


                            <Grid item key={`homeCardImage2`} xs={12} sm={6} md={6}>
                                <Card className={homeStyle.simpleCard}>
                                    <CardMedia
                                        className={homeStyle.cardMedia}
                                        image={"https://images.unsplash.com/photo-1604908816315-6be59f37a4d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2388&q=80"}
                                        title="We'll be serving each dish"
                                    />
                                </Card>
                            </Grid>

                            <Grid item key={`homeCardContent2`} xs={12} sm={6} md={6}>
                                <Card className={homeStyle.simpleCard}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            We'll be serving each dish
                                         </Typography>

                                        <Typography gutterBottom>
                                            The chef and his/her team will take care of the table sevice, walking you through every detail involved in each dish so you can have a unique private dining experience in the comfort of your own home.

                                            With our discreet and professional service, we guarantee you and your guests can enjoy the night with nothing to worry about!
                                         </Typography>

                                    </CardContent>
                                </Card>

                            </Grid>


                            <Grid item key={`homeCardImage3`} xs={12} sm={6} md={6}>
                                <Card className={homeStyle.simpleCard}>
                                    <CardMedia
                                        className={homeStyle.cardMedia}
                                        style={{ height: '50vh' }}
                                        image={"https://images.unsplash.com/photo-1599941973480-33ce6bbca25d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1678&q=80"}
                                            title="Chef will leave your kitchen spotless"
                                    />
                                </Card>
                            </Grid>

                            <Grid item key={`homeCardContent3`} xs={12} sm={6} md={6}>
                                <Card className={homeStyle.simpleCard}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Your Private Chef will leave your kitchen spotless!
                                         </Typography>

                                        <Typography gutterBottom>
                                            Clean up is an essential part of an impeccable service! Before leaving, the chef and his/her team will make sure all the equipment and dinnerware involved in the service will be left as you found them.

                                            Relax and enjoy the night with peace of mind, knowing that the chef's gotten everything taken cared of!
                                         </Typography>

                                    </CardContent>
                                </Card>

                            </Grid>

                        </Grid>
                    </Container>
                </div>


          
            </div>
        
        
        </main>

        </div>
    )
}
