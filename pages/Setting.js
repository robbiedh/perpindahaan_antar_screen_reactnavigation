import React ,{Component } from  'react'
import {Container, Content,Text, Button}  from 'native-base'


export default class  Setting extends React.Component{
    render(){

        return(
            <Container>
            
                <Content>
                    <Text>
                    Sekarang di Setting
                    </Text>
                    <Button
                    onPress={()=>this.props.navigation.navigate('ProfileScreen')}
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