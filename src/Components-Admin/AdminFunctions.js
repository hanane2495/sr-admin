import axios from 'axios'

export const login = admin =>{
    return axios
       .post('http://localhost:5000/users/login',{
        nomutilisateur: admin.nomutilisateur,
        mot_de_passe : admin.mot_de_passe,
        isAdmin:true
       })
       .then(res =>{
           localStorage.setItem('usertoken', res.data)
           return res.data
       })
       .catch(err =>{
           console.log(err)
       })
}