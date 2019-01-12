import React ,{Component } from  'react'
import {Container, Content,Text, Button}  from 'native-base'



export default class  Profile extends React.Component{
    render(){
      
        return(
            <Container style={{flex:1}}>
            
                <Content style={{flex:1}}>
                    <Text>
                    Sekarang di Profile
                    </Text>
                    <Button
                    onPress={()=>this.props.navigation.navigate('HomeScreen')}
                    >
                        <Text>
                            Pindah Ke Home
                        </Text>
                    </Button>
                </Content>
               
            </Container>
        )
    }
}