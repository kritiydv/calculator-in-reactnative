module.exports ={
    main_screen:{
        marginTop:50,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        // alignItems:"center",
        width:'100%',
        height:'100%',
        marginRight:5
    },
    main_display:{
        elevation:10,
        width:'95%',
        backgroundColor:'white',
        borderRadius:10,
        display:'flex',
        marginBottom:10,
        padding:10

    },
    text_display:{
        fontSize:50,
        textAlign:'right'
    },
    keypad:{
        width:'100%',
        height:'70%',
         display:'flex',

    },
    keypad_row:{
        flexDirection:'row',
        display:'flex',
        backgroundColor:'white',
         width:'100%',
         justifyContent:'space-between',
          alignItems:"center",
          padding:10
   },
   btn_outer:{
    width:90,
    height:90,
    backgroundColor:'white',
    elevation:10,
    overflow:'hidden',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:100
    
    },
    bg_btn:{
         backgroundColor:'white',
         color:'black',
        
         fontSize:30
        },
    btn1_outer:{
        width:80,
    height:80,
         backgroundColor:'#009b7d',
          elevation:10,
    overflow:'hidden',
    alignItems:"center",
    justifyContent:'center',
     borderRadius:100,
     
    },

    bg1_btn:{
        fontWeight:'bold',
        color:'white',
        fontSize:30


    }
}

