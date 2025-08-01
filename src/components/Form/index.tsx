import React from 'react';
import Button from '../Button'

class Form extends React.Component {
    render(){
        return (
            <form className='novaTarefa'>
                <div className='inputContainer'>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text"
                           name="tarefa"
                           id="tarefa"
                           placeholder= "Oque voce quer estudar?"
                           required
                    />
                </div>
                <div className='inputContainer'>
                    <label>
                        Tempo
                    </label>
                    <input
                        type= "time"
                        step= "1"
                        name= "id"
                        id="tempo"
                        min= "00:00:00"
                        max= "01:30:00"
                        required
                    />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;