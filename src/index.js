import React,{Component} from 'react';
import {render} from 'react-dom';
import {Section , Container , Header, Title, InputContainer, Input, ListaContainer} from './styles/styles.js';

import io from 'socket.io-client';

class App extends Component{

    constructor(){
        super();
        this.state = {
            messages: []
        }
    }

    //iniciamos el socket en un componentDidMount -> porque esta es la manera en la cual mi aplicacion se va a cargar primero y una vez se carge voy a iniciar el componente de socket
    componentDidMount(){
        this.socket = io('/');
        //agg otro evento para escuchar lo que viene del servidor 
        this.socket.on('message',message => {
            //y lo agregamos a nuestro estado junto a lo que ya teniamos alli 
            this.setState({
                messages: [message, ...this.state.messages]
            })
        });
    }

    handleSubmit(e){
        //traemos la entrada de datos por medio de un evento del input y lo asignamos a una variable 
        const body = e.target.value;

        // trabajamos con el numero 13 que es el caracter del Enter de nuestro teclado y comprobamos que el valor del input no sea nulo
        if(e.keyCode === 13 && body){
            //creamos un objeto y le pasamos el valor del input al socket y quien lo envia
            const message= {
                body,
                from:'me'
            };
            //antes de enviarlo al socket , establecemos el mensaje con el mensaje que ya estableci mas los que tengo en el estado, para que tambien me salgan a mi por pantalla
            this.setState({messages: [message, ...this.state.messages]})
            //le enviamos los datos al socket
            this.socket.emit('message', body);
            // y limpaimos el valor del input
            e.target.value = '';
        }
    }

    render(){

        //para mostrarlo en pantalla iteramos los mensajes que estan en nuestro estado  a traves de map
        const messages = this.state.messages.map((message,index) => {
            return(
                <li key={index}>
                    <b>{message.from} : {message.body}</b>
                </li>
            )
        });

        return(
            <Section>
                <Container>
                    <Header>
                        <Title>Haki Chat</Title>
                    </Header>
                    <ListaContainer>
                        <ul>
                            {messages}  
                        </ul>
                    </ListaContainer>
                    <InputContainer>
                        <Input 
                            type="text"
                            placeholder="Insert a message"
                            //usamos onKeyUp para tomar los datos que el usuario ingresa por teclado
                            onKeyUp={this.handleSubmit.bind(this)}
                        />
                    </InputContainer>
                </Container>
            </Section>
        )
    }
}

render(
    <App/>,document.getElementById('app')
)