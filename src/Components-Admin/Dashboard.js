import React, { Component } from 'react'
import 'bootstrap'

import "../css/StyleDashboard.css"

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
           matrice_evaluation : []
       }
       }

       logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
        
    }

    componentDidMount(){
        fetch('http://localhost:5000/admin/matrice_initiale')
       .then(response => response.json())
       .then(data => this.setState({ matrice_evaluation : data.data.rows }))
       .catch(err => console.error(err))
        console.log(this.state)
    }
       
       onClickMaj(){
        fetch('http://localhost:5000/admin/matrice_evaluation')
       .then(response => response.json())
       .then(data => this.setState({ matrice_evaluation : data.data.rows }))
       .then( () =>{window.location.reload()})
       .catch(err => console.error(err))
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light">
                    <button className="navbar-toggler ml-auto mb-2 bg-light" 
                            type="button"
                            data-toggle="collapse"
                            data-target="myNavbar">
                                <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <div className="container-fluid">
                            <div className="row">
                              <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top ">
                                 <a href="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">ADMIN Oran ville</a>
                                 <div className="bottom-border pb-3">
                                     <img src="/src/images/photo_profile.jpg" width="50" className="rounded-circle"/>
                                     <a href="#" className="text-white ml-4">Ham Hanane</a> 
                                </div> 
                                <ul className="navbar-nav flex-column mt-4">
                                   <li className="nav-item "><a href="#" className="nav-link text-white p-3 mb-2 mt-2 current"><i className="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                                   <li className="nav-item "><a href="#" className="nav-link text-white p-3 mb-2 mt-2 sidebar-link"><i className="fas fa-user text-light fa-lg mr-3"></i>Profil</a></li>
                                   <li className="nav-item "><a href="#" className="nav-link text-white p-3 mb-2 mt-2 sidebar-link"><i className="fas fa-chart-line text-light fa-lg mr-3"></i>Analyses</a></li>
                                   <li className="nav-item "><a href="#" className="nav-link text-white p-3 mb-2 mt-2 sidebar-link"><i className="fas fa-chart-bar text-light fa-lg mr-3"></i>Statistiques</a></li>
                                   <li className="nav-item "><a href="#" className="nav-link text-white p-3 mb-2 mt-2 sidebar-link"><i className="fas fa-table text-light fa-lg mr-3"></i>Tables</a></li>
                                   <li className="nav-item "><a href="#" className="nav-link text-white p-3 mb-2 mt-2 sidebar-link"><i className="fas fa-wrench text-light fa-lg mr-3"></i>Reglage</a></li>
                                </ul> 
                              </div>
                              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top p-2 ">
                                  <div className="row align-items-center">
                                      <div className="col-md-4">
                                          <h4 className="text-light mb-0">Dashboard</h4>
                                      </div>
                                      <div className="col-md-5">
                                          <form>
                                              <div className="input-group">
                                                  <input type="text" className="form-control search-input" placeholder="Recherche"/>
                                                  <button type="button" className="btn btn-white search-button">
                                                      <i className="fas fa-search text-white"></i>
                                                  </button>
                                              </div>
                                          </form>
                                      </div>
                                      <div className="col-md-3">
                                         <ul className="navbar-nav">
                                             <li className="navbar-item icon-parent"><a href="#" className="nav-link icon-bullet"><i className="fas fa-comments text-muted fa-lg"></i></a></li>
                                             <li className="navbar-item icon-parent"><a href="#" className="nav-link icon-bullet"><i className="fas fa-bell text-muted fa-lg"></i></a></li>
                                             <li className="navbar-item ml-auto"><a href="#" className="nav-link" onClick = {this.logOut.bind(this)}><i className="fas fa-sign-out-alt text-muted fa-lg"></i></a></li>
                                         </ul>
                                      </div>
                                  </div>
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-10 col-lg-9 ml-auto">
                                <div className="row pt-5 mt-3 mb-5 mr-1">
                                    <div className="col-xl-4 p-2">
                                        <div className="card card-commun">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <i className="fas fa-users fa-3x text-info"></i>
                                                    <div className="text-right text-secondary">
                                                        <h5>Users</h5>
                                                        <h3>17.000</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3"></i>
                                                <span> Updated Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 p-2">
                                    <div className="card card-commun">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <i className="fas fa-money-bill-alt fa-3x text-success"></i>
                                                    <div className="text-right text-secondary">
                                                        <h5>Expenses</h5>
                                                        <h3>$139,000</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3"></i>
                                                <span> Updated Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 p-2">
                                    <div className="card card-commun">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <i className="fas fa-chart-line fa-3x text-danger"></i>
                                                    <div className="text-right text-secondary">
                                                        <h5>Visitors</h5>
                                                        <h3>45.000</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-secondary">
                                                <i className="fas fa-sync mr-3"></i>
                                                <span> Updated Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div className="row">
                                <div className="col-12 ">
                                    <h3 className="text-muted text-center mt-3 mb-3">Lancement de l'algorithme FM</h3>
                                    <div className="container">
                                    <table className="table table-striped bg-light text-center">
                                            <thead>
                                              <tr className="text-muted">
                                                <th>id_user</th>    
                                                <th>hotel_meridien</th>  
                                                <th>hotel_sherato</th>
                                                <th>hotel_phoeni</th>
                                                <th>hotel_les_pins_do</th>
                                                <th>hotel_presiden</th>
                                                <th>hotel_beach_hous</th>
                                                <th>hotel_le_petit_chez_so</th>
                                                <th>hotel_mon_chatea</th>
                                                <th>residence_ayou</th>
                                                <th>hotel_cherche</th>
                                                <th>hotel_ibi</th> 
                                                <th>hotel_el_yamam</th>                                                                                                       
                                                <th>hotel_previlleg</th>                                                    
                                                <th>hotel_la_colomb</th> 
                                                <th>residence_gueffa</th>                                                    
                                                <th>hotel_shem</th> 
                                                <th>hotel_maghreb_el_arabi_</th>
                                                <th>hotel_timga</th>
                                                <th>hotel_montparnass</th>
                                                <th>restaurant_la_marquis</th>                                                                                                                       
                                                <th>restaurant_pergol</th>                                                               
                                                <th>restaurant_le_titani</th>
                                                <th>restaurant_pyramide</th>  
                                                <th>restaurant_la_corrid</th>
                                                <th>restaurant_mon_villag</th>  
                                                <th>restaurant_martine</th>  
                                                <th>restaurant_la_siren</th>
                                                <th>restaurant_le_galio</th> 
                                                <th>restaurant_sevill</th>
                                                <th>restaurant_croissant_do</th>
                                                <th>restaurant_mirama</th>
                                                <th>restaurant_taverne_alsacienn</th>
                                                <th>restauant_lounge_le_baalabe</th>
                                                <th>restaurant_saint_trope</th>
                                                <th>restaurant_le_ramie</th>
                                                <th>restaurant_le_merle_blan</th>
                                                <th>restaurant_el_far</th>
                                                <th>cinema_murjaj</th>
                                                <th>cinem_el_marhab</th>
                                                <th>cinema_tefn</th>
                                                <th>cinema_el_fat</th> 
                                                <th>cinema_es_sadd</th> 
                                                <th>cinema_maghre</th> 
                                                <th>cinemathequ</th>       
                                                <th>parc_dattraction_djanet_el_ahle</th>       
                                                <th>parc_aquatique_new_beac</th>       
                                                <th>parc_dattraction_manege_mirama</th>
                                                <th>parc_dattraction_kiddy_garde</th>
                                                <th>parc_dattraction_sweet_cit</th>
                                                <th>plage_madeg</th>
                                                <th>plage_cap_blan</th>
                                                <th>plage_corale</th>
                                                <th>eden_plag</th>          
                                                <th>plage_bom</th>          
                                                <th>plage_pinik</th>          
                                                <th>plage_la_grand</th>          
                                                <th>paradis_plag</th>
                                                <th>plage_les_dune</th>
                                                <th>plage_etoil</th>
                                                <th>plage_beau_sejou</th> 
                                                <th>plage_saint_roc</th> 
                                                <th>plage_el_mordjan</th> 
                                                <th>plage_saint_germai</th> 
                                                <th>plage_cost</th> 
                                                <th>plage_claire_fontain</th> 
                                                <th>plage_el_andalous_1</th> 
                                                <th>plage_el_andalous_2</th> 
                                                <th>centre_commercial_palais_dor</th> 
                                                <th>centre_commercial_rita</th> 
                                                <th>centre_commercial_khaouaja</th> 
                                                <th>centre_commercial_el_ani</th> 
                                                <th>centre_commercial_liper_cit</th>
                                                <th>centre_commercial_ardi</th>
                                                <th>centre_commercial_kitea</th>
                                                <th>centre_commenrcial_bayazit_marke</th>
                                                <th>jardin_akid_lotfi</th>
                                                <th>espace_vert_entree_canaste</th>
                                                <th>jardin_publique_ain_tur</th>
                                                <th>jardin_el_othmani</th>
                                                <th>espace_vert_place_darm</th>
                                                <th>jardin_les_palmier</th>
                                                <th>jardin_grand_terr</th>
                                                <th>jardin_yaghmorase</th>
                                                <th>jardin_petit_bois_castor</th>
                                                <th>jardin_la_roseri</th>
                                                <th>jardin_hl</th>
                                                <th>centre_culturel_franþai</th>
                                                <th>palais_de_la_cultur</th>
                                                <th>centre_de_culture_pierre_claveri</th>
                                                <th>centre_de_culture_emir_abdelkade</th> 
                                                <th>centre_de_culture_ibn_mahre</th> 
                                                <th>centre_de_culture_ibntachefin </th>
                                                <th>bibliotheque_cathedral</th>
                                                <th>bibliotheque_es_seddiki</th>
                                                <th>bibliotheque_le_petit_lecteu</th>
                                                <th>theatre_de_verdur</th>
                                                <th>theatre_regiona</th>
                                                <th>musee_dart_modern</th>
                                                <th>musee_ahmed_zaban</th>
                                                <th>musee_el_moujahi</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.matrice_evaluation.map((ligne)=>{
                                                    return( 
                                                        <tr>
                                                          <td>{ligne.id_user}</td>    
                                                          <td>{ligne.hotel_meridien}</td>  
                                                          <td>{ligne.hotel_sheraton}</td>
                                                          <td>{ligne.hotel_phoenix}</td>
                                                          <td>{ligne.hotel_les_pins_dor}</td>
                                                          <td>{ligne.hotel_president}</td>
                                                          <td>{ligne.hotel_beach_house}</td>
                                                          <td>{ligne.hotel_le_petit_chez_soi}</td>
                                                          <td>{ligne.hotel_mon_chateau}</td>
                                                          <td>{ligne.residence_ayoun}</td>
                                                          <td>{ligne.hotel_cherchel}</td>
                                                          <td>{ligne.hotel_ibis}</td> 
                                                          <td>{ligne.hotel_el_yamama}</td>                                                                                                       
                                                          <td>{ligne.hotel_previllege}</td>                                                    
                                                          <td>{ligne.hotel_la_colombe}</td> 
                                                          <td>{ligne.residence_gueffaz}</td>                                                    
                                                          <td>{ligne.hotel_shems}</td> 
                                                          <td>{ligne.hotel_maghreb_el_arabi_3}</td>
                                                          <td>{ligne.hotel_timgad}</td>
                                                          <td>{ligne.hotel_montparnasse}</td>
                                                          <td>{ligne.restaurant_la_marquise}</td>                                                                                                                       
                                                          <td>{ligne.restaurant_pergola}</td>                                                               
                                                          <td>{ligne.restaurant_le_titanic}</td>
                                                          <td>{ligne.restaurant_pyramides}</td>  
                                                          <td>{ligne.restaurant_la_corrida}</td>
                                                          <td>{ligne.restaurant_mon_village}</td>  
                                                          <td>{ligne.restaurant_martinez}</td>  
                                                          <td>{ligne.restaurant_la_sirene}</td>
                                                          <td>{ligne.restaurant_le_galion}</td> 
                                                          <td>{ligne.restaurant_sevilla}</td>
                                                          <td>{ligne.restaurant_croissant_dor}</td>
                                                          <td>{ligne.restaurant_miramar}</td>
                                                          <td>{ligne.restaurant_taverne_alsacienne}</td>
                                                          <td>{ligne.restauant_lounge_le_baalabek}</td>
                                                          <td>{ligne.restaurant_saint_tropez}</td>
                                                          <td>{ligne.restaurant_le_ramier}</td>
                                                          <td>{ligne.restaurant_le_merle_blanc}</td>
                                                          <td>{ligne.restaurant_el_faro}</td>
                                                          <td>{ligne.cinema_murjajo}</td>
                                                          <td>{ligne.cinem_el_marhaba}</td>
                                                          <td>{ligne.cinema_tefna}</td>
                                                          <td>{ligne.cinema_el_fath}</td> 
                                                          <td>{ligne.cinema_es_sadda}</td> 
                                                          <td>{ligne.cinema_maghreb}</td> 
                                                          <td>{ligne.cinematheque}</td>       
                                                          <td>{ligne.parc_dattraction_djanet_el_ahlem}</td>       
                                                          <td>{ligne.parc_aquatique_new_beach}</td>       
                                                          <td>{ligne.parc_dattraction_manege_miramar}</td>
                                                          <td>{ligne.parc_dattraction_kiddy_garden}</td>
                                                          <td>{ligne.parc_dattraction_sweet_city}</td>
                                                          <td>{ligne.plage_madegh}</td>
                                                          <td>{ligne.plage_cap_blanc}</td>
                                                          <td>{ligne.plage_corales}</td>
                                                          <td>{ligne.eden_plage}</td>          
                                                          <td>{ligne.plage_bomo}</td>          
                                                          <td>{ligne.plage_pinika}</td>          
                                                          <td>{ligne.plage_la_grande}</td>          
                                                          <td>{ligne.paradis_plage}</td>
                                                          <td>{ligne.plage_les_dunes}</td>
                                                          <td>{ligne.plage_etoile}</td>
                                                          <td>{ligne.plage_beau_sejour}</td> 
                                                          <td>{ligne.plage_saint_roch}</td> 
                                                          <td>{ligne.plage_el_mordjane}</td> 
                                                          <td>{ligne.plage_saint_germain}</td> 
                                                          <td>{ligne.plage_coste}</td> 
                                                          <td>{ligne.plage_claire_fontaine}</td> 
                                                          <td>{ligne.plage_el_andalous_1}</td> 
                                                          <td>{ligne.plage_el_andalous_2}</td> 
                                                          <td>{ligne.centre_commercial_palais_dor}</td> 
                                                          <td>{ligne.centre_commercial_ritaj}</td> 
                                                          <td>{ligne.centre_commercial_khaouaja}</td> 
                                                          <td>{ligne.centre_commercial_el_anik}</td> 
                                                          <td>{ligne.centre_commercial_liper_city}</td>
                                                          <td>{ligne.centre_commercial_ardis}</td>
                                                          <td>{ligne.centre_commercial_kiteal}</td>
                                                          <td>{ligne.centre_commenrcial_bayazit_market}</td>
                                                          <td>{ligne.jardin_akid_lotfi}</td>
                                                          <td>{ligne.espace_vert_entree_canastel}</td>
                                                          <td>{ligne.jardin_publique_ain_turk}</td>
                                                          <td>{ligne.jardin_el_othmania}</td>
                                                          <td>{ligne.espace_vert_place_darme}</td>
                                                          <td>{ligne.jardin_les_palmiers}</td>
                                                          <td>{ligne.jardin_grand_terre}</td>
                                                          <td>{ligne.jardin_yaghmorasen}</td>
                                                          <td>{ligne.jardin_petit_bois_castors}</td>
                                                          <td>{ligne.jardin_la_roserie}</td>
                                                          <td>{ligne.jardin_hlm}</td>
                                                          <td>{ligne.centre_culturel_franþais}</td>
                                                          <td>{ligne.palais_de_la_culture}</td>
                                                          <td>{ligne.centre_de_culture_pierre_claverie}</td>
                                                          <td>{ligne.centre_de_culture_emir_abdelkader}</td> 
                                                          <td>{ligne.centre_de_culture_ibn_mahrez}</td> 
                                                          <td>{ligne.centre_de_culture_ibntachefine}</td>
                                                          <td>{ligne.bibliotheque_cathedrale}</td>
                                                          <td>{ligne.bibliotheque_es_seddikia}</td>
                                                          <td>{ligne.bibliotheque_le_petit_lecteur}</td>
                                                          <td>{ligne.theatre_de_verdure}</td>
                                                          <td>{ligne.theatre_regional}</td>
                                                          <td>{ligne.musee_dart_moderne}</td>
                                                          <td>{ligne.musee_ahmed_zabana}</td>
                                                          <td>{ligne.musee_el_moujahid}</td>
                                                     </tr>
                                                 )
                                                })}
                                            </tbody>
                                        </table>
                                        </div>
                                        <button type="button" className="btn btn-info btn-block mt-4 mb-5" onClick={this.onClickMaj.bind(this)}>Lancer algorithme FM</button>
                                    </div>
                                    <div className="col-12">
                                        <h3 className="text-muted text-center mb-3">Mise a jour d'un lieu</h3>
                                        <table className="table table-striped bg-light text-center">
                                            <thead>
                                                <tr className="text-muted">
                                                    <th>Nom</th>
                                                    <th>Adresse</th>
                                                    <th>Telephone</th>
                                                    <th>Categorie</th>
                                                    <th>Modifier</th>
                                                    <th>supprimer</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-info btn-sm">Modifier</button></td>
                                                    <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Sheraton</td>
                                                    <td>sidi mhsmed</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-info btn-sm">Modifier</button></td>
                                                    <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Le galion</td>
                                                    <td>sedikia</td>
                                                    <td>041 79 04 05</td>
                                                    <td>restaurant</td>
                                                    <td><button type="button" className="btn btn-info btn-sm">Modifier</button></td>
                                                    <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Eden plage</td>
                                                    <td>ain turk</td>
                                                    <td>041 79 04 05</td>
                                                    <td>plage</td>
                                                    <td><button type="button" className="btn btn-info btn-sm">Modifier</button></td>
                                                    <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Paradis plage</td>
                                                    <td>ain turk</td>
                                                    <td>041 79 04 05</td>
                                                    <td>plage</td>
                                                    <td><button type="button" className="btn btn-info btn-sm">Modifier</button></td>
                                                    <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                                                </tr>
                                                <tr>
                                                    <td>la cathedrale</td>
                                                    <td>centre ville</td>
                                                    <td>041 79 04 05</td>
                                                    <td>bibliotheque</td>
                                                    <td><button type="button" className="btn btn-info btn-sm">Modifier</button></td>
                                                    <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-12">
                                    <h3 className="text-muted text-center mt-4">Ajout d'un nouveau lieu</h3>
                                    <table className="table table-striped bg-light text-center">
                                            <thead>
                                                <tr className="text-muted">
                                                    <th>Nom</th>
                                                    <th>Adresse</th>
                                                    <th>Telephone</th>
                                                    <th>Categorie</th>
                                                    <th>Ajouter</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-success">Ajouter</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-success">Ajouter</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-success">Ajouter</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-success">Ajouter</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-success">Ajouter</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Le Meridien</td>
                                                    <td>Akid lotfi</td>
                                                    <td>041 79 04 05</td>
                                                    <td>hotel</td>
                                                    <td><button type="button" className="btn btn-success">Ajouter</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Dashboard 