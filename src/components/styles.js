import {makeStyles} from '@material-ui/core/styles';
import  mainBackgroundImage  from '../assets/sebastianComanBackgroundImage.jpeg'

const useHomeStyles = makeStyles( (theme) => ({


    navbar: {
        backgroundColor: "rgba(255,255,250,0.8)",
        backdropFilter: 'blur(15px)',
        color: "black"
    },

    homePage:{
        height: '100vh',
        width:'100vw',
        backgroundImage: `url(${mainBackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    },
    icon: {
        marginRight: '20px'
    },

    container1:{
        marginTop:'60vh',
        marginBottom:'10vh'
    },
    
    card: {
        // padding:theme.spacing(8,0,6)
        marginTop:"150px",
        marginBottom:"20px",
        backgroundColor:"rgba(255,255,250,0.6)",
        backdropFilter: 'blur(15px)'

       
    },
    actionButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    cardGrid: {
        padding: '20px 0'
    },

    simpleCard: {
         height: '100%',
         width:'100%',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center'
    },
    cardMedia: {
        paddingTop: '56.25%', //16:9 ratio
        height: '50vh'

    },
    cardContent: {
        flexGrow: 1

    },

    
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
})

)

export default useHomeStyles;