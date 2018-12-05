import React from 'react';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';
import { DaftarStafRow } from '../components/DaftarStafRow';


export class DaftarStafFarmasi extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            listStaf: []
        }
    }

    componentDidMount(){
        Appointment.getAllStafFarmasi().then(response =>{
            this.setState({
                loading:false,
                listStaf:response.result
            })
        })
    }

    render(){
        if(this.state.loading){
            return (
                <Loading msg="Memeriksa Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf', 'Jenis Staf']}>
                    <DaftarStafRow listStaf={this.state.listStaf}/>
                </TableContainer>
            )
        }
    }
}