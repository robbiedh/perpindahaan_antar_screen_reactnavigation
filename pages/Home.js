import React ,{Component } from  'react'
import {Container, Content,Text, Button}  from 'native-base'



export default class  Home extends React.Component{
    render(){
      
        return(
            <Container>
               
                <Content>
                    <Text>
                        Home Sekarang di Home
                    </Text>
                    <Button
                    onPress={()=>this.props.navigation.navigate('SettingScreen')}
                    >
                        <Text>
                            Pindah Ke Setting 
                        </Text>
                    </Button>
                    
                </Content>
                
            </Container>
        )
    }
}