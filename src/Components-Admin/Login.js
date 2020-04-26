import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import 'bootstrap'

import "../css/StyleLogin.css"

import { login } from './AdminFunctions';

class Login extends Component{
    constructor(){
        super()
        this.state ={
            nomutilisateur: '',
            mot_de_passe: '',
            isAdmin:true
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const admin = {
            nomutilisateur: this.state.nomutilisateur,
            mot_de_passe: this.state.mot_de_passe,
            isAdmin:this.state.isAdmin
        }

        login(admin).then(res =>{
            if(res){
                console.log("login called")
                console.log(res)
                this.props.history.push('/Dashboard')
            }
        })
    }

    render(){
        return(
            <div>
                      <form onSubmit = {this.onSubmit} className="box" >
                         <h1>Se connecter</h1>
                         <input type="text" name="nomutilisateur" placeholder="Nom de l'Admin" value ={this.state.nomutilisateur} onChange={this.onChange} />
                         <input type="password" name="mot_de_passe" placeholder="Mot de passe" value={this.state.mot_de_passe} onChange={this.onChange} />
                         <input type="submit" name="" value="se connecter"/>
                     </form>
                  
                
            </div>
        )
    }
}
export default Login