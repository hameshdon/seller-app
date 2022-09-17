
import { StyleSheet } from 'react-native';



export const ProfileStyles = StyleSheet.create({
  headers: {

    backgroundColor:"#8F39FF",
    height:80,

    padding:10,
    position:"relative",
  },
  headContainer: {
    marginBottom:3,
  },

  headText: {
    display:"flex",
    // justifyContent:"center",
    marginBottom:10,
    fontWeight:"bold",
    fontSize:15

  },
  greenButton: {
    width: 150,
    height: 50,
    backgroundColor: '#2ECC71',
    borderRadius: 6,
    color: '#ffffff',
    justifyContent: 'space-between',
    padding: 15,
    flexDirection: 'row',
   
    alignItems: 'center'

  },
  whiteText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight:"bold",
    color: '#FFFFFF'
  },
  bgContainer1: {
    display: 'flex',
    backgroundColor: '#2ECC71',
    backgroundSize: 'cover',
    // width: 415,
    height:195,
    position: 'relative'

  },


  headerText: {
    // fontFamily: "NotoSans-Bold",
     fontWeight:"bold",
    fontSize: 18,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 1,
    marginTop:1,
    marginLeft:6,
  },
  imgBg: {
    width: 89,
    height: 89,
    /* left: 135; */
    /* top: 59; */
    backgroundColor: '#702cc7',
    borderRadius: 14,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  camera: {
    position: 'absolute',
    width: 34,
    height: 34,
    left: 64,
    top: 58,
    backgroundColor: '#702cc7',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabAlign: {
    display: 'flex',
    justifyContent: 'center',



  },
  tabBg: {
    // width: 415,
    backgroundColor: '#F1ECFB',
    // paddingTop: 14,
    // paddingBottom: 14,
    


  },
  tabsView: {
    height: 60,
    /* left: 0; */
    /* top: 0; */
    backgroundColor: '#F1ECFB',
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 400,
  },

  tabsText: {
    color: '#323232',

  },
  tabsPane: {
    width: 375,
    // height: 490,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center'
  },
  tabsPaneHeading: {

    // fontFamily: "NotoSans-Black",
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#323232'
  },
  inputBox: {
   width:100,
    height: 50,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    marginBottom: 0
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    width: 163,
    height: 52,
    marginRight: 11,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,

    fontSize: 19,

    borderRadius: 10

  },
  saveBtn: {
    backgroundColor: "#702cc7",

  },
  nextBtn: {
    backgroundColor: "#2ecb71",

  },
  titleHeading: {
    textAlign: "center",
    marginBottom:23

  },
  profileBg: {
    position: "absolute",
    top: 198,
    height: 200,
    // width: 382,
    backgroundColor: "white"

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    // width: 379,
    height: 300,
    backgroundColor: '#f1f1f1',
    // margin: '100 auto 0'


  },
  blocTabs: {
    display: 'flex',
    flexDirection: "row",
    marginLeft: 0,
  
    padding:15
  },
  tabs: {
    
    height: 34,
    fontWeight:"bold",
    borderRadius: 4,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    paddingBottom: 3,
    paddingRight: 14,
    paddingLeft: 15,
    marginRight: 10,


  },
  touched: {
    backgroundColor: "#702cc7",
    color: "white"
  },
  nonTouched: {
    backgroundColor: "white",
    color: "black"

  },

  contentTabs: {
    flexGrow: 1
  },
  content: {
    backgroundColor: 'white',
    overflow: 'scroll',
    padding: 15,
    // width: "90vw",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    marginTop:60,
    
    textAlign:"center",

    
  },

  activeContent: {
    display: "flex"
  },
  InActiveContent: {
    display: "none"
  },
  profileText: {
    fontSize: 15,
    alignSelf: "center",

    paddingBottom: 8,
    border: 'none'

  },

  profileTextWorkHome: {
    fontSize: 15,
    alignSelf: "center",

    paddingBottom: 8,
    border: 'none',

    color: '#702cc7'
  },
  profileTextChange: {
    fontSize: 15,
    alignSelf: "center",

    paddingBottom: 8,
    // border: 'none'


  },
  timepickContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  locationProfileBg: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationCardBg: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

//appointment

  appointBlocTabs: {
    display: 'flex',
    flexDirection:"row",
    marginLeft:8,
    overflow:"scroll",
    height:194,
    width:400
  },
  appointTabs: {
        gap: 10,
        fontSize:16,
        height:165,
        width:100,
        backgroundColor: 'white',
        fontWeight:"bold",
        borderRadius: 8,
        textAlign: 'center',
        justifyContent: 'center',
        //paddingBottom: 15,
       
        marginRight:10,
        

    },
    appointTouched1: {
        backgroundColor: "#702cc7",
        color:"white",
      
    },
    appointNonTouched1: {
        backgroundColor: "white",
        color:"black",
       

    },
    appointTouched2: {
      backgroundColor: "#2EB96C",
      color:"white",
    
  },
  appointNonTouched2: {
      backgroundColor: "white",
      color:"black",
     

  },

  appointTouched3: {
    backgroundColor: "#f99746",
    color:"white",
  
},
appointNonTouched3: {
    backgroundColor: "white",
    color:"black",
   

},

appointTouched4: {
  backgroundColor: "#3fd4e6",
  color:"white",

},
appointNonTouched4: {
  backgroundColor: "white",
  color:"black",
 

},


    appointContentTabs: {
    flexGrow : 1
  },

  appointContent: {
    backgroundColor: 'white',
    overflow:'scroll',
    padding: 12,
    width: 374,
    height: 400,
    
  },

  appointActiveContent: {
    display: "flex"
  },
  appointInActiveContent: {
    display: "none"
  },
  
  appointTabHead: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: -5,
    //marginBottom: 27,
    width: 100,
    height: 30,
    //paddingTop:3,
    //paddingBottom:0,
    //paddingLeft:25,
    borderTopLeftRadius:8,
    borderTopRightRadius:8
   

  },
  appointTabBg1: {
    backgroundColor:"#702cc7",
    color:"black"
  },
  appointTabBg2: {
    backgroundColor:"#2EB96C",
    color:"black"
  },
  appointTabBg3: {
    backgroundColor:"#f99746"
  },
  appointTabBg4: {
    backgroundColor:"#3fd4e6"
  },

  appointHead: {
    fontSize:12,
    // marginBottom:8,
    // fontWeight:"bold",
    color:"white"
    
  },
  appointHeadChange: {
    fontSize:12,
    //marginLeft:-33,
    // marginTop:8,
    //marginBottom:8,
    // fontWeight:"bold",
    color:"black"
  
    
  },

  appointCount: {
    fontSize:20,
   
    fontWeight:"bold",
    color:"white"
    
  },
  appointCountChange: {
    fontSize:20,
    marginLeft:0,
    marginTop:-2,
  
    fontWeight:"bold",
    color:"black"
  
    
  },
  contentAppointDetails: {
    width:336,
    height:151,
    backgroundColor:"white",
    marginBottom:10,
    

  },

  contentAppointOnline: {
    width:336,
    height:222,
    backgroundColor:"red",
    marginBottom:10

  },
  count: {
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  
   
  },
  appointAudioCard: {
    backgroundColor:"red",
    width:"145",
    height:"194",

  }





})