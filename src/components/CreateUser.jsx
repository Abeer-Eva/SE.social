import {db} from './firebase';



const CreateUser= ()=>{

    const userRef =db.collection('postData').doc(this.userName).collection('chatList').add({
    password: this.password,
    name: this.name
  })

}

export default CreateUser; 