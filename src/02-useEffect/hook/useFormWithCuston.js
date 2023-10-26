import {useState} from 'react'

const useFormWithCuston = (data = {}) => {

    const [dataForm, setDataForm] = useState(data);
    const {username, email, password} = dataForm;

    
    const handleInpueChange = ({target})=>{
    
    const {name, value} = target;
    
        setDataForm({
            ...dataForm, 
            [name]: value,
        })
    }

    const handleReset = ()=> {
        console.log(dataForm);
        //esta fue la forma en que yo lo realice
        // setDataForm({
        //     ...dataForm,
        //     username:'',
        //     email:'',
        //     password:'',
            
        // })

        //esta fue la forma que lo hizo fernando, mucho mas facil
        setDataForm(data)
        console.log(dataForm)
    }

   
    

    return {
        ...dataForm,
        handleInpueChange,
        handleReset
    }
}

export default useFormWithCuston
