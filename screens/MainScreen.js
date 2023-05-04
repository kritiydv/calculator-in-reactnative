import React ,{useRef, useState}from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from'./MainScStyle'

export default function MainScreen() {
    const[value,setValue]=useState('0')
    const[bracketopen,setBracketopen]=useState(false)
    const scrollViewRef=useRef();

    const handlePress=(val)=>{
       
        if(val== 'AC'){
            setValue('0')
        }
        else if(val== '='){
            try{
                if((value.match(/\(/g)||[]).length == (value.match(/\)/g)||[]).length){
                    if((value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='/'||value.slice(-1)=='%'||value.slice(-1)=='.')){
                         setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)

                    }
                    else{
                       setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }

                }

            }
            catch(e){
                setValue('format error')
            }

        }

         else if(val== 'back'){
            setValue(value.slice(0,-1))
            
        }
         else if(val== '()'){
            if(value =='0'){
                setValue('(')
                setBracketopen(true)
            }
            else if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='/'||value.slice(-1)=='%'||value.slice(-1)=='.')
            {
                 setValue(value+'(')
                setBracketopen(true)

            }
            else{
            if(bracketopen==true){
                setValue(value+')')
                setBracketopen(false)
            }
            else {
                 setValue(value+'(')
                setBracketopen(true)
            }
        }
            
        }
       
    
        else{
             if(value== '0'){
                if(isNaN(val)){
                     setValue(value+val)
                }
                else{
            setValue(val)
                }
            
        }

     else if(isNaN(val)){
        if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='/'||value.slice(-1)=='%'||value.slice(-1)=='.'){
            setValue(value.slice(0,-1)+val)
        }
        else{
            setValue(value+val)
        }
     }

        
        else{
        setValue(value+val)

        }

        }
    }
    
  return (
    <View style={styles.main_screen}>
    <ScrollView style={styles.main_screen__display} ref={ref => { this.scrollView = ref }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
        <Text style={styles.text_display}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
    </ScrollView>
    <View style={styles.keypad}>
        <View style={styles.keypad_row}>
            <Pressable onPress={()=>handlePress('AC')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>AC</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('()')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>()</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('%')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>%</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('/')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>/</Text>
                </View>
            </Pressable>
        </View>

        {/* ROW2 */}
        <View style={styles.keypad_row}>
            <Pressable onPress={()=>handlePress('9')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>9</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('8')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>8</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('7')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>7</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('*')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>*</Text>
                </View>
            </Pressable>
        </View>

        {/* ROW3 */}
         <View style={styles.keypad_row}>
            <Pressable onPress={()=>handlePress('4')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>4</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('5')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>5</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('6')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>6</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('-')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>-</Text>
                </View>
            </Pressable>
        </View>

        {/* ROW4 */}
         <View style={styles.keypad_row}>
            <Pressable onPress={()=>handlePress('1')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>1</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('2')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>2</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('3')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>3</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('+')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>+</Text>
                </View>
            </Pressable>
        </View>

        {/* ROW5 */}
         <View style={styles.keypad_row}>
            <Pressable onPress={()=>handlePress('0')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>0</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('.')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>.</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('back')}>
                <View style={styles.btn_outer}>
                    <Text style={styles.bg_btn}>CL</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>handlePress('=')}>
                <View style={styles.btn1_outer}>
                    <Text style={styles.bg1_btn}>=</Text>
                </View>
            </Pressable>
        </View>
    </View>
    </View>
  )
}
